import { Period } from '~/utils'
import { Card } from '../card'

interface Props {
  currentForecast: Period
}

export const CurrentForecast: React.FC<Props> = ({ currentForecast }) => {
  return (
    <Card>
      {currentForecast ? (
        <>
          <img
            alt={currentForecast.icon}
            className="mt-8 h-48 w-48"
            src={currentForecast.icon}
          />
          <div className="prose text-center">
            <h1>{currentForecast.name}</h1>
            <h2>
              {currentForecast.temperature} &deg;
              {currentForecast.temperatureUnit}
            </h2>
            <p>{currentForecast?.detailedForecast}</p>
          </div>
        </>
      ) : (
        <section className="flex flex-1 items-center justify-center">
          Please search a location on the right.
        </section>
      )}
    </Card>
  )
}
