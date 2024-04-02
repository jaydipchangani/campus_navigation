import React from "react";
import Header from "./header";

function List() {
  return (
    <>
      <Header />

      <div class="mt-5">
        
        <div class="bg-gray-300 max-h-42 max-w-40 rounded-lg float-left m-1 ">
            <img src='./guni_main.jpg' class="max-h-40 rounded-lg" alt='main' ></img>
            <h1 class="text-center text-xl m-1">New Building UVPCE</h1>
        </div>

        <div class="bg-gray-300 max-h-42 max-w-40 rounded-lg float-right m-1 ">
            <img src='./guni_main.jpg' class="max-h-40 rounded-lg" alt='main' ></img>
             <h1 class="text-center text-xl m-1">New Building UVPCE</h1>
        </div>

      </div>
    </>
  );
}

export default List;
