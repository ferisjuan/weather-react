import { useCallback, useState } from 'react'
import type { Location } from '~/types'
import { getGeoCoords, getGridForecastPeriods, type Period } from '~/utils'
import { Card } from './card'
import { LocationForm } from './form/LocationForm.component'

function App() {
  const [forecast, setForecast] = useState<Period[]>([])
  console.log('🚀 ~ App ~ forecast:', forecast)

  const onSubmit = useCallback(async (location: Location) => {
    const coords = await getGeoCoords(location)

    const forecast = await getGridForecastPeriods(coords)
    setForecast(forecast)
  }, [])

  return (
    <main className="flex h-screen justify-center bg-zinc-800">
      <section className="grid min-h-screen w-4/5 max-w-screen-lg grid-cols-6 grid-rows-6 justify-center gap-6 bg-blue-600/40 bg-hero-pattern py-14">
        <article className="prose ml-6 min-w-max text-center">
          <h1>Weather Wiz</h1>
        </article>

        <article className="col-span-2 col-start-5 px-1">
          <LocationForm onSubmit={onSubmit} />
        </article>

        <article className="col-span-3 col-start-2 row-span-4">
          <Card>
            <p>card</p>
          </Card>
        </article>

        <article className="col-span-6 mx-8 row-span-2">
          <div className="carousel flex gap-4">
            {forecast.slice(0,5).map((period) => (
              <div className="carousel-item flex flex-column">
                <Card key={period.number}>
                  <p>{period.temperature}</p>
                </Card>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
