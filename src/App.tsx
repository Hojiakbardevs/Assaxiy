import Imagesource from "./assets/react.svg";

function App() {
  return (
    <div className="container">
      <div>Hello world</div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel">
        <div className="carousel-inner bg-primary">
          <div className="carousel-item active">
            <img src={Imagesource} className="d-block w-25" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={Imagesource} className="d-block w-25" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={Imagesource} className="d-block w-25" alt="Slide 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default App;

