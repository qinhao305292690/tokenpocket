import './axios'
import './lazy_use'
import './index.less'

export function getcookie(key) {
  var str = document.cookie;
  var startIndex = str.indexOf(key);
  var value="";
  if(startIndex===-1){//找不到
    return value;
  }
  var endIndex = str.indexOf(";",startIndex);
  if(endIndex===-1){//找不到
    value = str.substring(startIndex+key.length+1)
  }else{
    value = str.substring(startIndex+key.length+1,endIndex)
  }
  return value;
}
