import { render } from '@testing-library/react'
import { ProviderFunction, ProviderProps } from 'types'

import { pipe } from './pipe'

export const enhanceRender = (...fns: ProviderFunction[]) => (
  ui: JSX.Element,
  props?: ProviderProps,
) => {
  const providerFns = fns.map(fn => fn(props || {}))

  const wrapper = ({ children }: { children?: React.ReactNode }) => pipe(...providerFns)(children)

  return render(ui, { wrapper })
}
