const amUniqueIDMap = {}
function uniqueId(prefix='$am-$'){
  if (!amUniqueIDMap[prefix]){
    amUniqueIDMap[prefix] = 0
  }
  amUniqueIDMap[prefix]++
  return `${prefix}-${amUniqueIDMap[prefix]}`
}
export default uniqueId