import 'dotenv/config';
import {ApolloServer} from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4';
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer';
import express, {Request} from 'express';
import http from 'http';
import cors from 'cors';
import {resolvers, typeDefs} from './graphql';
import {requestid, jwtCheck, logger} from './middlewares';
import {db} from './db';
import {mockRouter} from './routes';

interface GraphQlRequestContext {
  req?: Request;
}

async function main() {
  const app = express();

  app.use(db);
  app.use(requestid);
  app.use(logger);
  app.use('/mock', mockRouter);
  // app.use(jwtCheck); // disabled for development

  app.use(express.json());
  const httpServer = http.createServer(app);

  const server = new ApolloServer<GraphQlRequestContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
  });

  await server.start();

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    expressMiddleware(server, {
      context: async ({req}) => ({req}),
    })
  );

  await new Promise<void>(resolve => httpServer.listen(3001, resolve));
  console.log(
    `🚀 Server ready at http://localhost:${process.env.PORT}/graphql`
  );
}

main();
