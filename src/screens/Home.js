import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cart from "../components/Cart";


export default function Home() {
  const [search, setSearch] = useState("");
  const [foodC, setFoodC] = useState([]);
  const [fooditem, setFooditem] = useState([]);

  const Loaddata = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });
    response = await response.json();

    setFooditem(response[0]);
    setFoodC(response[1]);

    // console.log(response[0],response[1]);
  };

  useEffect(() => {
    Loaddata();
  }, []);

  return (
    <div>
      <Navbar />


      {/* slider yaha kyunki hume search bar pe chize search karni he  */}
      <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
               value={search}  onChange={(e)=>{setSearch(e.target.value)}}
              />
              
            </div>
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
      





      {/* //cart login display in frontend */}
      <div className="container mt-5">
  {foodC.length > 0 ? (
    foodC.map((data) => {
      console.log("Category: ", data.CategoryName);
      return (
        <div key={data._id} className="row mb-4">
          <div className="col-12">
            <h5 className="text-center">{data.CategoryName}</h5>
            <hr />
          </div>

          <div className="col-12">
            {fooditem.length > 0 ? (
              <div className="row gx-3 gy-4">
                {fooditem
                  .filter((item) => (item.CategoryName === data.CategoryName)&& (item.name.toLowerCase().includes(search.toLowerCase())))
                  .map((filteritems) => {
                    console.log("Filtered Item: ", filteritems);
                    return (
                      <div key={filteritems._id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-3">
                        <Cart 
                            foodItem={filteritems}
                          // foodName={filteritems.name}
                          options={filteritems.options[0]}
                          // img={filteritems.img}
                          // description={filteritems.description}
                        />
                      </div>
                    );
                  })}
              </div>
            ) : (
              <div className="text-center">No data found</div>
            )}
          </div>
        </div>
      );
    })
  ) : (
    <div className="text-center py-5">******* No categories found *******</div>
  )}
</div>






      <div className="mt-5">
      <Footer />
      </div>
    </div>
  );
}
