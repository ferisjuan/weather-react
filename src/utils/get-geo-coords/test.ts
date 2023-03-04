import { getGeoCoords } from './getGeoCoords'

const Address = {
  city: 'Washington',
  state: 'DC',
  street: '1600 Pennsylvania Ave NW'
}

describe('getGeoCoords', () => {
  it('should return the correct coords', async () => {
    const coords = await getGeoCoords(Address)
    expect(coords).toEqual({
      lat: 38.89874352692143,
      lng: -77.0365407291077
    })
  })
})
