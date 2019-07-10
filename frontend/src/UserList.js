import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const usersQuery = gql`
  query {
    users {
      name
      id
      email
    }
  }
`;

export default class Userlist extends Component {
  render() {
    return (
      <Query query={usersQuery}>
        {({ loading, error, data }) => {
          if (loading) return <p>Carregando ...</p>;
          if (error) return <p>Error :(</p>;

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
