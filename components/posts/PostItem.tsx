import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart, AiOutlineMessage } from 'react-icons/ai';

interface PostItemProps {
  data: {
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
  };
}

const PostItem: React.FC<PostItemProps> = ({ data }) => {
  const [hasLiked, setHasLiked] = useState<boolean>(false);

  const goToUser = () => {
    // Implement your logic here
  };

  const goToPost = () => {
    // Implement your logic here
  };

  const onLike = () => {
    setHasLiked((prev) => !prev);
    // Implement your like logic here
  };

  const LikeIcon = hasLiked ? AiFillHeart : AiOutlineHeart;
  const formattedDate = data.createdAt ? new Date(data.createdAt).toLocaleString() : null;

  return (
    <div
      onClick={goToPost}
      className="border-b-[1px] border-neutral-800 p-5 cursor-pointer hover:bg-neutral-900 transition"
    >
      <div className="flex flex-row items-start gap-3">
        <div>
          <div className="flex flex-row items-center gap-2">
            <p
              onClick={goToUser}
              className="text-white font-semibold cursor-pointer hover:underline"
            >
              {data.user.name}
            </p>
            <span
              onClick={goToUser}
              className="text-neutral-500 cursor-pointer hover:underline hidden md:block"
            >
              @{data.user.username}
            </span>
            <span className="text-neutral-500 text-sm">{formattedDate}</span>
          </div>
          <div className="text-white mt-1">{data.body}</div>
          <div className="flex flex-row items-center mt-3 gap-10">
            <div className="flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-sky-500">
              <AiOutlineMessage size={20} />
              <p>{data.comments?.length || 0}</p>
            </div>
            <div
              onClick={onLike}
              className="flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-red-500"
            >
              <LikeIcon color={hasLiked ? 'red' : ''} size={20} />
              <p>{data.likedIds?.length || 0}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
