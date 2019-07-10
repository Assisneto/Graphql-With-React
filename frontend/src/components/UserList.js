import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export const usersQuery = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;

export default class UserList extends Component {
  render() {
    return (
      <Query query={usersQuery}>
        {({ loading, error, data }) => {
          if (loading) return <p>Carregando...</p>;
          if (error) return <p>Erro :(</p>;

          return (
            <ul>
              {data.users.map(user => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          );
        }}
      </Query>
    );
  }
}
