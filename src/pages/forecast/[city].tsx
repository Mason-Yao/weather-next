import { useRouter } from "next/router"
import { FC } from "react"
import { Center } from "@chakra-ui/react";
import WeatherForecastCard from "@/components/WeatherForecastCard";

const CityForecast: FC = () => {
  const router = useRouter();
  const city = router.query.city as string;
  return (
    <>
      <Center>
        <WeatherForecastCard city={city} />
      </Center>
    </>
  )
}

export default CityForecast;