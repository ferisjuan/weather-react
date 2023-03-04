//use geocoding census api use URL from javascript
const geoCordsUrl = new URL('https://geocoding.geo.census.gov')
geoCordsUrl.pathname = '/geocoder/locations/address'

interface Props {
  city: string
  state: string
  street: string
}

interface GeoCoords {
  lat: number
  lng: number
}

export const getGeoCoords = async ({
  city,
  state,
  street
}: Props): Promise<GeoCoords> => {
  const params = new URLSearchParams({
    street,
    city,
    state,
    benchmark: 'Public_AR_Current',
    format: 'json'
  })
  geoCordsUrl.search = params.toString()

  const response = await fetch(geoCordsUrl.toString())
  const data = await response.json()

  const [matches] = data.result.addressMatches
  const { x: lng, y: lat } = matches.coordinates
  return { lat, lng }
}
