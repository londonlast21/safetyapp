import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { Button, Card } from 'semantic-ui-react'

const PostCard = ({ posts: { name, type, id, createdAt, commentCount, location } }) => {
   

    return (
        
        <Card fluid>
              <Card.Content>
                <Card.Header as={Link} to={`/posts/${id}`}>{name}</Card.Header>
                <Card.Meta>{moment(createdAt).fromNow(true)}</Card.Meta>
                <Card.Description>
                    <ul>
                        <li>{type}</li>
                        <li>{location}</li>
                        
                    
                    </ul>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <p>Reviews:{commentCount}</p>

            <Button color='instagram' as={Link} to={`/posts/${id}`}>
                Leave Review
            </Button>
    
            </Card.Content>
        </Card>
    );
};

export default PostCard;