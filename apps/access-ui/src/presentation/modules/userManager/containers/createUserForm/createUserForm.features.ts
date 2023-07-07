import * as Yup from "yup";

export const validationSchema = () =>
  Yup.object().shape({
    email: Yup.string().email().required("email is required"),
    firstName: Yup.string().min(3).required("firstName is required"),
    homeAddress: Yup.string().min(3).required("homeAddress is required"),
    lastName: Yup.string().min(3).required("lastName is required"),
    middleName: Yup.string().min(3).required("middleName is required"),
    secondaryPhoneNumber: Yup.string()
      .min(10)
      .required("secondaryPhoneNumber is required"),
    phoneNumber: Yup.string().min(10).required("phoneNumber is required"),
    password: Yup.string().min(6).required("password is required"),
    secondaryEmail: Yup.string().email().required("secondaryEmail is required"),
    roleId: Yup.string().required("roleId is required"),
  });
