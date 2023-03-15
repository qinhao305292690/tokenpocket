export const inputMethod = function (value) {
  //console.log('value:',value)
  //密码为八位及以上并且大小写字母数字特殊字符三项都包括
  let strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
  //密码为八位及以上并且大小写字母、数字、特殊字符三项中有两项，强度是中等
  let mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[a-z])(?=.*\\W))|((?=.*[0-9])(?=.*\\W))|((?=.*[A-Z])(?=.*\\W))).*$", "g");
  let enoughRegex = new RegExp("(?=.{8,}).*", "g");
  if (strongRegex.test(value)) {
    //console.log('强密码-----',value)
    this.note = 1
  } else if (mediumRegex.test(value)) {
    //console.log('中等密码-----',value)
    this.note = 2
  } else if (enoughRegex.test(value)) {
    //console.log('弱密码-----',value)
    this.note = 3
  } else {
    this.note = 0
  }
}
