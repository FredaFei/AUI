export default function isSimpleArrayEqual(
  arg1: string[] | number[],
  arg2: string[] | number[]
):boolean {
  if(arg1.length !== arg2.length){
    return false
  }
  const copyArg1 = JSON.parse(JSON.stringify(arg1)).sort()
  const copyArg2 = JSON.parse(JSON.stringify(arg2)).sort()
  for(let i=0;i<copyArg1.length;i++){
    if(copyArg1[i]!==copyArg2[i]){
      return false
    }
  }
  return true
}
