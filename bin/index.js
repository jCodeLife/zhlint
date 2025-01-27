#!/usr/bin/env node

// CLI
// - validate (by default), fix, output, help

const fs = require('fs')
const minimist = require('minimist')
const glob = require('glob')
const { run, report } = require('../')

const argv = minimist(process.argv.slice(2))

const help = () =>
  console.log(
    `
This is zhlint!

Usage:
  zhlint <file-pattern>[, ...]
  zhlint <file-pattern>[, ...] --fix
  zhlint --fix <file-pattern>
  zhlint --fix=<file-pattern>
  zhlint <input-file-path> --output <output-file-path>
  zhlint <input-file-path> --output=<output-file-path>
  zhlint --help

Examples:
  zhlint foo.md
  zhlint foo.md --fix
  zhlint *.md
  zhlint *.md --fix
  zhlint foo.md bar.md
  zhlint foo.md bar.md --fix
  zhlint --fix foo.md
  zhlint --fix=foo.md
  zhlint --fix *.md
  zhlint --fix=*.md
  zhlint foo.md --output dest.md
  zhlint foo.md --output=dest.md
`.trim()
  )

if (argv.h || argv.help) {
  help()
  return
}

// To support other CLI conventions like `lint-staged`.
if (typeof argv.fix === 'string') {
  argv._.push(argv.fix)
  argv.fix = true
}

if (argv._ && argv._.length) {
  const [filePattern] = [...argv._]
  try {
    const files = glob.sync(filePattern)
    const resultList = files.map((file) => {
      console.log(`[start] ${file}`)
      const origin = fs.readFileSync(file, { encoding: 'utf8' })
      const { result, validations } = run(origin)
      return {
        file,
        origin,
        result,
        validations
      }
    })
    const exitCode = report(resultList)
    if (argv.o || argv.output) {
      if (files.length === 1) {
        const { file, result } = resultList[0]
        fs.writeFileSync(argv.o || argv.output, result)
        console.log(`[output] ${file} -> ${argv.o || argv.output}`)
      } else {
        console.error(
          `Sorry. If you use argument '--output' or '-o', you could only pass one file as the input.`
        )
      }
    } else if (argv.f || argv.fix) {
      resultList.forEach(({ file, value, result }) => {
        if (value !== result) {
          fs.writeFileSync(file, result)
          console.log(`[fixed] ${file}`)
        }
      })
    } else {
      if (exitCode) {
        process.exit(exitCode)
      }
    }
  } catch (e) {
    console.error(e)
  }
  return
}

help()
