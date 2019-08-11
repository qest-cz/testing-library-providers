import { render } from '@testing-library/react'

import { pipe } from './pipe'

export interface ProviderProps {}

export type ProviderFunction = (props: ProviderProps) => (children: JSX.Element) => JSX.Element

export const enhanceRender = (...fns: ProviderFunction[]) => (
  ui: JSX.Element,
  props?: ProviderProps,
) => {
  const providerFns = fns.map(fn => fn(props || {}))

  const wrapper = ({ children }: { children?: React.ReactNode }) => pipe(...providerFns)(children)

  return render(ui, { wrapper })
}
