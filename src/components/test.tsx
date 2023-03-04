import { screen } from '@testing-library/react'

describe('<App />', () => {
  it('should render the App', () => {
    expect(
      screen.getByRole('heading', {
        name: /Hello!/i,
        level: 1
      })
    ).toBeInTheDocument()
  })
})
