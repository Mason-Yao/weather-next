import { FC, ReactNode } from "react";
import { Center, Text, Flex, Box, Img } from "@chakra-ui/react";
import { IDailyWeather } from "..";

const DayWeather: FC<IDailyWeather> = ({
  day,
  conditionIcon,
  temperature,
  weatherCondition,
}) => {
  return (
    <>
      <Flex flexDirection="column" justifyContent="space-around" h="300px">
        <Text variant="fullCenter" fontSize="20px">
          {day}
        </Text>
        <Flex flexDirection="column" alignItems="center">
          <Img src={conditionIcon.src} w="50%" />
          <Text variant="fullCenter" fontSize="20px">
            {weatherCondition}
          </Text>
        </Flex>
        <Text variant="fullCenter" fontSize="20px">
          {`${temperature}\u00B0C`}
        </Text>
      </Flex>
    </>
  );
};

export default DayWeather;
