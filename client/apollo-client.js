import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

const restLink = new RestLink({ uri: "https://www.cheapshark.com/api/1.0/"});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
});

export default client;