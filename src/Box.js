import React from "react";

function Box() {
  return (
    <>
      
      <div class="p-3">

        <div class="bg-white min-h-38 max-h-42 max-w-40 rounded-lg float-left m-2 shadow-lg">
          <img src='./hostel.png' class="h-28 w-32 rounded-lg" alt='main' ></img>
          <h1 class="text-center text-xl pb-1 font-semibold">Hostels</h1>
        </div>

        <div class="bg-white min-h-38 max-h-42 max-w-40 rounded-lg float-right m-2 shadow-lg hover:scale-125">
        <img src='./clg.png' class="h-28 w-32 rounded-lg" alt='main' ></img>
          <h1 class="text-center text-xl pb-1 font-semibold">Colleges</h1>
        </div>

        <div class="bg-green-200 min-h-38 max-h-42 max-w-40 rounded-lg float-left m-2 shadow-lg">
          <img src='./mess.jpg' class="h-28 w-32 rounded-lg m-" alt='main' ></img>
          <h1 class="text-center text-xl pb-1 font-semibold">Mess</h1>
        </div>

        <div class="bg-green-200 h-34  w-34 rounded-lg float-right m-2 shadow-lg">
        <img src='./sport.jpg' class="h-28 w-32 rounded-lg" alt='main' ></img>
          <h1 class="text-center text-lg pb-1 font-semibold">Sport Complex</h1>
        </div>

        <div class="bg-green-200 min-h-38 max-h-42 max-w-40 rounded-lg float-left m-2 shadow-lg">
          <img src='./hospital.jpg' class="h-28 w-32 rounded-lg" alt='main' ></img>
          <h1 class="text-center text-xl pb-1 font-semibold">Hospital</h1>
        </div>

        <div class="bg-green-200 min-h-38 max-h-42 max-w-40 rounded-lg float-right m-2 shadow-lg">
        <img src='./canteen.jpg' class="h-28 w-32 rounded-lg" alt='main' ></img>
          <h1 class="text-center text-xl pb-1 font-semibold">Canteen</h1>
        </div>

        <div class="bg-green-200 min-h-38 max-h-42 max-w-40 rounded-lg float-left m-2 shadow-lg">
          <img src='./parking.jpg' class="h-28 w-32 rounded-lg m-" alt='main' ></img>
          <h1 class="text-center text-xl pb-1 font-semibold">Parking</h1>
        </div>

        <div class="bg-green-200 h-34  w-34 rounded-lg float-right m-2 shadow-lg">
        <img src='./gym.jpg' class="h-28 w-32 rounded-lg" alt='main' ></img>
          <h1 class="text-center text-lg pb-1 font-semibold">Gym</h1>
        </div>

        <div class="bg-green-200 h-34  w-34 rounded-lg float-left m-2 shadow-lg">
        <img src='./other.jpg' class="h-28 w-32 rounded-lg" alt='main' ></img>
          <h1 class="text-center text-lg pb-1 font-semibold">Other</h1>
        </div>

        
        

      </div>
    </>
  );
}

export default Box;
