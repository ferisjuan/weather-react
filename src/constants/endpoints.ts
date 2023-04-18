import { Location } from '~/types'

export const WEATHER_API_URL = {
  WEATHER: 'https://api.weather.gov'
}

export const API_ENDPOINT = {
  GEOCODER: '/api-geocoder/geocoder/locations/address',
  GRIDPOINTS: `${WEATHER_API_URL.WEATHER}/gridpoints`,
  POINTS: `${WEATHER_API_URL.WEATHER}/points`
}

export const getGeocodeUrl = ({
  city,
  state,
  street,
  zip
}: Location): string => {
  return `/api-geocoder/geocoder/locations/address?street=${street}&city=${city}&state=${state}&zip=${zip}&benchmark=Public_AR_Current&format=json`
}
