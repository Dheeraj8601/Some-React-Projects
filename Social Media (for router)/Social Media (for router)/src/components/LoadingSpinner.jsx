import "./../routes/App.css";

export const LoadingSpinner = () => {

   
  return (
    <div className="text-center m-10p">
    <div className="spinner-border text-primary " role="status" style={{width: "8rem",height: "8rem"}}>
      <span className="visually-hidden fs-1">Loading...</span>
    </div>
  </div>
  
  );
};
