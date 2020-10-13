export interface ProviderProps {}

export type ProviderFunction = (props: ProviderProps) => (children: JSX.Element) => JSX.Element
