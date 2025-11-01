import type { ReactNode } from 'react'

export function render(element: ReactNode, container: Element | DocumentFragment): void
export function hydrate(element: ReactNode, container: Element | DocumentFragment): void
export namespace client {
  interface Root {
    render(children: ReactNode): void
    unmount(): void
  }
  function createRoot(container: Element | DocumentFragment): Root
}
export {}
