import "./../App.css";
const Header = () => {
  return (
    <header className="p-3 text-bg-dark mb-2">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>

          <h1 className="text-center m200p45">Social Media App</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
