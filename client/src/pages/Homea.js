import React from 'react';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';


import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { FETCH_POSTS_QUERY } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  console.log

  const posts = data?.posts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <PostForm />
          </div>
        )}
        <div></div>
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostCard posts={posts} title="Some Feed for Thought(s)..." />
          )}
        </div>
      
        
      </div>
    </main>
  );
};

export default Home;
