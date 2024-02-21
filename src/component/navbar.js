import React, { useState } from "react";

function Navbar() {
  const [onmouse, setOnmouse] = useState(false);
  return (
    <div>
      <nav className="  w-screen bg-slate-50 p-5 fixed z-[1]  ">
        <div className="flex justify-between items-center  ">
          <div className="flex justify-center items-center ml-36 max-lg:ml-0 ">
            <i class="fa-solid fa-bars hidden max-md:block mr-5 text-2xl"></i>
            <img
              className="w-36 h-22 mr-10"
              src="https://www.carnivalbkk.com/media/logo/stores/4/carnival-black-logo_2_.png"
              alt=""
            ></img>
            <ul className="flex justify-center items-center max-lg:hidden">
              <li className=" mr-5 text-sm">NEW ARRIVAL</li>
              <div>
                <li
                  onMouseOver={() => setOnmouse(true)}
                  onMouseOut={() => setOnmouse(false)}
                  className=" cursor-pointer mr-5 text-sm"
                >
                  CARNIVAL®
                </li>
                {onmouse === true && (
                  <div
                    className=" absolute bg-white "
                    onMouseOver={() => setOnmouse(true)}
                    onMouseOut={() => setOnmouse(false)}
                  >
                    <div className="flex p-5">
                      <div className="p-5">
                        <p className=" text-lg font-bold ">Collection</p>
                        <p className="p-1 cursor-pointer">Carnival X Heineken Experience</p>
                        <p className="p-1 cursor-pointer"> UMBRO x CARNIVAL® Collection</p>
                        <p className="p-1 cursor-pointer">CARNIVAL® Fall Winter 2023</p>
                        <p className="p-1 cursor-pointer">CARNIVAL® x Imperial Leather Classic Collection</p>
                        <p className="p-1 cursor-pointer">CARNIVAL® x KENZ</p>
                        <p className="p-1 cursor-pointer">CARNIVAL® & Disney/Pixar's Toy Story</p>
                        <p className="p-1 cursor-pointer">CARNIVAL® Spring/Summer 2023</p>
                        <p className="p-1 cursor-pointer">CARNIVAL® Home & Away</p>
                      </div>
                      <div className="p-5">
                        <p className=" text-lg font-bold ">Category</p>
                        <p className="p-1 cursor-pointer">T-SHIRT</p>
                        <p className="p-1 cursor-pointer">SWEATER</p>
                        <p className="p-1 cursor-pointer">PANTS</p>
                        <p className="p-1 cursor-pointer">SHORTS</p>
                        <p className="p-1 cursor-pointer">SANDALS</p>
                        <p className="p-1 cursor-pointer">HEADWEAR</p>
                        <p className="p-1 cursor-pointer">ACCESSORIES</p>
                      </div>
                      <div className="p-5">
                        <div className=" grid grid-cols-2 gap-3 ">
                          <div className="cursor-pointer">
                          <img
                            className=" w-72"
                            src="https://www.carnivalbkk.com/media/cnvmenu/fw23web.jpg"
                            alt=""
                          ></img>
                          <p className="text-xs p-1">CARNIVAL® Fall Winter 2023</p>
                          </div>
                          <div className="cursor-pointer">
                            <img
                              className=" w-72"
                              src="https://www.carnivalbkk.com/media/web/mamu1596.jpg"
                              alt=""
                            ></img>
                            <p className="text-xs p-1">UMBRO x CARNIVAL® Collection</p>
                          </div>
                          <div className="cursor-pointer">
                            <img
                              className=" w-72"
                              src="https://www.carnivalbkk.com/media/web/mamu2596.jpg"
                              alt=""
                            ></img>
                            <p className="text-xs p-1">CARNIVAL® x Imperial Leather Classic Collection</p>
                          </div>
                          <div className="cursor-pointer">
                            <img
                              className=" w-72"
                              src=" https://www.carnivalbkk.com/media/cnvmenu/home.jpg"
                              alt=""
                            ></img>
                            <p className="text-xs p-1">CARNIVAL® Home & Away</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <li className=" cursor-pointer mr-5 text-sm">SHOP</li>
              <li className=" cursor-pointer mr-5 text-sm">FOOTWEAR</li>
              <li className=" cursor-pointer mr-5 text-sm">MEN</li>
              <li className=" cursor-pointer mr-5 text-sm">WOMEN</li>
              <li className=" cursor-pointer mr-5 text-sm">BLOG</li>
              <li className=" cursor-pointer mr-5 text-sm">SALE</li>
            </ul>
          </div>
          <div className="mr-32 flex justify-center items-center max-lg:mr-0 max-md:hidden">
            <i class="fa-solid fa-magnifying-glass m-2"></i>
            <i class="fa-regular fa-user m-2"></i>
            <i class="fa-solid fa-bag-shopping m-2"></i>
            <p>|</p>
            <p className="ml-2">TH</p>
          </div>
          <div className="mr-32 justify-center items-center max-lg:mr-0 hidden max-md:block ">
            <i class="fa-solid fa-bag-shopping m-2 text-2xl"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
