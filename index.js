
import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import schema from './schema.js';
import resolvers from './resolvers.js';

//const resolvers = require('./graphql/resolvers')

const app = express();

app.get("/", (req, res) => {
  res.send("Up and running with graphql")
});

const root = resolvers;

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);


app.listen(8002, () => 
  console.log("Running at 8002"));
