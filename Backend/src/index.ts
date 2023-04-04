import Express, { Application } from "express";
import authApi from "./routes/Auth";
import supportApi from "./routes/Support";
import cors from "cors";

const app: Application = Express();
app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use("/api", authApi);
app.use("/api", supportApi);

const port: number | string = process.env.PORT || 4040;
app.listen(port, () => console.log(`Server is running on port: ${port}`));
