import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { FaComments } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

const Post = ({data}) => {
  return (
    <>
      <div className="post_container">
        <div className="person">
          <div className="author">
            <div className="img">
              <img
               src={data.pImg} alt="" />
            </div>
            <div className="text">
              <h3>{data.userName}</h3>
              <p>{data.title}</p>
            </div>
          </div>
          <div className="dot"><BsThreeDotsVertical /></div>
        </div>

        <p>{data.description}</p>

        <div className="post_img">
          <img src={data.mImg} alt="" />
        </div>

        <div className="like_comment">
          <div className="likes"><FcLike className='items' />{data.like}{" "}k</div>
          <div className="comments"><FaComments className='items' />{data.comment}k{" "}</div>
          <div className="share"><FaShareAlt className='items' />{data.share}{" "}k</div>
        </div>
      </div>
    </>
  )
}

export default Post