import React from "react";

import { Box, Text, Heading, Container } from "native-base";

import Icon from "react-native-vector-icons/Feather";

export default (props) => {
  return (
    <Box bgColor="black" flex={1} pt={10}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        px={4} 
      >
        <Box flexDirection="row" alignItems="center">
          <Icon name="lock" size={20} color="#fff" />
          <Text px={3} fontSize="lg" color="white" fontWeight="bold">
            andrevlopesz
          </Text>
          <Icon name="chevron-down" size={20} color="#fff" />
        </Box>
        <Box flexDirection="row">
          <Icon name="plus-square" size={25} color="#fff" 
          style={{paddingRight: 10}}/>
          <Icon name="menu" size={25} color="#fff" />
        </Box>
      </Box>
    </Box>
  );
};
