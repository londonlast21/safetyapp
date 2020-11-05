import React, { useContext } from 'react';


import { useQuery } from '@apollo/react-hooks';
import { FETCH_POSTS_QUERY } from '../utils/queries';

import { Grid } from 'semantic-ui-react';
import PostCard from '../components/PostCard';



const Home = () => {

    const { loading, data } = useQuery(FETCH_POSTS_QUERY);
    const posts = data?.posts || [];
   

    return (

        <Grid columns={3}>
            <Grid.Row className="page-title">
                <h1>TSafety Directory</h1>
            </Grid.Row>

            <Grid.Row>

                
                    <Grid.Column>
                        <h1>title</h1>
                    </Grid.Column>

                

                {(
                    posts && posts.map(post => (
                        <Grid.Column key={post.id} style={{ marginBottom: 10 }}>
                            <PostCard post={post} />
                        </Grid.Column>
                    )) 
                )} 
             </Grid.Row>
        </Grid>
    );     
}

export default Home;