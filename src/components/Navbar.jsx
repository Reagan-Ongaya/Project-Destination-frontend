import { Box, Flex, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {RepeatClockIcon,  BellIcon} from "@chakra-ui/icons"

export const Navbar= () => {
    return (
       <Box px={4} bg={'palevioletred'}>
        <Flex justify={'space-between'} h={16}>
            <HStack spacing={5}>
            <RepeatClockIcon  w={10} h={10} color={'blueviolet'}/>
                <HStack spacing={8} color={'yellowgreen'}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/add-destination'}>Add Destination</Link>
                </HStack>
            </HStack>

            <Flex py={3} color={"blueviolet"}>
            <BellIcon  w={8} h={8}/>
            </Flex>
        </Flex>
       </Box>
    )
};