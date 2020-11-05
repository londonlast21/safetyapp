import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { Button, Card } from 'semantic-ui-react'



function PostCard({ posts: { name, type, createdAt, id, username, commentCount, location }}){
   

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
             delet button only shows up on posts user has created */}
            {user && user.username === username && <DeleteButton postId={id} />}
           
            </Card.Content>
        </Card>
    );
};

export default PostCard;