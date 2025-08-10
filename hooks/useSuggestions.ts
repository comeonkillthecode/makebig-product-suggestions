import { useState } from 'react'

export function useSuggestions() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchSuggestions = async (formData: any) => {
    try {
      setIsLoading(true)
      setError(null)

      const response = await fetch('/api/suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      
      if (data.error) {
        throw new Error(data.error)
      }

      return data // Return the results instead of setting local state
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch suggestions'
      setError(errorMessage)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, error, fetchSuggestions }
}
