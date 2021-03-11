import React from "react";

const HomeScreen = () => {
  return (
    <div className="container d-grid text-center">
      <div class="card mt-5">
        <div class="card-header">
          <img
            src="https://www.wenhammuseum.org/wp-content/uploads/2014/08/library-banner-1024x450.jpg"
            class="img-fluid"
            alt="Library Banner"
          ></img>
        </div>
        <div class="card-body">
          <h1 class="card-title">MERN CRUD Operation with REDUX</h1>
          <p class="card-text">
            A real friend is one who walks in when the rest of the world walks
            out.
          </p>
          <a href="/library" class="btn btn-primary btn-lg ">
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
