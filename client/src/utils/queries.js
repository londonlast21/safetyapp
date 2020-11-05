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

export const FETCH_POST = gql`

query post($id: ID!) {
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
            body
        }
    }
}

`;

export const QUERY_USER = gql`

query user($username: String!) {
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
    }
}

`;

const LOGIN_USER = gql`
mutation login(
    $username: String!
    $password: String!
) {
    login(
            username: $username
            password: $password
    ){
        id email username createdAt token
    }
}
`;

const SUBMIT_COMMENT_MUTATION = gql`
    mutation($postId: String!, $body: String!){
        createComment(postId: $postId, body: $body){
            id
            comments{
                id body createdAt username
            }
            commentCount
        }
    }
`;


