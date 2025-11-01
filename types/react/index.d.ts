export type ReactNode = any
export type Key = string | number
export interface Attributes {
  key?: Key
}
export interface ClassAttributes<T> extends Attributes {
  ref?: any
}
export type JSXElementConstructor<P> = ((props: P) => ReactNode) | (new (props: P) => Component<P, any>)
export interface Component<P = {}, S = {}> {}
export interface FunctionComponent<P = {}> {
  (props: P & { children?: ReactNode }): ReactNode
}
export type FC<P = {}> = FunctionComponent<P>
export interface Dispatch<A> {
  (value: A): void
}
export type SetStateAction<S> = S | ((prevState: S) => S)
export function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>]
export function useEffect(effect: () => void | (() => void), deps?: ReadonlyArray<any>): void
export function useMemo<T>(factory: () => T, deps: ReadonlyArray<any>): T
export type MutableRefObject<T> = { current: T }
export function useRef<T>(initialValue: T): MutableRefObject<T>
export interface Context<T> {
  Provider: FC<{ value: T }>
  Consumer: FC<{ children: (value: T) => ReactNode }>
}
export function createContext<T>(defaultValue: T): Context<T>
export function useContext<T>(context: Context<T>): T
export interface ChangeEvent<T = Element> {
  target: T
}
export interface SyntheticEvent<T = Element> {
  target: T
}
export type ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> = any
export interface RefAttributes<T> extends Attributes {
  ref?: ((instance: T | null) => void) | MutableRefObject<T | null> | null
}
export const Fragment: unique symbol
export default class React {
  static createElement: (...args: any[]) => ReactElement
}
export as namespace React

declare global {
  namespace JSX {
    type Element = ReactElement
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}
