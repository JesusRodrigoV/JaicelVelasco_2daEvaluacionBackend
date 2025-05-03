import express from "express";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import schema from "./src/schema";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(
  "/graphql",
  graphqlHTTP((req) => ({
    schema,
    graphiql: true,
    context: { token: req.headers.authorization?.split(" ")[1] },
  })),
);

app.listen(port, () => {
  console.log(
    `GraphQL microservice corriendo en http://localhost:${port}/graphql`,
  );
});

