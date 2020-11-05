import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid } from 'semantic-ui-react';


import { FETCH_POSTS_QUERY } from '../utils/queries';
import Auth from '../utils/auth';


import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm'


const Home = () => {

    const  user = useContext(Auth);
    console.log(user);

    const {data = {}} = useQuery(FETCH_POSTS_QUERY);

    const {posts} = data.getPosts;


    return (

        <Grid columns={3}>
            <Grid.Row className="page-title">
                <h1>TSafety Directory</h1>
            </Grid.Row>

            <Grid.Row>

                {user && (
                <Grid.Column>
                    <PostForm />
                </Grid.Column>
                )}

                {(
                    posts && posts.map(posts=> (
                    <Grid.Column key={posts._id} style={{ marginBottom: 10 }}>
                        <PostCard posts={posts}/>
                    </Grid.Column>
                ))

                )}

            </Grid.Row>
        </Grid>
    );     
}

export default Home;