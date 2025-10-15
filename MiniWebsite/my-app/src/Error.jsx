import Header from "./Common/Header";

export default function Error() {
  return (
    <>
      <Header />
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <p className="fs-4 text-muted mb-4">Oops! The page you are looking for does not exist.</p>
        <a href="/" className="btn btn-primary px-4 py-2 rounded-pill">
          Back to Home
        </a>
      </div>
    </>
  );
}
