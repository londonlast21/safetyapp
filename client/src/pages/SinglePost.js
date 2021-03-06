
import React, { useContext, useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Card, Grid, Form } from 'semantic-ui-react';
import moment from 'moment';

import Auth from '../utils/auth';
import DeleteButton from '../components/DeleteButton';

import{ FETCH_POST } from '../utils/queries';
import { SUBMIT_COMMENT_MUTATION } from '../utils/mutations';

function SinglePost(props){
    const postId = props.match.params.postId;
    const { user } = useContext(Auth);

    const [comment, setComment] = useState('');



    console.log(postId);

    const {data = {}} = useQuery(FETCH_POST, {
        variables: {
            postId
        }
    });

    const [addComment] = useMutation(SUBMIT_COMMENT_MUTATION, {
        update(){
            setComment('');
        },
        variables: {
            postId,
            body: comment
        }
    })

    const getPost = data.getPost;

    function deletePostCallback(){
        props.history.push('/');
    }


    let postMarkup;
    if(!getPost){
        postMarkup = <p>Loading entry....</p>
    } else {
        const { id, name, location, type, createdAt, username, comments, commentCount} = getPost;

        postMarkup = (
            <Grid>
                <Grid.Row>
                    <Grid.Column>

                    <Card fluid>
                        <Card.Content>
                            <Card.Header>{name}</Card.Header>
                            <Card.Meta>{moment(createdAt).fromNow(true)}</Card.Meta>
                            <Card.Description>
                                <ul>
                                    <li>{type}</li>
                                    <li>{location}</li>
                                    <p>Reviews:{commentCount}</p>
                                </ul>
                            </Card.Description>
                        </Card.Content>
                        <hr/>



                        <Card.Content extra>
                        
                        {/* <Button 
                            as="div"
                            labelPosition="right"
                            onClick={() => console.log('comment on a post')} 
                            >
                                <Button  color="blue">
                                    Leave Review
                                </Button>
                                
                            </Button> */}
                            {user && user.username === username && (

                                <DeleteButton postId={id}  callback={deletePostCallback} />
                            )}
                        </Card.Content>
                    </Card>
                            
                    {/* This conditionally renders review input if logged in; maybe reusable for comment display */}
                    {user && 
                        <Card fluid>
                            <Card.Content>
                            <p>Your text here</p>
                            <Form>
                                <div className="ui action input fluid">
                                    <input
                                        type="text"
                                        placeholder="Your text here"
                                        name="comment"
                                        value={comment}
                                        onChange={event => setComment(event.target.value)}
                                        />
                                        <button type="submit"
                                            className="ui button teal"
                                            disabled={comment.trim() === ''}
                                            onClick={addComment}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </Form>
                            </Card.Content>
                       
                        </Card>}

                    {/* need to add conditional logged in render here */}
                   
                        {comments.map(comment => (
                        <Card fluid key={comment.id}>
                            <Card.Content>
                            {user && user.username === comment.username && (
                                <DeleteButton postId={id} commentId={comment.id}/>
                            )}
                            <Card.Header>{comment.username}</Card.Header>
                            <Card.Meta>{moment(comment.createdAt).fromNow()}</Card.Meta>
                            <Card.Description>{comment.commentBody}</Card.Description>
                            </Card.Content>
                        </Card>
                        ))}

                    </Grid.Column>
                </Grid.Row>
            </Grid>

        )
    }
    return postMarkup;
}

export default SinglePost