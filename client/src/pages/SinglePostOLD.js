import React from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import { useQuery } from '@apollo/react-hooks';
import { FETCH_POST } from '../utils/queries';

import { Card, Grid, Form, Button } from 'semantic-ui-react';


const SinglePost = props => {

    const { id: postId } = useParams();

    const { loading, data } = useQuery(FETCH_POST, {
        variables: { id: postId }
    });

    const post = data?.post || {}

    if (loading) {
        return <div>Loading still....</div>
    }
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>

                    <Card fluid>
                        <Card.Content>
                            <Card.Header>{post.name}</Card.Header>
                            <Card.Meta>{moment(post.createdAt).fromNow(true)}</Card.Meta>
                            <Card.Description>
                                <ul>
                                    <li>{post.type}</li>
                                    <li>{post.location}</li>
                                    <p>Reviews:{post.commentCount}</p>
                                </ul>
                            </Card.Description>
                        </Card.Content>
                        <hr/>
                        </Card>

                    </Grid.Column>
                </Grid.Row>
            </Grid>

        )
    }




export default SinglePost