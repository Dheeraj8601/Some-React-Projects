import { createContext, useReducer,useState,useEffect } from "react";
import PropTypes from "prop-types";

const DEFAULT_POST_LIST = []

// Create the context
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetching:false,
  deletePost: () => {},
});

// Reducer function for managing post list state
const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if(action.type==='DELETE_POST'){
        newPostList = currPostList.filter(post => post.id !== action.payload.postId)
    }else if(action.type === 'ADD_POST'){
        console.log(action.payload)
newPostList = [action.payload,...currPostList]
    }else if(action.type==='ADD_INITIAL_POSTS'){
          newPostList=action.payload.posts;
    }
  return newPostList;
};

// Provider component for the PostList
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);


  const [fetching,setFetching] = useState(false)

  useEffect (() => {
    setFetching(true);

 const controller = new AbortController();
 const signal = controller.signal;

    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {addInitialPosts(data.posts);
        setFetching(false);
      });

      return () =>{
        console.log("Cleaning up useEffect..");
        controller.abort();
      }
  },[]);

  // const addPost = (userId,postTitle,postBody,reactions,tags) => {
  //   // console.log(`${userId} ${postTitle} ${postBody} ${reactions} ${tags}`)
  //   dispatchPostList({
  //       type:'ADD_POST',
  //       payload :{
  //           id: Date.now(),
  //           title: postTitle,
  //           body: postBody,
  //           reactions: reactions,
  //           userId: userId,
  //           tags: tags,
  //         }
  //   })
  // };

  const addPost = (post) => {
    // console.log(`${userId} ${postTitle} ${postBody} ${reactions} ${tags}`)
    dispatchPostList({
        type:'ADD_POST',
        payload :post,
    })
  };

  const addInitialPosts = (posts) => {
    // console.log(`${userId} ${postTitle} ${postBody} ${reactions} ${tags}`)
    dispatchPostList({
        type:'ADD_INITIAL_POSTS',
        payload :{
            posts,
          }
    })
  };

  const deletePost = (postId) => {
   
    dispatchPostList({
        type:'DELETE_POST',
        payload:{
            postId,
        }
    })
  };

  const value = {
    postList,
    addPost,
    fetching,
    deletePost,
  };

  return <PostList.Provider value={value}>{children}</PostList.Provider>;
};

PostListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostListProvider;

