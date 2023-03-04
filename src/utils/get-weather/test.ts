import { getGeoCoords } from '../get-geo-coords'
import { getGridForecastPeriods, getGridProperties } from './getWeather'

const Address = {
  city: 'Washington',
  state: 'DC',
  street: '1600 Pennsylvania Ave NW'
}

describe('getGridProperties', async () => {
  it('should return a json object', async () => {
    const coords = await getGeoCoords(Address)
    const gridProperties = await getGridProperties(coords)

    expect(gridProperties['@id']).toEqual(
      'https://api.weather.gov/points/38.8987,-77.0365'
    )
  })

  it('should return a grid forecast url', async () => {
    const coords = await getGeoCoords(Address)
    const gridProperties = await getGridProperties(coords)

    expect(gridProperties.forecast).toEqual(
      'https://api.weather.gov/gridpoints/LWX/97,71/forecast'
    )
  })

  it('should check the return type of getGridForecastPeriods', async () => {
    const coords = await getGeoCoords(Address)
    const gridProperties = await getGridForecastPeriods(coords)

    expect(gridProperties).toBeInstanceOf(Array)
  })
})
