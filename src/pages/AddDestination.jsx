import { useState } from 'react';
import { Box, Flex, FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react";

export const AddDestination = () => {
    //initializing our data
    const initialData = {
        name :'',
        location :'',
        price :'',
        start_date:'',
        end_date:''
    }

    const [formData, setFormData] = useState(initialData)

    const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

    console.log(formData)

    return (
       <Flex align={'center'} justify={'center'} bg={'blue'}>
            <Stack>
                <Heading fontSize={'30'} fontFamily={'cursive'}> Add Destination</Heading>

                <Box rounded={'lg'} bg={'purple'} p={5}>
                    <Stack>
                        <FormControl isRequired>
                            <FormLabel>Name</FormLabel>
                                <Input 
                                    name="name" 
                                    placeholder="name" 
                                    value={formData['name']}
                                    onChange={handleChange}
                                />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Location</FormLabel>
                                <Input 
                                    name="location" 
                                    placeholder="Dubai" 
                                    value={formData['location']}
                                    onChange={handleChange}
                                />
                        </FormControl>
                        
                        <FormControl isRequired>
                            <FormLabel>Price</FormLabel>
                                
                                <Input 
                                    name="price" 
                                    placeholder="Enter Amount" 
                                    value={formData['price']}
                                    onChange={handleChange}
                                        
                                />  
                        </FormControl>

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

                        <Stack p={8}>
                            <button
                                colorScheme='teal'
                                variant='outline'
                            > 
                            Book now </button>
                        </Stack>
                        
                    </Stack>
                 </Box>
            </Stack>
        </Flex>
    )
};