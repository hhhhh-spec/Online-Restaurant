import { useFormik } from 'formik';
import React from 'react';
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';

function BookingForm() {
    const formik = useFormik({
        initialValues: {
            resdate: new Date().toISOString().split('T')[0],
            restime: '17:00',
            guests: 5,
            occasion: 'Birthday',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: Yup.object({
            resdate: Yup.date().min(new Date(), 'Please select a future date').required('Required'),
            restime: Yup.string().required('Required'),
            guests: Yup.number().min(1, 'Minimum 1 guest').max(10, 'Maximum 10 guests').required('Required'),
            occasion: Yup.string().required('Required'),
        }),
    });


    return (
        <VStack w="100vw" p={32} alignItems="flex-start" px="20vw">
            <Heading as="h1" id="contactme-section">
                Reserve a table
            </Heading>
            <Box p={6} rounded="md" w="100%">
                <form>
                    <VStack spacing={4}>
                        <FormControl isInvalid={formik.touched.resdate && formik.errors.resdate}>
                            <FormLabel htmlFor="date">Choose date</FormLabel>
                            <Input
                                id="resdate"
                                name="resdate"
                                type='date'
                                {...formik.getFieldProps("resdate")}
                            />
                            <FormErrorMessage>{formik.errors.resdate}</FormErrorMessage>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="restime">Choose time</FormLabel>
                            <Select id="restime" name="restime" {...formik.getFieldProps("restime")} >
                                <option value="17" >17:00</option>
                                <option value="18">18:00</option>
                                <option value="19">19:00</option>
                                <option value="20">20:00</option>
                                <option value="21">21:00</option>
                                <option value="22">22:00</option>
                            </Select>
                        </FormControl>
                        <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
                            <FormLabel htmlFor="guests">Number of guests</FormLabel>
                            <select
                                id="guests"
                                name="guests"
                                {...formik.getFieldProps("guests")}
                            >
                                {Array.from({ length: 10 }, (_, index) => index + 1).map((num) => (
                                    <option key={num} value={num}>
                                        {num}
                                    </option>
                                ))}
                            </select>
                            <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="occasion">Occasion</FormLabel>
                            <Select id="occasion" name="occasion" {...formik.getFieldProps("occasion")} >
                                <option value="birth" >Birthday</option>
                                <option value="anniv">Anniversary</option>
                            </Select>
                        </FormControl>
                        <Button type="submit" width="full">
                            Submit
                        </Button>
                    </VStack>
                </form>
            </Box>
        </VStack>
    );
}

export default BookingForm;