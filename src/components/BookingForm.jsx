import { useState } from 'react';

import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Stack,
	FormControl,
	FormLabel,
	Input,
} from '@chakra-ui/react';
import toast from 'react-hot-toast';

import { BASE_URL } from '../utilities';

export const BookingForm = ({ isOpen, onClose, destinationId, destinationName }) => {
	const intitialData = {
		name: '',
		phone: '',
	};

	const [formData, setFormData] = useState(intitialData);
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleForm = (e) => {
		e.preventDefault();

		setIsLoading(true);

		const data = {
			...formData,
			destination_id: destinationId,
			booking_date: new Date(),
		};

		fetch(`${BASE_URL}/booking`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.message) {
					// this means the operation was successful
					toast.success(res.message, { duration: 5000 });
				} else {
					toast.error(res.detail, { duration: 6000 });
				}
				// stop loading button
				setIsLoading(false);
				// this will close our modal
				onClose();
			})
			.catch((err) => {
				console.log(err);
				toast.error('Error occurred. Try again later');
			});
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} borderRadius={25} colorScheme='blueviolet' >
			<ModalOverlay />
			<ModalContent as={'form'} onSubmit={handleForm}>
				<ModalHeader>Book for {destinationName}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Stack>
						<FormControl isRequired>
							<FormLabel>Name</FormLabel>
							<Input
								name="name"
								required
								value={formData['name']}
								onChange={handleChange}
							/>
						</FormControl>

						<FormControl isRequired>
							<FormLabel>Phone number</FormLabel>
							<Input
								name="phone"
								required
								value={formData['phone']}
								onChange={handleChange}
							/>
						</FormControl>
					</Stack>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={onClose} borderRadius={25}>
						Close
					</Button>
					<Button
						type="submit"
						colorScheme="teal"
						isLoading={isLoading}
						loadingText="Booking destination..."
                        borderRadius={25}
					>
						Save
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
