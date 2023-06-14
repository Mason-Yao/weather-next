import { FC, ReactNode } from "react";
import { Center, Grid, GridItem } from "@chakra-ui/react";
import WeatherDetails from "./WeatherDetails";

const WeatherForecastCard:FC<{city:string}> = ({ city }) => {
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
            <WeatherDetails temperature={20} humidity={50} wind={12}/>
          </GridItem>
          <GridItem colSpan={3}>
          </GridItem>
        </Grid>
      </Center>
    </>
  );
};

export default WeatherForecastCard;
