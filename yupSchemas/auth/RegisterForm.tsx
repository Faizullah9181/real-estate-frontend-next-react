import * as Yup from "yup";

export const RegisterFormSchema = Yup.object({
  name: Yup.string().required("Please Enter Your Name"),
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Please Enter Your Email"),
  password: Yup.string()
    .min(5, "Password Must Be Of Minimum 5 Characters")
    .required("Please Enter Password"),
  phone_no: Yup.string().required("Please Enter Phone No")
});
