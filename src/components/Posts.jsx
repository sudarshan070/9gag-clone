import React from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaCommentAlt,
  FaFacebookF,
  FaPinterest,
} from "react-icons/fa";

export default class Posts extends React.Component {
  render() {
    const { posts, loading } = this.props;

    if (loading) {
      return <h2>Loading...</h2>;
    }
    return (
      <div>
        {posts.map((post, i) => {
          const { title, imageURL, upVoteCount, commentsCount } = post;
          return (
            <div key={i} className="border-bottom post-section py-3">
              <h2>{title}</h2>
              <div className="pt-2 content-img-width">
                <img src={imageURL} alt={title} />
              </div>
              <div>
                <span className="pr-1">{commentsCount} Points</span>
                <span>{`. ${upVoteCount}`} Comments</span>
              </div>

              <div className="d-flex justify-content-between pt-2">
                <div>
                  <button className="btn btn-outline-secondary mr-1 text-sm">
                    <FaArrowUp />
                  </button>
                  <button className="btn btn-outline-secondary mr-1 text-sm">
                    <FaArrowDown />
                  </button>
                  <button className="btn btn-outline-secondary mr-1 text-sm">
                    <FaCommentAlt />
                  </button>
                  <button className="btn btn-outline-secondary text-sm">
                    <Dot />
                  </button>
                </div>
                <div className="pr-5">
                  <button className="btn mr-1 facebook-btn text-sm">
                    <FaFacebookF /> Facebook
                  </button>
                  <button className="btn btn-danger text-sm">
                    <FaPinterest /> Pinterest
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

function Dot() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="16"
      height="16"
    >
      <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
    </svg>
  );
}
