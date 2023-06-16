import { FC, ReactNode } from "react";
import { Box, Text } from "@chakra-ui/react";

const CityTitle: FC<{ city: string }> = ({ city }) => {
  return (
    <Box>
      <Text variant="fullCenter" size="lg">{city}</Text>
    </Box>
  );
};

export default CityTitle;
