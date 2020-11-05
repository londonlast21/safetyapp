import React from 'react';


import { useQuery } from '@apollo/react-hooks';
import { FETCH_POSTS_QUERY } from '../utils/queries';

import { Grid } from 'semantic-ui-react';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';



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
                    <PostForm />
                </Grid.Column>

                        <Grid.Column>
                            <PostCard posts={posts} title="Providers" />
                        </Grid.Column>
                  


            </Grid.Row>
        </Grid>
    );     
}

export default Home;