function checkCharType(char) {
  // console.log(char.charCodeAt(0).toString(16), char)
  // console.log(char.charCodeAt(1).toString(16), char)

  // space
  if (char.match(/\s/)) {
    return 'space'
  }

  // 0-9
  if (char.match(/[0-9]/)) {
    return 'digit'
  }

  if (',.;:?!~-+*/\\%=&|"\'`()[]{}<>'.indexOf(char) >= 0) {
    return 'latin-punctuation'
  }

  if ('，。、；：？！…—～｜·‘’“”《》【】「」（）'.indexOf(char) >= 0) {
    return 'cjk-punctuation'
  }

  // https://jrgraphix.net/research/unicode.php
  // Basic Latin
  if (char.match(/[\u0020-\u007F]/)) {
    return 'latin'
  }
  // Latin-1 Supplement
  if (char.match(/[\u00A0-\u00FF]/)) {
    return 'latin'
  }
  // Latin Extended-A
  if (char.match(/[\u0100-\u017F]/)) {
    return 'latin'
  }
  // Latin Extended-B
  if (char.match(/[\u0180-\u024F]/)) {
    return 'latin'
  }
  // Greek and Coptic
  if (char.match(/[\u0370-\u03FF]/)) {
    return 'greek'
  }
  
  // https://stackoverflow.com/a/21113538
  // CJK Unified Ideographs
  if (char.match(/[\u4E00-\u9FFF]/)) {
    return 'cjk'
  }
  // CJK Unified Ideographs Extension A
  if (char.match(/[\u3400-\u4DBF]/)) {
    return 'cjk'
  }
  // CJK Unified Ideographs Extension B
  if (char.match(/[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6]/)) {
    return 'cjk'
  }
  // CJK Unified Ideographs Extension C
  if (char.match(/\ud869[\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34]/)) {
    return 'cjk'
  }
  // CJK Unified Ideographs Extension D
  if (char.match(/\ud86d[\udf40-\udfff]|\ud86e[\udc00-\udc1d]/)) {
    return 'cjk'
  }
  // CJK Compatibility Ideographs
  if (char.match(/[\uF900-\uFAFF]/)) {
    return 'cjk'
  }
  // CJK Compatibility Forms
  if (char.match(/[\uFE30-\uFE4F]/)) {
    return 'cjk'
  }
  // CJK Radicals Supplement
  if (char.match(/[\u2E80-\u2EFF]/)) {
    return 'cjk'
  }
  // Private Use Area (part)
  if (char.match(/[\uE815-\uE864]/)) {
    return 'cjk'
  }
  // todo: wrong regexp
  // learn: https://mathiasbynens.be/notes/javascript-unicode
  // if (char.match(/[\u20000-\u2A6DF]/)) {
  //   return 'cjk'
  // }
  // // CJK Compatibility Ideographs Supplement
  // if (char.match(/[\u2F800-\u2FA1F]/)) {
  //   return 'cjk'
  // }

  // CJK Symbols and Punctuation
  if (char.match(/[\u3000-\u303F]/)) {
    return 'cjk-punctuation'
  }

  // emoji
  // todo: wrong regexp
  // learn: https://mathiasbynens.be/notes/javascript-unicode
  // if (char.match(/[\u1F600-\u1F64F]/)) {
  //   return 'emoji'
  // }

  return 'unknown'
}

// special case
// - 3 minite(s) left
// - (xxxx
// - 今天是2019年06月26号 vs 请于 2019-06-26 之前完成
// unit types
// - special: html 标签, 代码片段, 英文中的单引号?
// - 文字: 中文, 英文, 数字
// - 特殊组合: 日期
// - featured
//   - 成对: 括号
//   - 分层: 引号, 书名号
//   - 分段: 逗号, 句号, 冒号, 分号, 顿号, 省略号, 破折号
// algorithm
// - 逐个字符
// - 分段？断开
// - 分层？子组
// - 成对：记录
// - html 标签：记录
// - markdown 标签：记录
// - 包裹标签：跳过匹配下一个对
// - 特殊空格：前后都是英文或数字
// - 特殊单引号：前面有一个右单引号，前方没有空格
// - 特殊组合：日期
// structure
// - 嵌套式小组：小组标点符号
//   - 连续英文or数字or特殊单引号
//   - 英文or数字or特殊单引号之间的空格
//   - emoji/unicode 两侧的空格
//   - 连续中文
//   - 特殊标签包裹
//   - 分段标点符号
//   - 连续 emoji
//   - 连续 unicode?
// - 记录：标签的开始和结束，括号的开始和结束，日期组合
module.exports = (str, options) => {
  console.log(str)
  // - ''
  // - 'latin'
  // - 'cjk'
  // - 'space'
  // - 'split'
  // - 'sub'
  // - 'mark'
  let tokens = []
  tokens.current = {}
  tokens.last = {}
  tokens.left = ''
  tokens.right = ''
  const tokensStack = []
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    const type = checkCharType(char)
    if (type === 'space') {
      let spaceContent = char
      let nextIndex = i + 1
      let nextChar = str[nextIndex]
      let nextType = checkCharType(nextChar)
      while (nextType === 'space') {
        spaceContent = spaceContent + nextChar
        nextIndex++
        nextChar = str[nextIndex]
        nextType = checkCharType(nextChar)
      }
      if (nextType === tokens.current.type) {
        tokens.current.content = tokens.current.content + spaceContent
      } else {
        if (tokens.current.content) {
          tokens.current.end = i - 1
          tokens.push(tokens.current)
          tokens.last = tokens.current
          tokens.current = {}
        }
      }
      i = nextIndex - 1
    } else if (
      // is sub or mark
      (type === 'cjk-punctuation' || type === 'latin-punctuation') &&
      `“”‘’"'()《》【】「」（）`.indexOf(char) >= 0
    ) {
      // if left or right
      let isLeft =
        `“‘(《【「（`.indexOf(char) >= 0 ||
        `"'`.indexOf(char) >= 0 && tokens.left === char
      if (
        `”’)》】」）`.indexOf(char) >= 0 &&
        (!tokens.left || char.charCodeAt(0) - tokens.left.charCodeAt(0) !== 1)
      ) {
        throw new Error(`Error closed punctuation ${char} in column ${i}!`)
      }
      if (isLeft) {
        // end last token
        if (tokens.current.content) {
          tokens.current.end = i - 1
          tokens.push(tokens.current)
          tokens.last = tokens.current
          tokens.current = {}
        }
        // new last left
        const newTokens = []
        newTokens.type = 'sub'
        newTokens.current = {}
        newTokens.last = {}
        newTokens.left = char
        newTokens.start = i
        newTokens.right = ''
        tokens.push(newTokens)
        tokensStack.push(tokens)
        tokens = newTokens
      } else {
        // end last token
        if (tokens.current.content) {
          tokens.current.end = i - 1
          tokens.push(tokens.current)
          tokens.last = tokens.current
          tokens.current = {}
        }
        // end last left
        tokens.right = char
        tokens.end = i
        tokens = tokensStack.pop()
      }
    } else if (type === tokens.current.type) {
      tokens.current.content = tokens.current.content + char
    } else {
      if (tokens.current.content) {
        tokens.current.end = i - 1
        tokens.push(tokens.current)
        tokens.last = tokens.current
      }
      tokens.current = {
        type,
        content: char,
        start: i
      }
    }
  }
  if (tokens.current.content) {
    tokens.current.end = str.length - 1
    tokens.push(tokens.current)
    tokens.last = tokens.current
    tokens.current = {}
  }
  // if still last left not flushed, throw error
  console.log(tokens)
  return str
}
module.exports.checkCharType = checkCharType
