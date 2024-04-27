import React, { useState } from "react";

function Navbar() {
  const [onmouse, setOnmouse] = useState(false);
  const [onmouseshop, setOnmouseshop] = useState(false);
  const [onmouseFOOTWEAR, setOnmouseFOOTWEAR] = useState(false);
  const [onmouseman, setOnmouseman] = useState(false);
  const [onmousewomen, setOnmousewomen] = useState(false);

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
                    className=" absolute  bg-white "
                    onMouseOver={() => setOnmouse(true)}
                    onMouseOut={() => setOnmouse(false)}
                  >
                    <div className="flex p-5">
                      <div className="p-5">
                        <p className=" text-lg font-bold ">Collection</p>
                        <p className="p-1 cursor-pointer">
                          Carnival X Heineken Experience
                        </p>
                        <p className="p-1 cursor-pointer">
                          {" "}
                          UMBRO x CARNIVAL® Collection
                        </p>
                        <p className="p-1 cursor-pointer">
                          CARNIVAL® Fall Winter 2023
                        </p>
                        <p className="p-1 cursor-pointer">
                          CARNIVAL® x Imperial Leather Classic Collection
                        </p>
                        <p className="p-1 cursor-pointer">CARNIVAL® x KENZ</p>
                        <p className="p-1 cursor-pointer">
                          CARNIVAL® & Disney/Pixar's Toy Story
                        </p>
                        <p className="p-1 cursor-pointer">
                          CARNIVAL® Spring/Summer 2023
                        </p>
                        <p className="p-1 cursor-pointer">
                          CARNIVAL® Home & Away
                        </p>
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
                            <p className="text-xs p-1">
                              CARNIVAL® Fall Winter 2023
                            </p>
                          </div>
                          <div className="cursor-pointer">
                            <img
                              className=" w-72"
                              src="https://www.carnivalbkk.com/media/web/mamu1596.jpg"
                              alt=""
                            ></img>
                            <p className="text-xs p-1">
                              UMBRO x CARNIVAL® Collection
                            </p>
                          </div>
                          <div className="cursor-pointer">
                            <img
                              className=" w-72"
                              src="https://www.carnivalbkk.com/media/web/mamu2596.jpg"
                              alt=""
                            ></img>
                            <p className="text-xs p-1">
                              CARNIVAL® x Imperial Leather Classic Collection
                            </p>
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
              <div >
                <li
                  className=" cursor-pointer mr-5 text-sm"
                  onMouseOver={() => setOnmouseshop(true)}
                  onMouseOut={() => setOnmouseshop(false)}
                >
                  SHOP
                </li>
                {onmouseshop === true && (
                  <div
                    className=" fixed   bg-white "
                    onMouseOver={() => setOnmouseshop(true)}
                    onMouseOut={() => setOnmouseshop(false)}
                  >
                    <div className="flex p-5">
                      <div className="p-5">
                        <p className=" text-lg font-bold ">CATEGORY</p>
                        <p className="p-1 cursor-pointer">Accessories</p>
                        <p className="p-1 cursor-pointer"> Bags</p>
                        <p className="p-1 cursor-pointer">Hats</p>
                        <p className="p-1 cursor-pointer">Jackets</p>
                        <p className="p-1 cursor-pointer">Jeans</p>
                        <p className="p-1 cursor-pointer">Jerseys</p>
                        <p className="p-1 cursor-pointer">Pants</p>
                        <p className="p-1 cursor-pointer">Sneakers</p>
                        <p className="p-1 cursor-pointer">Shirts</p>
                        <p className="p-1 cursor-pointer">Shoe Care</p>
                        <p className="p-1 cursor-pointer">Shorts</p>
                        <p className="p-1 cursor-pointer">Socks</p>
                        <p className="p-1 cursor-pointer">T-Shirts</p>
                        <p className="p-1 cursor-pointer">Hoodies</p>
                        <p className="p-1 cursor-pointer">Magazine</p>
                        <p className="p-1 cursor-pointer">Kids</p>
                        <p className="p-1 cursor-pointer text-red-500 ">
                          Sales
                        </p>
                      </div>
                      <div className="flex h-96 flex-col justify-center items-center">
                        <div className=" w-1 h-full bg-black flex justify-center items-center"></div>
                      </div>

                      <div className="p-5">
                        <p className=" text-lg font-bold ">BRANDS</p>
                        <p className="p-1 cursor-pointer">Carnival</p>
                        <p className="p-1 cursor-pointer">Nike</p>
                        <p className="p-1 cursor-pointer">Adidas Originals</p>
                        <p className="p-1 cursor-pointer">ASICS SPORTSTYLE</p>
                        <p className="p-1 cursor-pointer">Converse</p>
                        <p className="p-1 cursor-pointer">New Balance</p>
                        <p className="p-1 cursor-pointer">Tower Box</p>
                        <p className="p-1 cursor-pointer">Crep Protect</p>
                        <p className="p-1 cursor-pointer">CDGRE</p>
                      </div>
                      <div className="p-5">
                        <div class="nav-col brands">
                          <ul class="one-col-text-list">
                            <li>
                              <a href=".">ASICS SPORTSTYLE</a>
                            </li>
                            <li>
                              <a href=".">BOYS IN TOYLAND</a>
                            </li>
                            <li>
                              <a href=".">Casetify</a>
                            </li>
                            <li>
                              <a href=".">Chemise</a>
                            </li>
                            <li>
                              <a href="..">Converse</a>
                            </li>
                            <li>
                              <a href=".">Crocs</a>
                            </li>
                            <li>
                              <a href=".">Dickies</a>
                            </li>
                            <li>
                              <a href=".">EGA</a>
                            </li>
                            <li>
                              <a href="..">Faceless</a>
                            </li>
                            <li>
                              <a href=".">Foxtrot Uniform</a>
                            </li>
                            <li>
                              <a href=".">FR2</a>
                            </li>
                            <li>
                              <a href=".">GOOPiMADE</a>
                            </li>
                            <li>
                              <a href=".">Indigoskin</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="p-5">
                        <div class="nav-col brands">
                          <ul class="one-col-text-list">
                            <li>
                              <a href=".">Havaianas</a>
                            </li>
                            <li>
                              <a href=".">Hartcopy</a>
                            </li>
                            <li>
                              <a href=".">Herschel</a>
                            </li>
                            <li>
                              <a href=".">Hoka</a>
                            </li>
                            <li>
                              <a href=".">Huf</a>
                            </li>
                            <li>
                              <a href=".">Khaos</a>
                            </li>
                            <li>
                              <a href=".">Keen</a>
                            </li>
                            <li>
                              <a href=".">Late Night Dance Club</a>
                            </li>
                            <li>
                              <a href=".">Lost Management Cities</a>
                            </li>
                            <li>
                              <a href=".">Mastermind Japan</a>
                            </li>
                            <li>
                              <a href=".">Merrell</a>
                            </li>
                            <li>
                              <a href=".">Museum of Peace &amp; Quiet</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="p-5">
                        <div class="nav-col brands">
                          <ul class="one-col-text-list">
                            <li>
                              <a href=".">New Era</a>
                            </li>
                            <li>
                              <a href=".">Norda</a>
                            </li>
                            <li>
                              <a href=".">Nothing</a>
                            </li>
                            <li>
                              <a href=".">On Running</a>
                            </li>
                            <li>
                              <a href=".">Parra</a>
                            </li>
                            <li>
                              <a href=".">Paradise Youth Club</a>
                            </li>
                            <li>
                              <a href=".">Pleasures</a>
                            </li>
                            <li>
                              <a href=".">Puma</a>
                            </li>
                            <li>
                              <a href=".">Raw Emotions</a>
                            </li>
                            <li>
                              <a href=".">Reebok</a>
                            </li>
                            <li>
                              <a href=".">Round Two</a>
                            </li>
                            <li>
                              <a href=".">Salomon</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="p-5">
                        <div class="nav-col brands">
                          <ul class="one-col-text-list">
                            <li>
                              <a href=".">Saucony</a>
                            </li>
                            <li>
                              <a href=".">SCCT1of1</a>
                            </li>
                            <li>
                              <a href=".">Sculptor</a>
                            </li>
                            <li>
                              <a href=".">SSAP</a>
                            </li>
                            <li>
                              <a href=".">Suicoke</a>
                            </li>
                            <li>
                              <a href=".">The North Face</a>
                            </li>
                            <li>
                              <a href=".">thisisneverthat</a>
                            </li>
                            <li>
                              <a href=".">Universal Overall</a>
                            </li>
                            <li>
                              <a href=".">VAC</a>
                            </li>
                            <li>
                              <a href=".">Vans</a>
                            </li>
                            <li>
                              <a href=".">Vermillion</a>
                            </li>
                            <li>
                              <a href=".">Y-3</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div>
              <li className=" cursor-pointer mr-5 text-sm " onMouseOver={() => setOnmouseFOOTWEAR(true)}
                  onMouseOut={() => setOnmouseFOOTWEAR(false)}>FOOTWEAR</li>
              {onmouseFOOTWEAR === true && (
                  <div
                    className=" absolute  bg-white "
                    onMouseOver={() => setOnmouseFOOTWEAR(true)}
                    onMouseOut={() => setOnmouseFOOTWEAR(false)}
                  >
                    <div className="flex p-5">
                      <div className="p-5">
                        <ul className="flex gap-10">
                          <li>
                            <a href=".">View All</a>
                          </li>
                          <li>
                            <a href=".">Men</a>
                          </li> 
                          <li>
                            <a href=".">Women</a>
                          </li>
                          <li>
                            <a href=".">Women</a>
                          </li>
                          <li>
                            <a href=".">Sneakers</a>
                          </li>
                          <li>
                            <a href=".">Sandals</a>
                          </li>
                          <li>
                            <a href=".">sales</a>
                          </li>
                        </ul>
                      </div>
                      
                     
                    </div>
                  </div>
                )}
              </div>
              <div>
              <li className=" cursor-pointer mr-5 text-sm"   onMouseOver={() => setOnmouseman(true)}
                    onMouseOut={() => setOnmouseman(false)}>MEN</li>
              {onmouseman === true && (
                  <div
                    className=" absolute  bg-white "
                    onMouseOver={() => setOnmouseman(true)}
                    onMouseOut={() => setOnmouseman(false)}
                  >
                    <div className="flex p-5">
                      <div className="p-5">
                        <ul className="flex gap-10">
                          <li>
                            <a href=".">Carnival</a>
                          </li>
                          <li>
                            <a href=".">footwear</a>
                          </li> 
                          <li>
                            <a href=".">Sneakers</a>
                          </li>
                          <li>
                            <a href=".">Apparel</a>
                          </li>
                          <li>
                            <a href=".">Apparel</a>
                          </li>
                          
                          <li>
                            <a href=".">sales</a>
                          </li>
                        </ul>
                      </div>
                      
                     
                    </div>
                  </div>
                )}
              </div>
              <div>
              <li className=" cursor-pointer mr-5 text-sm"onMouseOver={() => setOnmousewomen(true)}
                    onMouseOut={() => setOnmousewomen(false)} >WOMEN</li>
              {onmousewomen === true && (
                  <div
                    className=" absolute  bg-white "
                    onMouseOver={() => setOnmousewomen(true)}
                    onMouseOut={() => setOnmousewomen(false)}
                  >
                    <div className="flex p-5">
                      <div className="p-5">
                        <ul className="flex gap-10">
                          <li>
                            <a href=".">View All</a>
                          </li>
                          <li>
                            <a href=".">carnival</a>
                          </li> 
                          <li>
                            <a href=".">Footwear</a>
                          </li>
                          <li>
                            <a href=".">Apparel</a>
                          </li>
                          <li>
                            <a href=".">Accessories</a>
                          </li>
                          
                          <li>
                            <a href=".">sales</a>
                          </li>
                        </ul>
                      </div>
                      
                     
                    </div>
                  </div>
                )}
                </div>
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
