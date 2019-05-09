function range(start: number, end: number) {
  const temp: number[] = []
  for (let i = start; i <= end; i++) {
    temp.push(i)
  }
  return temp
}

export { range }
