export interface GridProperties {
  '@id': string
  '@type': string
  cwa: string
  forecastOffice: string
  gridId: string
  gridX: number
  gridY: number
  forecast: string
  forecastHourly: string
  forecastGridData: string
  observationStations: string
  relativeLocation: RelativeLocation
  forecastZone: string
  county: string
  fireWeatherZone: string
  timeZone: string
  radarStation: string
}

export interface RelativeLocation {
  type: string
  geometry: Geometry
  properties: Forecast
}

export interface Geometry {
  type: string
  coordinates: number[]
}

export interface Forecast {
  city: string
  state: string
  distance: Bearing
  bearing: Bearing
}

export interface Bearing {
  unitCode: string
  value: number
}

export interface GridForecast {
  '@context': Array<ContextClass | string>
  type: string
  geometry: Geometry[]
  properties: Forecast
}

export interface ContextClass {
  '@version': string
  wx: string
  geo: string
  unit: string
  '@vocab': string
}

export interface Forecast {
  updated: string
  units: string
  forecastGenerator: string
  generatedAt: string
  updateTime: string
  validTimes: string
  elevation: Elevation
  periods: Period[]
}

export interface Elevation {
  unitCode: UnitCode
  value: number | null
}

export enum UnitCode {
  WmoUnitDegC = 'wmoUnit:degC',
  WmoUnitM = 'wmoUnit:m',
  WmoUnitPercent = 'wmoUnit:percent'
}

export interface Period {
  number: number
  name: string
  startTime: string
  endTime: string
  isDaytime: boolean
  temperature: number
  temperatureUnit: TemperatureUnit
  temperatureTrend: null
  probabilityOfPrecipitation: Elevation
  dewpoint: Elevation
  relativeHumidity: Elevation
  windSpeed: string
  windDirection: string
  icon: string
  shortForecast: string
  detailedForecast: string
}

export enum TemperatureUnit {
  F = 'F'
}
