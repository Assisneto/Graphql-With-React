import React from "react";
import { ApolloProvider } from "react-apollo";

import client from "./services/apollo";

import UserList from "./components/UserList";
import UserFrom from "./components/UserForm";

const App = () => (
  <ApolloProvider client={client}>
    <>
      <UserFrom />
      <UserList />
    </>
  </ApolloProvider>
);

export default App;
