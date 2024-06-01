// import PropTypes from "prop-types";
// import { useContext } from "react";
// import { MdDelete } from "react-icons/md";
// import { PostList } from "../store/posts-list-store";
// import "./../App.css"

// export const Post = ({ post }) => {
//   const { deletePost } = useContext(PostList);
//   return (
//     <div className="card post-card m240" style={{ width: "30rem" }}>
//       <div className="card-body">
//         <h5 className="card-title">
//           {post.title}
//           <span
//             className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
//             onClick={() => deletePost(post.id)}
//           >
//             <MdDelete />
//             <span className="visually-hidden">Delete</span>
//           </span>
//         </h5>
//         <p className="card-text">{post.body}</p>
//         {post.tags.map((tag) => (
//           <span
//             key={post.id}
//             className="badge text-bg-primary mx-1 hashtag mb-1"
//           >
//             #{tag}
//           </span>
//         ))}
//         <div className="alert alert-success reactions" role="alert">
//           This post has been reacted by {post.reactions} people.
//         </div>
//       </div>
//     </div>
//   );
// };

// Post.propTypes = {
//   post: PropTypes.object.isRequired,
// };
import PropTypes from "prop-types";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/posts-list-store";
import "./../App.css";

export const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card m-2" style={{ width: "100%", position: "relative" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
            style={{ cursor: "pointer" }}
          >
            <MdDelete />
            <span className="visually-hidden">Delete</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="badge text-bg-primary mx-1 hashtag mb-1"
          >
            #{tag}
          </span>
        ))}
        <div className="alert alert-success reactions sticky-bottom" role="alert">
          This post has been reacted by {post.reactions} people.
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
