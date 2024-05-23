"use client"

import { useState, useEffect } from "react"


interface SensorType {
  sensor_id: string,
  temp: number,
  humidity: number
}


export function Sensor(sensor: SensorType) {
  return (
    <div className="sensor text-white gap-5 self-start rounded-lg px-6 py-5 transition-colors hover:bg-gray-400">
      <h3>{sensor.sensor_id}</h3>
      <div className="data">
        {sensor.temp}
        <span>&#8451;</span> / {sensor.humidity}%
      </div>
    </div>
  )
}

export default function Sensors() {
  const [sensors, setSensors] = useState<SensorType[]>([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(process.env.NEXT_PUBLIC_API_URL + "/api/v1/sensors/")
    .then((response) => response.json())
    .then((data) => setSensors(data.results))
    .catch((error) => console.log(error))
    .finally(() =>  setLoading(false))
  }, [])

  if (!sensors) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>

  return <>
    {sensors.toSorted((a, b) => a.sensor_id > b.sensor_id ? 1 : -1).map(sensor => (
      <div key={sensor.sensor_id}>
        <Sensor sensor_id={sensor.sensor_id} temp={sensor.temp} humidity={sensor.humidity} />
      </div>
    ))}
  </>
}
