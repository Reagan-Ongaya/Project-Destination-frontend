import { useEffect, useState } from 'react';

import { Center, Flex, Heading, Input, SimpleGrid } from '@chakra-ui/react';

import { DestinationCard } from '../components/DestinationCard';
import { BASE_URL } from '../utilities';

const data = [
	{
		id: 1,
		name: 'England',
		image: 'https://www.india.com/wp-content/uploads/2018/08/UK-visa1-shutterstock_363506579.jpg',
		location: 'T-town',
		price: 30000,
		start_date: 'Dec 12, 2023',
		end_date: 'Dec, 15, 2023',
	},

    {
		id: 2,
		name: 'Paris',
		image: 'https://silvertrips.in/wp-content/uploads/2019/04/paris.jpg',
		location: 'Jomo',
		price: 44000,
		start_date: 'Dec 19, 2023',
		end_date: 'Dec, 27, 2023',
	},


    {
		id: 3,
		name: 'Kenya',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaPDhJOawj4aZucFCA7pz5ctvHSFXrabTKkhQcMRev_d0vRCMrhU3bGj68u5vDjh0xKas&usqp=CAU',
		location: 'Nairobi',
		price: 25000,
		start_date: 'Dec 15, 2023',
		end_date: 'Dec, 31, 2023',
	},

    {
		id: 4,
		name: 'Qatar',
		image: 'https://secure.s.forbestravelguide.com/img/properties/marsa-malaz-kempinski-the-pearl-doha/marsa-malaz-kempinski-the-pearl-doha-pool-view.jpg',
		location: 'Doha',
		price: 50000,
		start_date: 'Dec 14, 2023',
		end_date: 'Dec, 31, 2023',
	},

];

export const Home = () => {
	const [destinations, setDestinations] = useState(data);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const handleFetchData = () => {
			fetch(`${BASE_URL}/destinations`)
				.then((res) => res.json())
				.then((destinations) => setDestinations(destinations))
				.catch((err) => console.log(err));
		};

		handleFetchData();
	}, []);

	const searchedDestinations = destinations.filter((destination) =>
		destination.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<Flex direction="column" p={4} gap={4}>

			<Input
			    justifyContent={'center'}
				placeholder="Search"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
                borderRadius={25}
                color={'white'}
                
			/>
            

			{/* Display destinations */}
			{searchedDestinations.length > 0 ? (
				<SimpleGrid columns={{ sm: 1, md: 3, lg: 4 }} spacing={5}>
					{searchedDestinations.map((destination, index) => (
						<DestinationCard key={index} {...destination} />
					))}
				</SimpleGrid>
			) : (
				<Center >
					<Heading size={'2xl'} fontFamily={'cursive'}>No Destination</Heading>
				</Center>
			)}
			
		</Flex>
	);
};