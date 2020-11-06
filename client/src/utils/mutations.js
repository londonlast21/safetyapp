import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation login(
    $username: String!,
    $password: String!
) {
    login(
            username: $username
            password: $password
    ){
        token user{
            _id username
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser(
    $username: String!,
    $email: String!,
    $password: String!
){
    addUser(username: $username,
        email: $email,
        password: $password
    ){
        token user{
            _id username
        }
    }
}

`
;


export const CREATE_POST_MUTATION =gql`
mutation addPost(
    $name: String!,
    $location: String!,
    $type: String!
){
addPost(name: $name,
    location: $location,
    type: $type
){
    _id name location type username createdAt 
    comments{
        _id createdAt username body
    }
    commentCount
    }
}
` 
;
export const SUBMIT_COMMENT_MUTATION = gql`
mutation($postId: ID!, $commentBody: String!){
    addComment(postId: $postId, body: $body){
        id
        comments{
            id body createdAt username
        }
        commentCount
    }
}
`;

