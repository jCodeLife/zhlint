import chalk from 'chalk'
import { CharType, checkCharType } from './parser'

export const env: {
  stdout: NodeJS.WritableStream
  stderr: NodeJS.WritableStream
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultLogger: Console
} = {
  stdout: process.stdout,
  stderr: process.stderr,
  defaultLogger: console
}

if (global.__DEV__) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const fs = require('fs')
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { Console: NativeConsole } = require('console')
  env.stdout = fs.createWriteStream('./stdout.log', { encoding: 'utf-8' })
  env.stderr = fs.createWriteStream('./stderr.log', { encoding: 'utf-8' })
  env.defaultLogger = new NativeConsole(env.stdout, env.stderr)
}

type Position = {
  offset: number
  row: number
  column: number
  line: string
}

const getPositionByOffset = (str: string, offset: number): Position => {
  const rows = str.split('\n')
  const rowLengthList = rows.map((substr) => substr.length)
  const position = {
    offset,
    row: 0,
    column: 0,
    line: ''
  }
  while (position.offset >= 0 && rows.length) {
    position.row++
    position.column = position.offset
    position.line = rows.shift() || ''
    position.offset -= (rowLengthList.shift() || 0) + 1
  }
  return position
}

export enum ValidationTarget {
  CONTENT = 'content',
  START_CONTENT = 'startContent',
  END_CONTENT = 'endContent',
  SPACE_AFTER = 'spaceAfter',
  INNER_SPACE_BEFORE = 'innerSpaceBefore'
}

export type Validation = {
  name: string
  target: ValidationTarget
  index: number
  length: number
  message: string
}

const generateMarker = (str: string, index: number): string => {
  const prefix = str.substring(0, index)
  let fullWidthCount = 0
  let halfWidthCount = 0
  for (let i = 0; i < prefix.length; i++) {
    const charType = checkCharType(prefix[i])
    if (charType === CharType.CONTENT_FULL || charType === CharType.PUNCTUATION_FULL) {
      fullWidthCount++
    } else if (charType === CharType.CONTENT_HALF || charType === CharType.PUNCTUATION_HALF || charType === CharType.SPACE) {
      halfWidthCount++
    }
  }
  return ' '.repeat(halfWidthCount) + '　'.repeat(fullWidthCount) + `${chalk.red('^')}`
}

export const reportItem = (
  file: string | undefined = '',
  str: string,
  validations: Validation[],
  logger = env.defaultLogger
) => {
  validations.forEach(({ index, length, target, message }) => {
    // 0. final index and position
    const finalIndex =
      target === 'spaceAfter' || target === 'endContent'
        ? index + length
        : index
    const { row, column, line } = getPositionByOffset(str, finalIndex)

    // 1. headline
    const fileDisplay = `${chalk.blue.bgWhite(file)}${file ? ':' : ''}`
    const positionDisplay = `${chalk.yellow(row)}:${chalk.yellow(column)}`
    const headline = `${fileDisplay}${positionDisplay} - ${message}`

    // 2. display fragment
    const displayRange = 20
    const displayStart = column - displayRange < 0 ? 0 : column - displayRange
    const displayEnd =
      column + length + displayRange > line.length - 1
        ? line.length
        : column + length + displayRange
    const displayFragment = line
      .substring(displayStart, displayEnd)
      .replace(/\n/g, '\\n')

    // 3. marker below
    const markerBelow = generateMarker(displayFragment, column - displayStart)

    logger.error(`${headline}\n\n${displayFragment}\n${markerBelow}\n`)
  })
}

export type Result = {
  file?: string
  disabled: boolean
  origin: string
  validations: Validation[]
}

export const report = (resultList: Result[], logger = env.defaultLogger) => {
  let errorCount = 0
  const invalidFiles: string[] = []
  resultList
    .filter(({ file, disabled }) => {
      if (disabled) {
        if (file) {
          logger.log(`${chalk.blue.bgWhite(file)}: disabled`)
        } else {
          logger.log(`disabled`)
        }
        return false
      }
      return true
    })
    .forEach(({ file, origin, validations }: Result) => {
      reportItem(file, origin, validations, logger)
      errorCount += validations.length
      if (file && validations.length) {
        invalidFiles.push(file)
      }
    })
  if (errorCount) {
    logger.error('Invalid files:')
    logger.error('- ' + invalidFiles.join('\n- ') + '\n')
    logger.error(`Found ${errorCount} ${errorCount > 1 ? 'errors' : 'error'}.`)
    return 1
  } else {
    logger.log(`No error found.`)
  }
}
