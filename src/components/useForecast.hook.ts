import { useCallback, useMemo, useState } from 'react'
import { Location } from '../types'
import { getGeoCoords, getGridForecastPeriods, Period } from '../utils'

export const useForecast = () => {
  const [forecast, setForecast] = useState<Period[]>([])

  const currentForecast = useMemo(() => forecast[0], [forecast])

  const onSubmit = useCallback(async (location: Location) => {
    const coords = await getGeoCoords(location)

    const forecast = await getGridForecastPeriods(coords)
    setForecast(forecast)
  }, [])

  return { currentForecast, forecast, onSubmit }
}
