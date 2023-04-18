import { API_ENDPOINT } from '../../constants'
import { Forecast, GridProperties, Period } from './types'

interface Props {
  lat: number
  lng: number
}

export const getGridProperties = async ({
  lat,
  lng
}: Props): Promise<GridProperties> => {
  const response = await fetch(`${API_ENDPOINT.POINTS}/${lat},${lng}`)

  const data = await response.json()

  return data.properties
}

export const getGridForecast = async ({
  lat,
  lng
}: Props): Promise<Forecast> => {
  const gridProperties = await getGridProperties({ lat, lng })

  const forecastEndpoint = new URL(gridProperties.forecast)

  const response = await fetch(forecastEndpoint.toString())
  const data = await response.json()
  return data.properties
}

export const getGridForecastPeriods = async ({
  lat,
  lng
}: Props): Promise<Period[]> => {
  const gridForecast = await getGridForecast({ lat, lng })

  return gridForecast.periods
}
