import { useState } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, HStack, Heading, Input, Stack } from "@chakra-ui/react";

import {CalendarIcon, EmailIcon, SettingsIcon, LinkIcon, BellIcon} from "@chakra-ui/icons"
import { BASE_URL } from '../utilities';

export const AddDestination = () => {
    //initializing our data
    const initialData = {
        name :'',
        location :'',
        image :'',
        price :'',
        start_date:'',
        end_date:''
    }

    const [formData, setFormData] = useState(initialData)
    const [isLoading, setIsLoading] = useState(false);


    const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

    const handleFormSubmit = (e) => {
        e.preventDefault()

        setIsLoading(true)

        fetch(`${BASE_URL}/destinations`, {
            method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
            body: JSON.stringify(formData),
        })

            .then((res) => res.json())
            .then((data) => {


				// reset form
				setFormData(initialData)

				// stop loading
				setIsLoading(false)
			})
            .catch((err) => {
                isLoading(false)
				console.log(err)
			})

    }

    return (
       <Flex align={'center'} justify={'center'}>
            <Stack>
                <Heading color={'lightblue'} fontSize={'30'} fontFamily={'cursive'}> Add Destination</Heading>

                <Box as='form' 
                    rounded={'lg'} 
                    bg={'lightblue'} 
                    p={8} 
                    borderRadius={16}
                    onSubmit={handleFormSubmit}
				>
                    <Stack>
                        <FormControl isRequired>
                            <HStack>
                            <FormLabel>Name</FormLabel>
                                <Input 
                                    name="name" 
                                    placeholder="name" 
                                    autoComplete='name'
                                    value={formData['name']}
                                    onChange={handleChange}
                                />

                            </HStack>    
                        </FormControl>

                        <FormControl isRequired>
                            <HStack>
                            <FormLabel>Location</FormLabel>
                                <Input 
                                    name="location" 
                                    placeholder="Dubai" 
                                    value={formData['location']}
                                    onChange={handleChange}
                                />
                            </HStack>
                        </FormControl>

                        <FormControl isRequired>
                            <HStack>
                            <FormLabel>Image</FormLabel>
                                <Input 
                                    name="image" 
                                    placeholder="image url" 
                                    value={formData['image']}
                                    onChange={handleChange}
                                />
                            </HStack>
                        </FormControl>
                        
                        <FormControl isRequired>
                            <HStack>
                            <FormLabel>Price</FormLabel>
                                
                                <Input 
                                    name="price" 
                                    placeholder="Enter Amount" 
                                    value={formData['price']}
                                    onChange={handleChange}
                                        
                                />  
                            </HStack>
                        </FormControl>
                        <HStack>
                        <FormControl isRequired>
                            <FormLabel>Start date</FormLabel>
                                
                                <Input 
                                    name="start_date" 
                                    type="datetime-local" 
                                    value={formData['start_date']}
                                    onChange={handleChange}
                                        
                                />  
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>End date</FormLabel>
                                
                                <Input 
                                    name="end_date" 
                                    type="datetime-local"
                                    value={formData['end_date']}
                                    onChange={handleChange}
                                        
                                />  
                        </FormControl>
                        </HStack>


                        <Stack pt={8} py={1} borderRadius={10}>
                            <Button
                                isLoading={isLoading}
								loadingText="Booking Destination"
                                type='submit'
                                colorScheme='teal'
                                variant='outline'
                                bg ={'black'}
                            > 
                            Book now </Button>
                        </Stack>
                        
                    </Stack>
                 </Box>
                 <Box>
                <HStack color={'GrayText'}>
                    <Heading padding={9}>
                         <EmailIcon />  
                   </Heading>
                         
                   <Heading padding={9}>
                         <CalendarIcon />
                   </Heading>

                   <Heading padding={9}>
                         <SettingsIcon />
                   </Heading>

                   <Heading padding={9}>
                         <LinkIcon />
                   </Heading>

                   <Heading padding={9}>
                         <BellIcon />
                   </Heading>

                   
                </HStack>
                
                 </Box>
            </Stack>

        </Flex>
    )
};
