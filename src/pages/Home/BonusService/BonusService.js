import React from "react";
import drone from "../../../images/drone.jpg";

const BonusService = () => {
  return (
    <div>
      <h1 className="my-3 fw-bold text-primary">Upcoming Services</h1>
      <div class="w-100 border-0">
        <div class="row g-0">
          <div class="col-md-4 p-3">
            <img src={drone} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h2 class="card-title">Drone Shot</h2>
              <h4>Price: $ 1000 </h4>
              <p class="card-text w-75 mx-auto">
                A shot where the camera on the drone moves (pans) to the left or
                right. It's commonly used to give a panoramic perspective of a
                scene or when the creator wants to reveal something.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonusService;
