import * as Yup from "yup";

export const validationSchema = () =>
  Yup.object().shape({
    name: Yup.string().required("name is required"),
    description: Yup.string().min(3).required("description is required"),
    roleTypeId: Yup.string().min(3).required("roleTypeId is required"),
  });
