import React from "react";

import { Box, Text, Heading, Container, Image, Avatar, HStack, VStack } from "native-base";

import Icon from "react-native-vector-icons/Feather";
import { Circle } from "react-native-svg";

export default (props) => {
  return (
    <Box bgColor="black" flex={1} pt={10} px={3}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
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
            style={{ paddingRight: 10 }} />
          <Icon name="menu" size={25} color="#fff" />
        </Box>
      </Box>
      <HStack py={5} justifyContent='space-between'>

        <Box borderRadius={100} borderWidth={1} borderColor='#ccc' padding={1} alignSelf='flex-start'>
          <Avatar source={{ uri: 'https://instagram.fvcp2-1.fna.fbcdn.net/v/t51.2885-19/337152961_207133215266787_5312857535398017100_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fvcp2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=F9lpx5fPG7wAX8bTcoO&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBmXWLGG9RWgYd2u3Sy7Ck5fGzr0zzBSpsLTpB9gvoutw&oe=6423F7F5&_nc_sid=8fd12b' }} size="xl" />
        </Box>

        <HStack space={3} alignItems='center'>
          <VStack alignItems='center'>
            <Text fontSize="sm" color="white" fontWeight="bold">000</Text>
            <Text fontSize="sm" color="white" >Publicações</Text>
          </VStack>
          <VStack alignItems='center'>
            <Text fontSize="sm" color="white" fontWeight="bold">000</Text>
            <Text fontSize="sm" color="white" >Seguidores</Text>
          </VStack>
          <VStack alignItems='center'>
            <Text fontSize="sm" color="white" fontWeight="bold">000</Text>
            <Text fontSize="sm" color="white" >Seguindo</Text>
          </VStack>
        </HStack>

      </HStack>
    </Box>
  );
};
