// import PropTypes from "prop-types";

export const WelcomeMessage = (/*{onGetPostsClick}*/) => {
  return (
    <div className="d-flex vh-10 mt-5">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1 className="fw-bold">Nothing Was Posted</h1>
        <p className="text-secondary">
          Please click on create post to add post
        </p>
        {/* <button type="button" className="btn btn-primary" onClick={onGetPostsClick}>Get Posts From Server</button> */}
      </div>
    </div>
  );
};

// WelcomeMessage.propTypes = {
//     onGetPostsClick: PropTypes.func,
//   };
