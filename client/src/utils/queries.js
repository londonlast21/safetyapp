import gql from 'graphql-tag';

export const FETCH_POSTS_QUERY = gql`

query posts($username: String) {
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
            body
        }
    }
}


`;
