import { FC, ReactNode } from "react";
import { Center, Grid, GridItem, Text } from "@chakra-ui/react";
import WeatherDetails from "./WeatherDetails";
import { IDailyWeather } from "./WeatherForecast";
import sunnyIcon from "@/assets/images/sunny.png";
import WeatherForecast from "./WeatherForecast";

const WeatherForecastCard: FC<{ city: string }> = ({ city }) => {
  const daysWeather: IDailyWeather[] = [
    {day: "MON", conditionIcon: sunnyIcon, weatherCondition: "sunny", temperature: 27},
    {day: "TUE", conditionIcon: sunnyIcon, weatherCondition: "sunny", temperature: 27},
    {day: "WED", conditionIcon: sunnyIcon, weatherCondition: "sunny", temperature: 27},
    {day: "THU", conditionIcon: sunnyIcon, weatherCondition: "sunny", temperature: 27},
    {day: "FRI", conditionIcon: sunnyIcon, weatherCondition: "sunny", temperature: 27},
  ]
  return (
    <>
      <Center width={"900px"} height={"600px"} bg={"#9BCDD2"} borderRadius="xl">
        <Grid
          w={"100%"}
          h={"100%"}
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={2}
        >
          <GridItem colSpan={2}>
            <WeatherDetails temperature={20} humidity={50} wind={12} />
          </GridItem>
          <GridItem colSpan={3}>
            <Text size={"lg"} variant={"fullCenter"}>
              {city}
            </Text>
          </GridItem>
          <GridItem colSpan={2}></GridItem>
          <GridItem colSpan={3}>
            <WeatherForecast daysWeather={daysWeather}/>
          </GridItem>
        </Grid>
      </Center>
    </>
  );
};

export default WeatherForecastCard;
