function range(start: number, end: number) {
  const temp: number[] = [];
  for (let i = start; i <= end; i++) {
    temp.push(i);
  }
  return temp;
}

function unique(array: any[]) {
  const obj = {};
  return array.filter(item => obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true));
}

interface RecursiveArray<T> extends Array<T | RecursiveArray<T>> {}

function flatten(array: RecursiveArray<any>): any[] {
  if (!array) {return []}
  return array.reduce((result, next) => result.concat(Array.isArray(next) ? flatten(next) : next), [])
}

function difference(a: any[], b: any[]) {
  return a.filter(i => b.indexOf(i) === -1);
}

function intersection(a: any[], b: any[]) {
  return a.filter(i => b.indexOf(i) > -1);
}

function compare(a: string | number, b: string | number) {
  // 按某种排序标准进行比较, a 小于 b
  if (a < b) { return -1}
  if (a > b) {return 1}
  // a must be equal to b
  return 0;
}

function sort(array: Array<string | number>): Array<string | number> {
  return array.sort(compare)
}

function towArraysAreEqual(a: Array<number | string>, b: Array<number | string>) {
  return a.length === b.length && JSON.stringify(sort(a)) === JSON.stringify(sort(b))
}

export { range, unique, flatten, difference, intersection, sort, towArraysAreEqual };
