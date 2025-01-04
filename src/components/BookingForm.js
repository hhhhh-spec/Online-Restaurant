import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import { fetchAPI, submitAPI } from '../API/api';
import {
    Flex,
    Grid,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import ResponsiveGrid from './ResponsiveGrid';

function BookingForm() {
    const [availableTimes, setAvailableTimes] = useState([]);
    const [disabledTimes, setDisabledTimes] = useState([]);
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            location:"indoor",
            resdate: new Date().toISOString().split('T')[0],
            restime: '17:00',
            guests: 5,
            occasion: 'Birthday',
        },
        onSubmit: (values) => {
            submitAPI(values) && navigate('/confirm-booking', { state: values });
        },
        validationSchema: Yup.object({
            location: Yup.string().required('Required'),
            resdate: Yup.date().min(new Date(), '⚠️ Please select a future date').required('Required'),
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
        <>
        <ResponsiveGrid bgColor='#495E57' padding="10">
            <Heading  id="booking-section" color="#F3CE14" size="2xl" p={4}>
                Reservations
            </Heading>
                <form onSubmit={e => {
                    e.preventDefault();
                    formik.handleSubmit();
                }}>
                    <Grid  gap={6}
             templateColumns={{
                base: "1fr",           // 小屏幕时 1 列
                lg: "repeat(2, 1fr)"   // 大屏幕时 2 列
              }}
              templateRows={{
                base: "repeat(4, 1fr)",  // 小屏幕时 6 行
                lg: "repeat(2, 1fr)"     // 大屏幕时 3 行
              }}
            >
                        <FormControl isInvalid={formik.touched.resdate && formik.errors.resdate}>
                            <FormLabel htmlFor="date" color="white">Choose date</FormLabel>
                            <Input
                                id="resdate"
                                name="resdate"
                                type='date'
                                {...formik.getFieldProps("resdate")}
                                _invalid={{
                                    borderColor: '#EE9972'  // 错误时的边框颜色
                                  }}
                                  border="2px"
                                  backgroundColor="white"
                                  color="#495E57"
                            />
                            <FormErrorMessage color="#EE9972">{formik.errors.resdate}</FormErrorMessage>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="restime" color="white">Choose time</FormLabel>
                            <Select id="restime" name="restime" {...formik.getFieldProps("restime")}
                            _invalid={{
                                borderColor: '#EE9972'  // 错误时的边框颜色
                              }}
                              border="2px"
                              backgroundColor="white"
                              color="#495E57"
                            >
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
                            <FormLabel htmlFor="guests" color="white">Number of guests</FormLabel>
                            <select
                                id="guests"
                                name="guests"
                                {...formik.getFieldProps("guests")}
                                _invalid={{
                                    borderColor: '#EE9972'  // 错误时的边框颜色
                                  }}
                                  border="2px"
                                  backgroundColor="white"
                                  color="#495E57"
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
                            <FormLabel htmlFor="occasion" color="white">Occasion</FormLabel>
                            <Select id="occasion" name="occasion" {...formik.getFieldProps("occasion")} 
                            _invalid={{
                                borderColor: '#EE9972'  // 错误时的边框颜色
                              }}
                              border="2px"
                              backgroundColor="white"
                              color="#495E57"
                            >
                                <option value="birthday" >Birthday</option>
                                <option value="anniversary">Anniversary</option>
                            </Select>
                        </FormControl>
                        </Grid>
                </form>
        </ResponsiveGrid>
        <Flex justify="center" p="10">
        <Button type="submit" bg="#F4CE14" color="#333333" pl="10" pr="10"
                            disabled={Object.keys(formik.errors).length > 0}
                            fontWeight="bold"
                        >
                            Reserve a table
                        </Button>
                        </Flex>
        </>
    );
}

export default BookingForm;