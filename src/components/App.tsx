import { CurrentForecast } from './current-forecast'
import { LocationForm } from './form/LocationForm.component'
import { PreviewForecast } from './preview-forecast'
import { useForecast } from './useForecast.hook'

function App() {
  const { currentForecast, forecast, onSubmit } = useForecast()

  return (
    <main className="flex h-screen justify-center bg-zinc-800">
      <section className="grid w-4/5 grid-cols-6 grid-rows-6 justify-center gap-6 bg-blue-600/40 py-14">
        <article className="prose ml-6 min-w-max text-center">
          <h1>Weather Wiz</h1>
        </article>

        <article className="col-span-2 col-start-5 px-1">
          <LocationForm onSubmit={onSubmit} />
        </article>

        <article className="col-span-3 col-start-2 row-span-3">
          <CurrentForecast currentForecast={currentForecast} />
        </article>

        {forecast.length > 0 && (
          <article className="col-span-6 row-span-2 mx-8">
            <PreviewForecast forecast={forecast} />
          </article>
        )}
      </section>
    </main>
  )
}

export default App
