import { useCallback, useState } from 'react'
import { Location } from '../types'
import { Period, getGeoCoords, getGridForecastPeriods } from '../utils'

export const useForecast = () => {
  const [forecast, setForecast] = useState<Period[]>([])

  const onSubmit = useCallback(async (location: Location) => {
    const coords = await getGeoCoords(location)

    const forecast = await getGridForecastPeriods(coords)
    setForecast(forecast)
  }, [])

  return { currentForecast: forecast[0], forecast, onSubmit }
}
