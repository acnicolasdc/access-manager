import authRoute from "./auth";
import userRoute from "./user";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([authRoute, userRoute]);

export default router;
