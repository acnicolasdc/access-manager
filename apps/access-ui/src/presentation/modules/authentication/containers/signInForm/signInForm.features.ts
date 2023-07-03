import * as Yup from "yup";

export const validationSchema = () =>
  Yup.object().shape({
    username: Yup.string().email().required("email is required"),
    password: Yup.string().min(6).required("password is required"),
  });
