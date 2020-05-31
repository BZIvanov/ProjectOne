import ApolloClient from 'apollo-boost';

export default new ApolloClient({
  uri: 'http://localhost:3100/graphql',
  fetchOptions: {
    credentials: 'include',
  },
  request: (operation) => {
    operation.setContext({
      headers: {
        Authorization: `bearer ${localStorage.getItem('token')}`,
      },
    });
  },
});
