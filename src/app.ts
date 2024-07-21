import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import routes from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import httpStatus from "http-status";
import cookieParser from "cookie-parser";

const app: Application = express();

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://tasan-portfolio.vercel.app",
    "https://portfolio-dashboard-frontend-next.vercel.app",
  ],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "This is tasan portfolio server: Server running successfully.....",
  });
});

//global error handler
app.use(globalErrorHandler);

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
  });
  next();
});

export default app;
