import { FC, ReactNode } from "react";
import { Center, Grid, GridItem, Text, Divider, Flex } from "@chakra-ui/react";

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
          <Flex mx={"auto"} flexDirection={"column"} height={"100%"}>
            <Text size={"lg"} variant={"fullCenter"} flexGrow={1}>
              {`${temperature} \u00B0C`}
            </Text>
            <Text size={"sm"} variant={"horizontalCenter"}>
              Sunny
            </Text>
          </Flex>
        </GridItem>
        <GridItem colSpan={2} colStart={2}>
          <Text size={"sm"} variant={"fullCenter"}>
            WIND SPEED
          </Text>
        </GridItem>
        <GridItem colSpan={1} rowSpan={2}>
          <Center height="100%">
            <Divider orientation="vertical" color="black" border={"1px"} />
          </Center>
        </GridItem>
        <GridItem colSpan={2}>
          <Text size={"sm"} variant={"fullCenter"}>
            HUMIDITY
          </Text>
        </GridItem>
        <GridItem colSpan={2} colStart={2}>
          <Text size={"sm"} variant={"fullCenter"}>
            {`${wind} KPH`}
          </Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Text size={"sm"} variant={"fullCenter"}>
            {`${humidity} %`}
          </Text>
        </GridItem>
      </Grid>
    </>
  );
};

export default WeatherDetails;
