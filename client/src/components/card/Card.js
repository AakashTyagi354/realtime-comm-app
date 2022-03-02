import React, { useState } from 'react'
import './card.css'
  
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import IosShareIcon from '@mui/icons-material/IosShare';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Card = ({ post, socket, user }) => {
  const [liked, setLiked] = useState(false);

  const handleNotification = (type) => {
    type === 1 && setLiked(true);
    socket.emit("sendNotification", {
      senderName: user,
      receiverName: post.username,
      type,
    });
  };

  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="" className="postImg" />
      <div className="interaction">
        {liked ? (
          <FavoriteBorderIcon className="cardIcon" />
        ) : (
          <FavoriteIcon
            className="cardIcon"
            onClick={() => handleNotification(1)}
          />
        )}
        <ChatBubbleOutlineIcon
          className="cardIcon"
          onClick={() => handleNotification(2)}
        />
        <IosShareIcon
          className="cardIcon"
          onClick={() => handleNotification(3)}
        />
        <InfoIcon className="cardIcon infoIcon" />
      </div>
    </div>
  );
};

export default Card