import React, { useCallback, useEffect, useRef } from 'react'

export const useEnhancedEffect = (typeof window !== 'undefined') ? React.useLayoutEffect : React.useEffect

export function useEventCallback(fn: any) {
  const ref = useRef(() => {
    throw new Error('Cannot call an event handler while rendering.')
  })

  useEffect(() => {
    ref.current = fn
  }, [fn])

  return useCallback(() => {
    const fn = ref.current
    return fn()
  }, [ref])
}
