import { useCallback, useState } from 'react'
import { Location } from '../types'
import { Period, getGeoCoords, getGridForecastPeriods } from '../utils'

export const useForecast = () => {
  const [forecast, setForecast] = useState<Period[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = useCallback(async (location: Location) => {
    try {
      setLoading(true)
      const coords = await getGeoCoords(location)

      const forecast = await getGridForecastPeriods(coords)

      setForecast(forecast)
      setLoading(false)
    } catch (error) {
      alert(error)
    }
  }, [])

  return { currentForecast: forecast[0], forecast, loading, onSubmit }
}
