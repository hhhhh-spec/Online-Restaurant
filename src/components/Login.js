import { VStack, Heading, Box, FormControl, FormErrorMessage, FormLabel, Input, Button } from "@chakra-ui/react";
import * as Yup from 'yup';
import React, { useEffect } from "react";
import { useFormik } from "formik";
import  useSubmit  from "../API/useSubmit";
import {useAlertContext} from "../context/alertContext";

function Login() {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen,onClose } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      submit("", values);
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string()
        .min(8, 'Password length cannot be less than 8 characters')
        .required('Required')
    }),
  });

useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if(response.type === 'success'){
        formik.resetForm();
      }
    }
    return () => {
      onClose();
    }
}, [response]);

  return (
    <VStack w="100vw" p={32} alignItems="flex-start" color="#495E57" px="20vw">
      <Heading as="h1" id="booking-section">
        Login
      </Heading>
      <Box p={6} rounded="md" w="100%">
        <form onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}>
          <VStack spacing={4}>
            <FormControl isInvalid={formik.touched.username && formik.errors.username}>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input id="username" name="username" {...formik.getFieldProps("username")}
                placeholder="username, email or phone number"
              />
              <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.password && formik.errors.password}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" name="password" {...formik.getFieldProps("password")}
                placeholder="no less than 8 characters"
                type="password"
              />
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl>
            <Button type="submit" width="full" bg="#495E57" color="#EDEFEE"
              _hover={{ bg: "#F4CE14", color: "black" }}
              disabled={Object.keys(formik.errors).length > 0}
              isLoading={isLoading}
            >
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack>
  );
}

export default Login;