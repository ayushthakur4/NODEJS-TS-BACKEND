import{Router} from "express"
import bookrouter from "./BookRoute.js";

const routes = Router();


routes.use("/book",bookrouter)

export default routes;