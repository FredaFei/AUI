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

function difference(a: any[], b: any[]) {
  return a.filter(i => b.indexOf(i) === -1);
}

function intersection(a: any[], b: any[]) {
  return a.filter(i => b.indexOf(i) > -1);
}

export { range, unique, difference, intersection };
