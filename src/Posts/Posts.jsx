import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onBackClick = () => navigate(location.state?.from || "/");
  return (
    <div>
      <br />
      <br />

      <h2>Posts page</h2>
      <img onClick={onBackClick} src="https://www.meme-arsenal.com/memes/f920fa75d0025495ffd6828bfbda0687.jpg"></img>
      
    </div>
  );
};

export default Post;
