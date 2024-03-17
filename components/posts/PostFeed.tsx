import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

import usePosts from '@/hooks/usePosts';
import PostItem from './PostItem';

interface PostData {
  id: string;
  body: string;
  createdAt: Date | null; // Updated type to handle null
  user: {
    id: string;
    name: string;
    username: string;
  };
  comments?: string[]; // Adjusted type to string[]
  likedIds?: string[]; // Adjusted type to string[]
}

interface PostFeedProps {
  userId?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
  const { data: posts = [] } = usePosts(userId);

  return (
    <>
      {posts.map((post: PostData) => (
        <PostItem key={post.id} data={post} />
      ))}
    </>
  );
};

PostFeed.propTypes = {
  userId: PropTypes.string, // userId prop is optional
};

export default PostFeed;
