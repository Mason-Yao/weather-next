import { FC, ReactNode } from "react";
import { Center, Grid, GridItem, Text, Divider, Button } from "@chakra-ui/react";

const WeatherDetails: FC<{temperature: number, wind: number, humidity: number}>= ({temperature, wind, humidity}) => {
  return (
    <>
      <Grid
        w="100%"
        h="100%"
        templateRows="repeat(4. 1fr)"
        templateColumns="repeat(7, 1fr)"
        gap={4}
      >
        <GridItem colSpan={7} rowSpan={2}>
          <Text w="100%" h="100%" mx={"auto"} fontSize={"50px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            {temperature}
          </Text>
        </GridItem>
        <GridItem colSpan={2} colStart={2}>
          <Text size={"md"}>
            WIND SPEED
          </Text>
        </GridItem>
        <GridItem colSpan={1} rowSpan={2}>
          <Center height="100%">
            <Divider orientation="vertical" color="black" border={"1px"}/>
          </Center>
        </GridItem>
        <GridItem colSpan={2}>
          <Text size={"md"}>
            HUMIDITY
          </Text>
        </GridItem>
        <GridItem colSpan={2} colStart={2}>
          <Text size={"md"}>
            {`${wind} KPH`}
          </Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Text size={"md"}>
            {`${humidity} %`}
          </Text>
        </GridItem>
      </Grid>
    </>
  );
};

export default WeatherDetails;
