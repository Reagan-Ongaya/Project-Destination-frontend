import { Link } from "react-router-dom";
import { Box, Flex, HStack} from "@chakra-ui/react";
import {RepeatClockIcon,  BellIcon} from "@chakra-ui/icons"

export const Navbar= () => {
    return (
       <Box px={4} bg={'blue'}>
        <Flex justify={'space-between'} h={16}>
            <HStack spacing={5}>
            <RepeatClockIcon  w={10} h={10} color={'black'}/>
                <HStack spacing={8} color={'yellowgreen'}>
                    <Link to={'/'} bg={'blue'} >Home</Link>
                    <Link to={'/add-destination'}>Add Destination</Link>
                    <Link to={'/About'}>About</Link>
                </HStack>
            </HStack>

            <Flex py={3} color={"black"}>
            <BellIcon  w={8} h={8}/>
            </Flex>
        </Flex>
       </Box>
    )
};