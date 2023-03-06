import { Location } from '../../types'

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

export const getGeoCoords = async ({
  city,
  state,
  street,
  zip
}: Location): Promise<GeoCoords> => {
  const response = await fetch(
    `/api-geocoder/geocoder/locations/address?street=${street}&city=${city}&state=${state}&zip=${zip}&benchmark=Public_AR_Current&format=json`,
    requestOptions
  )

  const data = await response.json()

  const [matches] = data.result.addressMatches
  const { x: lng, y: lat } = matches.coordinates
  return { lat, lng }
}
