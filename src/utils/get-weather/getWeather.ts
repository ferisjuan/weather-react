import { Forecast, GridProperties, Period } from './types'

interface Props {
  lat: number
  lng: number
}

const getWeatherUrl = new URL('https://api.weather.gov')

export const getGridProperties = async ({
  lat,
  lng
}: Props): Promise<GridProperties> => {
  const gridEndpoint = new URL(`points/${lat},${lng}`, getWeatherUrl)

  const response = await fetch(gridEndpoint.toString())
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
