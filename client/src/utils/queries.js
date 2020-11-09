import gql from 'graphql-tag';

export const FETCH_POSTS_QUERY = gql`

query getPosts($username: String) {
    posts(username: $username) {
        _id
        name
        type
        location
        username
        createdAt
        commentCount
        comments{
            _id
            username
            createdAt
            commentBody
        }
    }
}
`;

export const FETCH_POST = gql`

query getPost($id: ID!) {
    post(_id: $id) {
        _id
        name
        type
        location
        username
        createdAt
        commentCount
        comments{
            _id
            username
            createdAt
            commentBody
        }
    }
}

`;

export const QUERY_USER = gql`

query getUser($username: String!) {
    user(username: $username) {
        _id
        username
        email
        posts {
            _id
            name
            type
            location
            commentCount
        }
        comments{
            _id
            username
            createdAt
            commentBody
        }
    }
}

`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      posts {
        _id
        name
        createdAt
        username
        type
        location
      
      }
    
    }
  }
`;





