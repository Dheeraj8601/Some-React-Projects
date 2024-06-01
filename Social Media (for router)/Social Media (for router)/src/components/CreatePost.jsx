import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your userId
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows="4"
          name="body"
          className="form-control"
          id="body"
          placeholder="Tell us more about it..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="number"
          name="reactions"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags
        </label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Please enter your tags.."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(",");
  await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => console.log(post));
  return redirect("/post-list");
}

export default CreatePost;

// // import { useContext, useRef } from "react";
// // import { PostList } from "../store/posts-list-store";
// // import { useNavigate } from "react-router-dom";

// const CreatePost = () => {
//   // const handleClick = () => {
//   //   alert("Click OK to add your post");
//   // };

//   //const { addPost } = useContext(PostList);

//   //const navigate = useNavigate();

//   // const userIdElement = useRef();
//   // const postTitleElement = useRef();
//   // const postBodyElement = useRef();
//   // const reactionsElement = useRef();
//   // const tagsElement = useRef();

//   const handleSubmit = (event) => {
//    // event.preventDefault();
//     // const userId = userIdElement.current.value;
//     // const postTitle = postTitleElement.current.value;
//     // const postBody = postBodyElement.current.value;
//     // const reactions = reactionsElement.current.value;
//     // const tags = tagsElement.current.value.split(/\s+/);

//     // fetch("https://dummyjson.com/posts/add", {
//     //   method: "POST",
//     //   headers: { "Content-Type": "application/json" },
//     //   body: JSON.stringify({
//     //     title: postTitle,
//     //     body: postBody,
//     //     reactions: reactions,
//     //     userId: userId,
//     //     tags: tags,
//     //   }),
//     // })
//     //   .then((res) => res.json())
//     //   .then((post) => {
//     //     addPost(post);
//     //     navigate("/post-list");
//     //   });

//     // addPost(userId, postTitle, postBody, reactions, tags);
//   };

//   return (
//     //<form className="create-post" onSubmit={handleSubmit}>

//     <Form className="create-post" onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="userId" className="form-label">
//           Enter your userId
//         </label>
//         <input
//           type="text"
//           ref={userIdElement}
//           className="form-control"
//           id="userId"
//           placeholder="Your User Id"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="title" className="form-label">
//           Post Title
//         </label>
//         <input
//           type="text"
//           ref={postTitleElement}
//           className="form-control"
//           id="title"
//           placeholder="How are you feeling today..."
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="body" className="form-label">
//           Post Content
//         </label>
//         <textarea
//           type="text"
//           rows="4"
//           ref={postBodyElement}
//           className="form-control"
//           id="body"
//           placeholder="Tell us more about it..."
//         />
//       </div>

//       <div className="mb-3">
//         <label htmlFor="reactions" className="form-label">
//           Number of reactions
//         </label>
//         <input
//           type="number"
//           ref={reactionsElement}
//           className="form-control"
//           id="reactions"
//           placeholder="How many people reacted to this."
//         />
//       </div>

//       <div className="mb-3">
//         <label htmlFor="tags" className="form-label">
//           Enter your hashtags
//         </label>
//         <input
//           type="text"
//           ref={tagsElement}
//           className="form-control"
//           id="tags"
//           placeholder="Please enter your tags.."
//         />
//       </div>
//       {/* onClick={handleClick} */}
//       <button type="submit" className="btn btn-primary">
//         Post
//       </button>
//     </Form>
//   );
// };

// export const createPostAction = () => {
//   fetch("https://dummyjson.com/posts/add", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       title: postTitle,
//       body: postBody,
//       reactions: reactions,
//       userId: userId,
//       tags: tags,
//     }),
//   })
//     .then((res) => res.json())
//     .then((post) => {
//       addPost(post);
//       navigate("/post-list");
//     });
// }

// export default CreatePost;
