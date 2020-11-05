
import React from 'react';
import { Link } from 'react-router-dom';
const PostCard = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No Thoughts Yet</h3>;
  }
  return (
    <div>
      <h3>{title}</h3>
      {posts &&
        posts.map(post => (
          <div key={post._id} className="card mb-3">
            <p className="card-header">
              
              thought on {post.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/thought/${post._id}`}>
                <p>{post.postText}</p>
                <p className="mb-0">
                  Reactions: {post.commentCount} || Click to{' '}
                  {post.commentCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};
export default PostCard;