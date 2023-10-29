import { ReactNode, createContext, useEffect, useState } from "react";

export interface ILoadingContextData {
  loading: boolean
}

export const LoadingContext = createContext<ILoadingContextData>({
  loading: true
})

export function LoadingContextProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])


  return (
    <LoadingContext.Provider value={{ loading }} >
      {children}
    </LoadingContext.Provider>
  )
}

export function LoadingContextConsumer({ children }: { children: (value: ILoadingContextData) => ReactNode }) {
  return <LoadingContext.Consumer>{children}</LoadingContext.Consumer>
}

