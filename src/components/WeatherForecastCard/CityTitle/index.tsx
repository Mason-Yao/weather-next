import { FC, ReactNode } from "react";
import { Center, Text } from "@chakra-ui/react";

const CityTitle: FC<{ city: string }> = ({ city }) => {
  return (
    <>
      <Center>
        <Text fontSize={"5xl"}>{city}</Text>
      </Center>
    </>
  );
};

export default CityTitle;
