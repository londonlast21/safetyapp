import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid } from 'semantic-ui-react';


import { FETCH_POSTS_QUERY } from '../utils/queries';
import Auth from '../utils/auth';


import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm'


const Home = () => {

    const { loading, data } = useQuery(FETCH_POSTS_QUERY);

    console.log(data);
    const posts = data?.posts || [];

    console.log(posts);
    
    const  loggedIn = Auth.loggedIn();

   

  


    return (

        <Grid columns={3}>
            <Grid.Row className="page-title">
                <h1>TSafety Directory</h1>
            </Grid.Row>

            <Grid.Row>

                {loggedIn && (
                <Grid.Column>
                    <PostForm />
                </Grid.Column>
                )}
                
                { posts && (
                    
                    <div><h1>there are posts</h1></div>
                    // posts.map(posts => (
                    //     <Grid.Column key={posts.id} style={{ marginBottom: 10 }}>
                    //         <PostCard post={posts} />
                    //     </Grid.Column>
                    // )) 
                )} 
            </Grid.Row>
        </Grid>
    );     
}

export default Home;