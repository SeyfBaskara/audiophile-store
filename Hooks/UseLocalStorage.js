import { useState, useEffect } from 'react'

export function useLocalStorage(key, initialValue = null) {
   const [value, setValue] = useState(() => {
      try {
         const jsonValue = localStorage.getItem(key)
         if (jsonValue !== null) {
            return JSON.parse(jsonValue)
         }
         return initialValue
      } catch (error) {
         return initialValue
      }
   })

   useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value))

      if (value.length === 0) {
         localStorage.removeItem(key)
      }
   }, [key, value])

   const clearLocalStorage = () => {
      return localStorage.removeItem(key)
   }

   return [value, setValue, clearLocalStorage]
}
