import gql from "graphql-tag";

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($newBook: savedBook) {
    saveBook(newBook: $newBook) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      username
      email
      bookCount
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
