console.log("hello, world")
let outputTXT = ""

// 点击处理函数，与用户交互
let toClick = () => {
  let txt = document.getElementById("input").value
  let arr = divideln(txt)
  outputTXT = check(arr)
  write("output", outputTXT)
  console.log(document.getElementById("output").value)
}

// 检查行为函数，实际做检查的函数
// input为字符串数组
// output为字符串
let check = (input) => {
  let output = []
  let wordMap = new Map()
  // size 为wordMap中的键值对数
  let size
  for (let i = 0; i < input.length; i++) {
    let arr_ = divide(input[i])
    // 当单条数据为"“或者”\n”的时候，跳过
    if (arr_.length === 1 && (arr_[0] === "" || arr_[0] === "\n")) {
      continue
    }
    // 判断单条数据是不是“x.x.x”的格式，x为任意字符
    // 如果不是则添加相应提示信息
    if (arr_.length !== 3) {
      output.push("出现错误，推测是标点错误，请检查 " + input[i])
    }
    // 判断单条数据是否重复
    // 如果重复则添加上次和这次的单条数据作为提示信息
    // 如果不重复则将这次的数据添加到map中
    if (wordMap.has(arr_[2])) {
      let out = "出现重复，上一次是 " + wordMap.get(arr_[2])
      out += "，这一次是 " + input[i]
      output.push(out)
    } else {
      wordMap.set(arr_[2], input[i])
    }
  }
  size = wordMap.size
  output.unshift(`有效单词数：${size}`)
  output.push("检查结束，仍可能出现单词拼写错误.")
  return output.join("\n")
}

// 将数据写到以特定值为id的元素中
let write = (id_, txt) => {
  document.getElementById(id_).innerText = txt
}

// 将字符串通过“.”分成三部分，返回数组，其余情况报错
let divide = (str_) => {
  return str_.split(".")
}

// 将换行数据分割成数组
let divideln = (str_) => {
  return str_.split("\n")
}

console.log("end.")
