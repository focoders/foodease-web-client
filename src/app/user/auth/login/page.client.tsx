"use client"
import React, { useContext } from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import { ButtonPrimaryEnable } from "@/components/Button/Button";
import { IoEye } from "react-icons/io5";
import Link from "next/link";
import { login } from "@/app/services/UserService";
import { AuthContext } from "@/app/services/CustomerAuthContext";
import { useRouter } from "next/navigation";

interface CustomerLoginSchema {
  email: string;
  password: string;
}

const UserLoginPage: React.FC<{}> = () => {

  const router = useRouter()
  const initialValues: CustomerLoginSchema = { email: '', password: '' }
  const { refetchCurrentUser } = useContext(AuthContext)

  const handleSubmit = async (values: CustomerLoginSchema) => {
    const loginrequest = await login(values)
    if(loginrequest){
      refetchCurrentUser()
      router.push("/user")
    } else {
      router.refresh()
    }
  }

  return (
    <div className="w-[100vw] overflow-y-hidden">
      <div className="flex justify-center mx-auto w-[80%] lg:w-[28vw] max-h-screen mt-12">
        <div className="flex flex-col gap-8 items-center justify-center w-full p-6">
          <div>
            <h1 className="text-m-h1 lg:text-d-h3 font-bold">Customer Login</h1>
          </div>
          <div className="flex flex-col w-full">
            <Formik
              initialValues={initialValues}
              onSubmit={(values, actions) => {
                handleSubmit(values)
                actions.setSubmitting(false);
                actions.resetForm({
                  values: {
                    email: "",
                    password: "",
                  },
                });
              }}
            >
              <Form className="flex flex-col gap-6">
                <div className="flex border-[1px] bg-[#F6F6F6] border-[#D2D2D2] px-4 py-3 rounded-lg text-d-b2">
                  <Field className="w-full h-full bg-transparent outline-none text-d-b2" placeholder="Email or phone number" type="email" id="email" name="email"/>
                </div>
                <div className="flex border-[1px] bg-[#F6F6F6] border-[#D2D2D2] px-4 py-3 rounded-lg text-d-b2">
                  <Field className="bg-transparent outline-none text-d-b2" placeholder="Enter password" id="password" type="password" name="password"/>
                  <span className="flex w-full h-full items-center justify-end text-lg text-gray-500">
                    <IoEye/>
                  </span>
                </div>
                <div className="flex justify-between ">
                  <div><p className="text-m-b2">Remember Me</p></div>
                  <div><p className="text-m-b2">Forgot password?</p></div>
                </div>
                <ButtonPrimaryEnable text="Login"/>
              </Form>
            </Formik>
          </div>
          <span className="border-t-[1px] w-full border-[#d2d2d2]"></span>
          <p className="text-m-b2">Don&#39;t have an account? <span className="text-m-h5 text-danger-600 font-bold"><Link href={'/user/auth/register'}>Get Started</Link></span></p>
        </div>
      </div>
    </div>
  );
}

export default UserLoginPage;
