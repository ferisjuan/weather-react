import { Period } from '~/utils'
import { Card } from '../card'

interface Props {
  forecast: Period[]
}

export const PreviewForecast: React.FC<Props> = ({ forecast }) => {
  return (
    <div className="carousel flex justify-evenly">
      {forecast.slice(1, 6).map((period) => (
        <div
          className="carousel-item flex max-w-[200px] flex-col"
          key={period.number}
        >
          <Card>
            <img
              alt={period.icon}
              className="mt-2 h-24 w-24"
              src={period.icon}
            />
            <div className="prose w-28">
              <p className="overflow-hidden text-ellipsis">{period.name}</p>
            </div>
            <p>
              {period.temperature}&deg; {period.temperatureUnit}
            </p>
          </Card>
        </div>
      ))}
    </div>
  )
}
