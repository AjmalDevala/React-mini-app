import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/sample";

function Footer_1() {
// const [data,setData] =useState("")
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
  const dispach = useDispatch()
  return (

    <>

      <div class="flex justify-center space-x-6 p-7">
        <button onClick={() => dispach(increment())}  class="text-lg w-auto  hover:scale-125 bg-red-600 font-bold   rounded-md hover:scroll-mx-3.5   text-white p-2.5">ADD</button>
        <button onClick={() => dispach(decrement())} class="text-lg w-auto bg-green-600 font-bold  hover:rotate-12  rounded-md hover:scroll-mx-3.5   text-white p-2.5">Remove</button>
        <button onClick={() => dispach(decrement())} class="text-lg w-auto bg-blue-600 font-bold  hover:-rotate-12  rounded-md hover:scroll-mx-3.5   text-white p-2.5">Remove</button>
        <button onClick={() => dispach(decrement())} class="text-lg w-auto bg-yellow-600 font-bold  hover:translate-x-3  box-content hover:scroll-mx-3.5   text-white p-2.5">Remove</button>

    </div >
      <div class="flex justify-center h-[40vh]  mt-6">
        <img src="	https://c.housingcdn.com/demand/s/client/common/assets/gptw.f05b9fda.jpg" alt="" />
      </div>
      <div class="flex justify-center h-14 mb-6 mt-6">
        <p className=" justify-items-center mt-2 text-4xl mr-1 text-slate-700 font-bold ">Part of</p>
        <img src="	https://c.housingcdn.com/demand/s/client/common/assets/REAGroup.e5435593.png" alt="" />
      </div>

      <footer aria-label="Site Footer" class="bg-black -mb-5">
        <div class=" px-4 py-16 sm:px-6 lg:px-8">
          <div
            class="flex flex-row  gap-4 rounded-lg p-6 shadow-lg  "
          >
            <span class="text-gray-700 w-[15%]">
              Our Brands
            </span>
            <div class="flex justify-center space-x-32   bg-black filter grayscale overflow-hidden w-[70%]">

              <img class="h-6 ml-3" src="https://cdn.sanity.io/images/gxmub2ol/production/f4923939d76bc0f1eeaab7b20d8f1e87daf3cd25-3720x500.png" alt="" />
              <img class="h-6 " src="https://seeklogo.com/images/M/makaan-com-logo-36CD0FB210-seeklogo.com.png" alt="" />
              <img class="h-10 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKlhoOS_j0kBLaVy4c1pa2qqdU6hVhjkIhNvjoqm6cOMXHTu7-5HqKoa8LHsyYRVvT0SOKZaZuaag&usqp=CAU&ec=48600112" alt="" />
            </div>


          </div>

          <div class=" grid  gap-8 sm:grid-cols-2 lg:grid-cols-6">
            <div class="text-center grid-cols-1 sm:text-left">
              <nav aria-label="Footer About Nav" class="mt-8">
                <ul class="space-y-4 text-sm">
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Mumbai
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Bengaluru
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Hyderabad
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Pune
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Chennai
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Delhi
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Gurgaon
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Noida
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Kolkata
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Ahmedabad
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Thane
                    </a>
                  </li>

                </ul>
              </nav>
            </div>
            <div class="text-center grid-cols-1 sm:text-left">
              <nav aria-label="Footer About Nav" class="mt-8">
                <ul class="space-y-4 text-sm">
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Mumbai
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Bengaluru
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Hyderabad
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Pune
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Chennai
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Delhi
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Gurgaon
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Noida
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Kolkata
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Ahmedabad
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Thane
                    </a>
                  </li>

                </ul>
              </nav>
            </div>
            <div class="text-center grid-cols-1 sm:text-left">
              <nav aria-label="Footer About Nav" class="mt-8">
                <ul class="space-y-4 text-sm">
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Mumbai
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Bengaluru
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Hyderabad
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Pune
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Chennai
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Delhi
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Gurgaon
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Noida
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Kolkata
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Ahmedabad
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Real estate in Thane
                    </a>
                  </li>

                </ul>
              </nav>
            </div>
            <div class="text-center grid-cols-1 sm:text-left">
              <nav aria-label="Footer About Nav" class="mt-8">
                <ul class="space-y-4 text-sm">
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in Ghaziabad
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in Ghaziabad
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in Ghaziabad
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in  Pune
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in  Chennai
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in Delhi
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property inGurgaon
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in Noida
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in Kolkata
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in Ahmedabad
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in Thane
                    </a>
                  </li>

                </ul>
              </nav>
            </div>
            <div class="text-center grid-cols-1 sm:text-left">
              <nav aria-label="Footer About Nav" class="mt-8">
                <ul class="space-y-4 text-sm">
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in Ghaziabad
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in Ghaziabad
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in Ghaziabad
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in  Pune
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in  Chennai
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in Delhi
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property inGurgaon
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in Noida
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in Kolkata
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in Ahmedabad
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in Thane
                    </a>
                  </li>

                </ul>
              </nav>
            </div>
            <div class="text-center grid-cols-1 sm:text-left">
              <nav aria-label="Footer About Nav" class="mt-8">
                <ul class="space-y-4 text-sm">
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in Ghaziabad
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in Ghaziabad
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in Ghaziabad
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in  Pune
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in  Chennai
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in Delhi
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property inGurgaon
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in Noida
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in Kolkata
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in Ahmedabad
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Commercial Property in Thane
                    </a>
                  </li>

                </ul>
              </nav>
            </div>








          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer_1;
