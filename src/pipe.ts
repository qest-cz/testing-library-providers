type PipeFn = (...args: any[]) => any

export const pipe = (...fns: PipeFn[]) => (data: any) =>
  fns.reduce((acc, fn) => fn(acc), data)
