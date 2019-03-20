const prefix = 'am'

function classNames(componentName: string, ...args: any): string {
  const classes: string[] = []
  let moduleClass: string =
    componentName && `${prefix}-${componentName.toLowerCase()}`
  moduleClass && classes.push(moduleClass)
  args.forEach((arg: any) => {
    if (typeof arg === 'string') {
      classes.push(`${moduleClass}${arg && '-' + arg}`)
    } else if (arg instanceof Array) {
      arg.forEach(str => typeof str === 'string' && classes.push(str))
    } else if (typeof arg === 'object' && !(arg instanceof Array)) {
      for (const key in arg) {
        if (arg.hasOwnProperty(key) && arg[key]) {
          classes.push(key)
        }
      }
    }
  })
  return classes.filter(v => v).join(' ')
}
export default classNames
