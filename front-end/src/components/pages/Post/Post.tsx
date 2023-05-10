import React from "react";
import Navbar from "../../navbar/Navbar";
import './styles.scss'
interface Props {}
const Post: React.FC<Props> = () => {
  return (
    <div className="post">
      <Navbar />
    </div>
  );
};

export default Post;
