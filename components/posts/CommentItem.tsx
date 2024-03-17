import React from 'react';
import { useRouter } from 'next/router';
import { formatDistanceToNowStrict } from 'date-fns';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

import Avatar from '../Avatar';

interface UserData {
  id: string;
  name: string;
  username: string;
}

interface CommentData {
  user: UserData;
  body: string;
  createdAt: Date;
}

interface CommentItemProps {
  data: CommentData;
}

const CommentItem: React.FC<CommentItemProps> = ({ data }) => {
  const router = useRouter();

  const goToUser = (ev: React.MouseEvent<HTMLParagraphElement>) => {
    ev.stopPropagation();

    router.push(`/users/${data.user.id}`);
  };

  const createdAt = formatDistanceToNowStrict(data.createdAt);

  return (
    <div className="border-b-[1px] border-neutral-800 p-5 cursor-pointer hover:bg-neutral-900 transition">
      <div className="flex flex-row items-start gap-3">
        <Avatar userId={data.user.id} />
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
            <span className="text-neutral-500 text-sm">{createdAt}</span>
          </div>
          <div className="text-white mt-1">{data.body}</div>
        </div>
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  data: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

export default CommentItem;
