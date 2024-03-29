import { lowerFirstLetter } from './namer'
const prefix = 'am'

function classArray(this: void, ...args: ClassValue[]): string[] {
  return unique(
    flatten(
      args.map(a => {
        if (!a) {
          return ''
        }
        if (typeof a === 'string') {
          return a
        } else if (Array.isArray(a)) {
          return a
        } else {
          return Object.keys(a).filter(k => a[k])
        }
      })
    )
  )
}
export default function classes(this: void, ...args: ClassValue[]): string {
  return classArray.apply(undefined, args).join(' ')
}
function createScopedClasses(
  componentName: string
): (...args: ClassValue[]) => string {
  return (...args) => {
    return classArray
      .apply(undefined, args.length === 0 ? [''] : args)
      .map((c: string) => {
        return [prefix, lowerFirstLetter(componentName), c]
          .filter(v => v)
          .join('-')
      })
      .join(' ')
  }
}
export { createScopedClasses }

function flatten(input: any[]) {
  const stack = [...input]
  const result = []
  while (stack.length) {
    const next = stack.pop()
    if (Array.isArray(next)) {
      stack.push(...next)
    } else {
      result.push(next)
    }
  }
  return result.reverse()
}
function unique(array: any[]): any[] {
  return Array.from(new Set(array))
}
