import { Period } from '~/utils'

interface Props {
  forecast: Period[]
}

export const PreviewForecast: React.FC<Props> = ({ forecast }) => {
  return (
    <div className="h-full overflow-auto">
      <table className="table-compact table  w-full">
        <thead>
          <tr className="prose">
            <th>Weather</th>
            <th>Date</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Wind (mph)</th>
          </tr>
        </thead>
        <tbody>
          {forecast.slice(1, -1).map((period) => (
            <tr
              key={period.number}
              className={`${!period.isDaytime && 'active'}`}
            >
              <th>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img alt={period.icon} src={period.icon} />
                    </div>
                  </div>
                </div>
              </th>

              <th className="prose">{period.name}</th>

              <th className="prose">
                {period.temperature}&deg; {period.temperatureUnit}
              </th>

              <th className="prose">{period.relativeHumidity.value}</th>

              <th className="prose">
                {`${period.windSpeed.replace(' to ', '-').replace('mph', '')} ${
                  period.windDirection
                }`}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
