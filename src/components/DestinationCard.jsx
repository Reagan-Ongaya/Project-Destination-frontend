import {
	Box,
	Button,
	Heading,
	Stack,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { formatDate } from '../utilities';
import { BookingForm } from './BookingForm';

export const DestinationCard = ({
	id,
	image,
    name,
	location,
	price,
	start_date,
	end_date,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<BookingForm
				isOpen={isOpen}
				onClose={onClose}
				eventId={id}
				eventName={name}
			/>

			<Box w={'full'} rounded={'md'} bg={'white'} p={5} borderRadius={30} bgColor={'lightblue'} >
				<Box h={'200px'} mb={6} position={'relative'} borderRadius={25} >
					<img src={image} alt=""/>
				</Box>

				<Stack>
					<Heading>{name}</Heading>
					<Text color={'gray.500'}>{location}</Text>

					<Stack direction={'column'} fontSize={'sm'}>
						<Text>Kshs {price}</Text>
						<Text>
							{formatDate(start_date)} - {formatDate(end_date)}
						</Text>
					</Stack>

					<Button colorScheme="teal" onClick={onOpen}>
						{' '}
						Book
					</Button>
				</Stack>
			</Box>

            
		</>
	);
};