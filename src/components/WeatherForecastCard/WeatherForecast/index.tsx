import { FC, ReactNode } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import DailyWeather from "./DailyWeather";

export interface IDailyWeather {
  day: string;
  conditionIcon: StaticImageData;
  temperature: number;
  weatherCondition: string;
}

const WeatherForecast: FC<{ daysWeather: IDailyWeather[] }> = ({
  daysWeather,
}) => {
  return (
    <>
      <Flex width="90%" justifyContent="space-around" mx="auto">
        {daysWeather.map(
          ({ day, conditionIcon, temperature, weatherCondition }, index) => {
            return (
              <DailyWeather
                key={index}
                day={day}
                conditionIcon={conditionIcon}
                temperature={temperature}
                weatherCondition={weatherCondition}
              />
            );
          }
        )}
      </Flex>
    </>
  );
};

export default WeatherForecast;
