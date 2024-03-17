import React from 'react';
import CommentItem from './CommentItem';

interface UserData {
  id: string;
  name: string;
  username: string;
  // Add other properties as needed
}

interface Comment {
  id: string;
  user: UserData;
  body: string;
  createdAt: Date;
  // Add other properties if needed
}

interface CommentFeedProps {
  comments?: Comment[];
}

const CommentFeed: React.FC<CommentFeedProps> = ({ comments = [] }) => {
  return (
    <>
      {comments.map((comment) => (
        <CommentItem key={comment.id} data={comment} />
      ))}
    </>
  );
};

export default CommentFeed;
