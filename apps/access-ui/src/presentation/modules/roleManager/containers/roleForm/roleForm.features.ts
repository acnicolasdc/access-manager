import * as Yup from "yup";

export const validationSchema = () =>
  Yup.object().shape({
    id: Yup.string().email().required("id is required"),
    name: Yup.string().email().required("name is required"),
    description: Yup.string().min(3).required("description is required"),
    roleTypeId: Yup.string().min(3).required("roleTypeId is required"),
  });
