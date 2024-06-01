import PropTypes from "prop-types";

const ErrorMsg = (props) => {
  const { Items } = props;

  return <>{Items.length === 0 && <h3 className="text-center text-danger">I am hungry</h3>}</>;
};

ErrorMsg.propTypes = {
    Items: PropTypes.array.isRequired,
};

export default ErrorMsg;






