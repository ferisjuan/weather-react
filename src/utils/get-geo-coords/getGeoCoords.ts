import { getGeocodeUrl } from '~/constants'
import { Location } from '~/types'

const requestOptions: RequestInit = {
  headers: new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json; charset=utf-8'
  })
}

interface GeoCoords {
  lat: number
  lng: number
}

export const getGeoCoords = async (location: Location): Promise<GeoCoords> => {
  const response = await fetch(getGeocodeUrl(location), requestOptions)

  const data = await response.json()

  const [matches] = data.result.addressMatches
  const { x: lng, y: lat } = matches.coordinates
  return { lat, lng }
}
