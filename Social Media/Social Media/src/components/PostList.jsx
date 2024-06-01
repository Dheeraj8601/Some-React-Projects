// import { useContext } from "react";
// import { Post } from "./Post";
// import { PostList as PostListData } from "/src/store/posts-list-store.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { WelcomeMessage } from "./WelcomeMessage";
// import { LoadingSpinner } from "./LoadingSpinner";

// const PostList = () => {
//   const { postList,fetching} = useContext(PostListData);
//   // console.log(postList);


//   return (
//     <>
//     {fetching && <LoadingSpinner></LoadingSpinner>}
//       {!fetching && postList.length === 0 && (
//         // <WelcomeMessage onGetPostsClick={handleGetPostsClick}></WelcomeMessage>
//         <WelcomeMessage></WelcomeMessage>
//       )}

//       {!fetching && postList.map((post) => (
//         <Post key={post.id} post={post} />
//       ))}
//     </>
//   );
// };

// export default PostList;


import { useContext } from "react";
import { Post } from "./Post";
import { PostList as PostListData } from "/src/store/posts-list-store.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { WelcomeMessage } from "./WelcomeMessage";
import { LoadingSpinner } from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      <div className="container">
        <div className="row">
          {!fetching &&
            postList.map((post) => (
              <div className="col-md-6 d-flex align-items-stretch" key={post.id}>
                <Post post={post} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default PostList;
