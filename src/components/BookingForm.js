import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import { fetchAPI, submitAPI } from '../API/api';
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
    const [availableTimes, setAvailableTimes] = useState([]);
    const [disabledTimes, setDisabledTimes] = useState([]);
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            resdate: new Date().toISOString().split('T')[0],
            restime: '17:00',
            guests: 5,
            occasion: 'Birthday',
        },
        onSubmit: (values) => {
            submitAPI(values) && navigate('/confirm-booking', {state: values});
        },
        validationSchema: Yup.object({
            resdate: Yup.date().min(new Date(), 'Please select a future date').required('Required'),
            restime: Yup.string().required('Required'),
            guests: Yup.number().min(1, 'Minimum 1 guest').max(10, 'Maximum 10 guests').required('Required'),
            occasion: Yup.string().required('Required'),
        }),
    });

    useEffect(() => {
        const selectedDate = new Date(formik.values.resdate);
        const dayOfWeek = selectedDate.getDay();  // 获取星期几 (0: Sunday, 1: Monday, ..., 6: Saturday)
        let times = [];

        // 根据星期几返回不同的可用时间
        if (dayOfWeek >= 1 && dayOfWeek <= 5) {
            // 工作日（周一到周五）
            times = [
                '17:00', '18:00', '19:00', '20:00', '21:00', '22:00',
            ];
        } else {
            // 周六
            times = [
                '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00',
            ];
        }
        // 更新可用时间
        setAvailableTimes(times);
    }, [formik.values.resdate]);  // 监听日期变化

    // 更新禁用时间
    useEffect(() => {
        const selectedDate = new Date(formik.values.resdate);
        const disabled = fetchAPI(selectedDate);  // 假设fetchAPI根据日期返回禁用时间
        setDisabledTimes(disabled);
    }, [formik.values.resdate]);  // 依赖于日期变化

    return (
        <VStack w="100vw" p={32} alignItems="flex-start" px="20vw" color="#495E57">
            <Heading as="h1" id="booking-section">
                Book now
            </Heading>
            <Box p={6} rounded="md" w="100%">
                <form onSubmit={e => {
                    e.preventDefault();
                    formik.handleSubmit();}}>
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
                                {availableTimes.map(time => (
                                    <option key={time} value={time} disabled={disabledTimes.includes(time)}
                                    style={disabledTimes.includes(time) ? { color: '#B0B0B0', backgroundColor: '#f0f0f0' } : {}}
                                    >
                                        {time}{disabledTimes.includes(time) ? ' (Full)' : ''}
                                    </option>
                                ))}
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
                                <option value="birthday" >Birthday</option>
                                <option value="anniversary">Anniversary</option>
                            </Select>
                        </FormControl>
                        <Button type="submit" width="full" bg="#495E57" color="#EDEFEE"
                            _hover={{ bg: "#F4CE14", color: "black" }}
                            disabled={Object.keys(formik.errors).length > 0}
                        >
                            Submit
                        </Button>
                    </VStack>
                </form>
            </Box>
        </VStack>
    );
}

export default BookingForm;