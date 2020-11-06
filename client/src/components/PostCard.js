import React, { useContext } from 'react';
import { Button, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';




import Auth from '../utils/auth';
import DeleteButton from './DeleteButton';


function PostCard({ posts: { name, type, createdAt, id, username, commentCount, location }}){
    console.log(name);
    
    const loggedIn = useContext(Auth);
    
    // function addComment(){
    //     console.log("comment")
    // }
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
            {loggedIn && loggedIn.username === username && <DeleteButton postId={id} />}
          
            </Card.Content>
        </Card>
    )

}

export default PostCard;