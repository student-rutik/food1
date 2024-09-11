import React from "react";

export default function Slider() {
  return (
    <div>
  <style>
  
  </style>

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
            </form>
          </div>

          <div className="carousel-item active">
            <img
              src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?ga=GA1.2.1842581937.1703348153&semt=ais_hybrid"
              className="d-block w-100 img-fluid"
              alt="..."
              style={{ filter: "brightness(90%)",height: "500px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/high-angle-asian-dumplings-dish-with-herbs_23-2148694345.jpg?ga=GA1.2.1842581937.1703348153&semt=ais_hybrid"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(70%)",  height: "500px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?ga=GA1.2.1842581937.1703348153&semt=ais_hybrid"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(60%)", height: "500px" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
