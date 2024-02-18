import React, { useEffect, useState } from "react";

function Main() {
  const [imageUrls] = useState([
    "https://www.carnivalbkk.com/media/amasty/shopby/option_images/slider/adidasoglogo.jpg",
    "https://www.carnivalbkk.com/media/amasty/shopby/option_images/slider/carnival.jpg",
    "https://www.carnivalbkk.com/media/amasty/shopby/option_images/slider/convetrse.jpg",
    "https://www.carnivalbkk.com/media/amasty/shopby/option_images/slider/5B0639F8-930F-4502-8553-14AACDE49B1D.png",
    "https://www.carnivalbkk.com/media/amasty/shopby/option_images/slider/parralogo.jpg",
    "https://www.carnivalbkk.com/media/amasty/shopby/option_images/slider/puma.jpg",
    "https://www.carnivalbkk.com/media/amasty/shopby/option_images/slider/ASICS-SPORTSTYLE.jpg",
    "https://www.carnivalbkk.com/media/amasty/shopby/option_images/slider/case.jpg",
    "https://www.carnivalbkk.com/media/amasty/shopby/option_images/slider/crep.jpg",
    "https://www.carnivalbkk.com/media/amasty/shopby/option_images/slider/Untitled-7.jpg",
    "https://www.carnivalbkk.com/media/amasty/shopby/option_images/slider/PLEASURES.jpg",
    "https://www.carnivalbkk.com/media/amasty/shopby/option_images/slider/SAUCONY.jpg",
  ]);
  const [alternateImageUrls] = useState([
    "https://www.carnivalbkk.com/media/amasty/shopby/option_images/slider/5B0639F8-930F-4502-8553-14AACDE49B1D.png",
    "https://www.carnivalbkk.com/media/amasty/shopby/option_images/slider/parralogo.jpg",
    "https://www.carnivalbkk.com/media/amasty/shopby/option_images/slider/puma.jpg",
    "https://www.carnivalbkk.com/media/amasty/shopby/option_images/slider/0521F1E9-B417-47F1-B54C-5B9A7D64B98B.png",
    "https://www.carnivalbkk.com/media/amasty/shopby/option_images/slider/THISISNEVERTHAT.jpg",
    "https://www.carnivalbkk.com/media/amasty/shopby/option_images/slider/9c676f828e7eee5b8ed6aed1f8c68c09.jpeg",
    "https://www.carnivalbkk.com/media/amasty/shopby/option_images/slider/Untitled-7.jpg",
    "https://www.carnivalbkk.com/media/amasty/shopby/option_images/slider/PLEASURES.jpg",
    "https://www.carnivalbkk.com/media/amasty/shopby/option_images/slider/SAUCONY.jpg",
    "https://www.carnivalbkk.com/media/amasty/shopby/option_images/slider/THE-NORTH-FACE.jpg",
    "https://www.carnivalbkk.com/media/amasty/shopby/option_images/slider/TOWER-BOX.jpg",
    "https://www.carnivalbkk.com/media/amasty/shopby/option_images/slider/y-3_1.jpg",
  ]);
  const [imagelogo] = useState([
    "https://www.carnivalbkk.com/media/amasty/bannerslider/umbro_x_carnival_story.jpg",
    "https://www.carnivalbkk.com/media/amasty/bannerslider/AbriefofPeterPan.jpg",
  ]);

  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);

  const toggleImage = () => {
    setCurrentImageIndex2((prevIndex) =>
      prevIndex === imagelogo.length - 1 ? 0 : prevIndex + 1
    );
  };

  function shop() {
    return (
      <div className="w-56">
        <div className="flex justify-center items-center">
          <img
            src="https://www.carnivalbkk.com/media/catalog/product/cache/41683db0d221f7226d430c7f4e830073/6/2/623869_04.jpg"
            alt=""
          ></img>
        </div>
        <div className=" ">
          <div className=" overflow-hidden text-ellipsis whitespace-nowrap text-center">
            <a href="..">PUMA x P.A.M. Contrast Tee PUMA Black (62407101)</a>
            <p>฿2,990.00</p>
          </div>
        </div>
      </div>
    );
  }
  const [data, setData] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [tab, setTab] = useState("imageUrls");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [data]);
  console.log(tab);
  useEffect(() => {
    const initialData = [
      "https://www.carnivalbkk.com/media/amasty/bannerslider/080201.jpg",
      "https://www.carnivalbkk.com/media/amasty/bannerslider/web_10702.jpg",
      "https://www.carnivalbkk.com/media/amasty/bannerslider/web_10167.jpg",
    ];
    setData(initialData);
  }, []);
  const toggleTab = () => {
    setTab((prevTab) =>
      prevTab === "imageUrls" ? "alternateImageUrls" : "imageUrls"
    );
  };
  return (
    <div className=" relative top-20 z-[0] pb-20">
      <div className="">
        <img className="" src={data[currentImageIndex]} alt="" />
      </div>
      <div className="mt-10 flex justify-center items-center">
        <div className=" text-center">
          <p>PRODUCT</p>
          <h1 className=" text-3xl">UPCOMING</h1>
        </div>
      </div>
      <div>
        <div className="  flex  justify-center items-center   ">
          <div className=" grid grid-cols-6 gap-6 max-lg:overflow-x-scroll max-lg:gap-64 max-lg:p-2">
            <div className="w-56 ">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.carnivalbkk.com/media/catalog/product/cache/41683db0d221f7226d430c7f4e830073/6/2/62407101-1.jpg"
                  alt=""
                ></img>
              </div>
              <div className=" ">
                <div className=" overflow-hidden text-ellipsis whitespace-nowrap text-center">
                  <a href=".">
                    PUMA x P.A.M. Contrast Tee PUMA Black (62407101)
                  </a>
                  <p>฿2,990.00</p>
                </div>
              </div>
            </div>
            <div className="w-56 ">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.carnivalbkk.com/media/catalog/product/cache/41683db0d221f7226d430c7f4e830073/6/2/62407190-1.jpg"
                  alt=""
                ></img>
              </div>
              <div className=" ">
                <div className=" overflow-hidden text-ellipsis whitespace-nowrap text-center">
                  <a href=".">
                    PUMA x P.A.M. Contrast Tee PUMA Putty (62407190)
                  </a>
                  <p>฿2,990.00</p>
                </div>
              </div>
            </div>
            <div className="w-56 ">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.carnivalbkk.com/media/catalog/product/cache/41683db0d221f7226d430c7f4e830073/6/2/62472401-01.jpg"
                  alt=""
                ></img>
              </div>
              <div className=" ">
                <div className=" overflow-hidden text-ellipsis whitespace-nowrap text-center">
                  <a href=".">PUMA X STAPLE Graphic Tee Black(62472401) </a>
                  <p>฿2,990.00</p>
                </div>
              </div>
            </div>
            <div className="w-56 ">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.carnivalbkk.com/media/catalog/product/cache/41683db0d221f7226d430c7f4e830073/6/2/62472465-1.jpg"
                  alt=""
                ></img>
              </div>
              <div className=" ">
                <div className=" overflow-hidden text-ellipsis whitespace-nowrap text-center">
                  <a href=".">
                    PUMA x P.A.M. Contrast Tee PUMA Black (62407101)
                  </a>
                  <p>฿2,990.00</p>
                </div>
              </div>
            </div>
            <div className="w-56 ">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.carnivalbkk.com/media/catalog/product/cache/41683db0d221f7226d430c7f4e830073/6/2/623869_01.jpg"
                  alt=""
                ></img>
              </div>
              <div className=" ">
                <div className=" overflow-hidden text-ellipsis whitespace-nowrap text-center">
                  <a href="..">
                    PUMA x P.A.M. Contrast Tee PUMA Black (62407101)
                  </a>
                  <p>฿2,990.00</p>
                </div>
              </div>
            </div>
            <div className="w-56 ">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.carnivalbkk.com/media/catalog/product/cache/41683db0d221f7226d430c7f4e830073/6/2/623869_04.jpg"
                  alt=""
                ></img>
              </div>
              <div className=" ">
                <div className=" overflow-hidden text-ellipsis whitespace-nowrap text-center">
                  <a href="..">
                    PUMA x P.A.M. Contrast Tee PUMA Black (62407101)
                  </a>
                  <p>฿2,990.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 ">
        <button className="p-5 border border-black hover:bg-black hover:text-white">
          สินค้าทั้งหมด
        </button>
      </div>
      <section className="mt-10 flex justify-center items-center">
        <div className=" text-center">
          <p>NEW COLLECTION</p>
          <h1 className=" text-3xl">NEW ARRIVAL</h1>
        </div>
      </section>
      <section>
        <div className=" flex  justify-center items-center max-lg:p-2  ">
          <div className=" grid grid-cols-6 gap-6 max-lg:overflow-auto max-lg:gap-64">
            <div className="w-56 ">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.carnivalbkk.com/media/catalog/product/cache/41683db0d221f7226d430c7f4e830073/1/6/16021_14_.jpg"
                  alt=""
                ></img>
              </div>
              <div className=" ">
                <div className=" overflow-hidden text-ellipsis whitespace-nowrap text-center">
                  <a href="..">
                    Topologie x Carnival Flat Sacoche Dry Black + 6.0mm strap
                    Gray Stone
                  </a>
                  <p>฿2,990.00</p>
                </div>
              </div>
            </div>
            <div className="w-56 ">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.carnivalbkk.com/media/catalog/product/cache/41683db0d221f7226d430c7f4e830073/6/2/623873_02.jpg"
                  alt=""
                ></img>
              </div>
              <div className=" ">
                <div className=" overflow-hidden text-ellipsis whitespace-nowrap text-center">
                  <a href="..">PUMA x NOAH Dungarees PUMA White(62387302)</a>
                  <p>฿2,990.00</p>
                </div>
              </div>
            </div>
            <div className="w-56 ">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.carnivalbkk.com/media/catalog/product/cache/41683db0d221f7226d430c7f4e830073/6/2/623875_01.jpg"
                  alt=""
                ></img>
              </div>
              <div className=" ">
                <div className=" overflow-hidden text-ellipsis whitespace-nowrap text-center">
                  <a href="..">PUMA x NOAH Coach Jacket PUMA Black(62387501)</a>
                  <p>฿2,990.00</p>
                </div>
              </div>
            </div>
            {shop()}
            {shop()}
            {shop()}
          </div>
        </div>
        <div className="flex items-center justify-center max-lg:hidden">
          <div className=" grid grid-cols-6 gap-6 ">
            {shop()}
            {shop()}
            {shop()}
            {shop()}
            {shop()}
            {shop()}
          </div>
        </div>
      </section>
      <section className=" mt-10">
        <div className=" flex justify-center items-center">
          <div className=" grid grid-cols-4 gap-10 max-lg:grid-cols-2 max-lg:p-5 max-lg:gap-2">
            <div className=" text-center">
              <img
                className=" w-96"
                src="https://www.carnivalbkk.com/media/amasty/bannerslider/377447789_6754633794591438_7516518544072122127_n_0.jpg"
                alt=""
              ></img>
              <h3>CARNIVAL® Fall/Winter 2023 “Roll or Die” Collection</h3>
            </div>
            <div className=" text-center">
              <img
                className=" w-96"
                src="https://www.carnivalbkk.com/media/amasty/bannerslider/sm-0167.jpg"
                alt=""
              ></img>
              <h3>CARNIVAL® Fall/Winter 2023 “Roll or Die” Collection</h3>
            </div>
            <div className=" text-center">
              <img
                className=" w-96"
                src="https://www.carnivalbkk.com/media/amasty/bannerslider/421687272_777404237760841_3498478393631641864_n_0.jpg"
                alt=""
              ></img>
              <h3>CARNIVAL® Fall/Winter 2023 “Roll or Die” Collection</h3>
            </div>
            <div className=" text-center">
              <img
                className=" w-96"
                src="https://www.carnivalbkk.com/media/amasty/bannerslider/422937183_777240897777175_7471871477748617195_n_0.jpg"
                alt=""
              ></img>
              <h3>CARNIVAL® Fall/Winter 2023 “Roll or Die” Collection</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5">
        <div className="  flex justify-center items-center">
          <p className=" w-5/6  h-1 bg-black"></p>
        </div>
      </section>
      <section className="p-5">
        <div class=" flex justify-center items-center">
          <div class="">
            <div class="relative">
              <div class="hover:opacity-50  cursor-pointer relative">
                <img
                  className=" w-[780px] p-2  "
                  src="https://www.carnivalbkk.com/media/amasty/bannerslider/8596.jpg"
                  alt=""
                ></img>
                <p class=" absolute bottom-20 left-10 max-lg:bottom-2 max-lg:text-sm  text-white bg-black bg-opacity-50 p-2">
                  Lost Management Cities
                </p>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="flex flex-col">
              <div class="relative">
                <div class="hover:opacity-50  cursor-pointer relative">
                  <img
                    class="w-[792px] p-2"
                    src="https://www.carnivalbkk.com/media/amasty/bannerslider/HQ697119.jpg"
                    alt=""
                  ></img>
                  <p class=" absolute bottom-20 left-10 max-lg:bottom-2 max-lg:text-sm text-white bg-black bg-opacity-50 p-2">
                    Town BOX
                  </p>
                </div>
              </div>
              <div class=" mr-10 flex order-3">
                <div class="relative">
                  <div class="hover:opacity-50  cursor-pointer relative">
                    <img
                      className=" p-2"
                      src="https://www.carnivalbkk.com/media/amasty/bannerslider/crepweb.jpg"
                      alt=""
                    ></img>
                    <p class=" absolute bottom-20 left-10 max-lg:bottom-2 max-lg:text-sm text-white bg-black bg-opacity-50 p-2">
                      CREP PROTECT
                    </p>
                  </div>
                </div>
                <div class="order-4">
                  <div class="relative">
                    <div class="hover:opacity-50  cursor-pointer relative">
                      <img
                        className=" p-2"
                        src="https://www.carnivalbkk.com/media/amasty/bannerslider/crepp.jpg"
                        alt=""
                      ></img>
                      <p class=" absolute bottom-20 left-10 max-lg:bottom-2 max-lg:text-sm text-white bg-black bg-opacity-50 p-2">
                        CREP PROTECT
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="">
            <div class="relative">
              <div class="hover:opacity-50  cursor-pointer relative">
                <img
                  className="w-[780px]  p-2"
                  src="https://www.carnivalbkk.com/media/amasty/bannerslider/m211.jpg"
                  alt=""
                ></img>
                <p class=" absolute bottom-20 left-10 max-lg:bottom-2 max-lg:text-sm text-white bg-black bg-opacity-50 p-2">
                  NIKE ACG MOUNTAIN FLY 2 LOW GTX (HF6245-003)
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="relative">
              <div class="hover:opacity-50  cursor-pointer relative">
                <img
                  className="w-[780px]  p-2"
                  src="https://www.carnivalbkk.com/media/amasty/bannerslider/vr2.jpg"
                  alt=""
                ></img>
                <p class=" absolute bottom-20 max-lg:bottom-2 left-10 max-lg:text-sm text-white bg-black bg-opacity-50 p-2">
                  NIKE V2K RUN (FZ3596-072)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="">
            <div class="relative">
              <div class="hover:opacity-50  cursor-pointer relative">
                <img
                  className="w-[1200px]  p-2"
                  src="https://www.carnivalbkk.com/media/amasty/bannerslider/13021.jpg"
                  alt=""
                ></img>
                <p class=" absolute bottom-20 max-lg:bottom-2 left-10 max-lg:text-sm text-white bg-black bg-opacity-50 p-2">
                  NEW BALANCE
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="relative">
              <div class="hover:opacity-50  cursor-pointer relative">
                <img
                  className="w-[348px]  p-2"
                  src="https://www.carnivalbkk.com/media/amasty/bannerslider/OMNI-9.jpg"
                  alt=""
                ></img>
                <p class=" absolute bottom-20 max-lg:left-0 left-10 max-lg:bottom-2 max-lg:text-[10px] max-lg:overflow-hidden max-lg:text-ellipsis  text-white bg-black bg-opacity-50 p-2">
                  SAUCONY PRO GRID OMNI9(S70740-4)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 flex justify-center items-center">
        <div className=" text-center">
          <p>SHOP BY</p>
          <h1 className=" text-3xl">BRANDS</h1>
        </div>
      </section>
      <section className="pt-10 pb-10">
        <div className="flex justify-center items-center">
          <div
            className="flex justify-center text-center items-center p-5 cursor-pointer"
            onClick={() => toggleTab()}
          >
            <i className="fa-solid fa-arrow-left text-4xl"></i>
          </div>

          <div className="grid grid-cols-6 gap-16 max-lg:grid-cols-3">
            {tab === "imageUrls"
              ? imageUrls.map((url, index) => (
                  <div key={index}>
                    <img className="w-[175px]" src={url} alt="" />
                  </div>
                ))
              : alternateImageUrls.map((web, index) => (
                  <div key={index}>
                    <img className="w-[175px]" src={web} alt="" />
                  </div>
                ))}
          </div>

          <div
            className="flex justify-center text-center items-center p-5 cursor-pointer"
            onClick={() => toggleTab()}
          >
            <i className="fa-solid fa-arrow-right text-4xl"></i>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center">
          <div class=" relative ">
          <div className="absolute top-1/2 transform -translate-y-1/2 max-lg:left-5 left-10 flex items-center cursor-pointer hover:opacity-50" onClick={()=>toggleImage()}>
              <i className="fa-solid fa-arrow-left text-4xl p-2 max-lg:text-xs bg-slate-300 rounded-full"></i>
            </div>
            </div>
            <div>
            <img
              className=" w-[1492px] p-2"
              src={imagelogo[currentImageIndex2]}
              alt=""
            ></img>
            </div>
            <div class=" relative">
            <div className="absolute top-1/2   transform -translate-y-1/2 max-lg:right-5 right-10 flex items-center cursor-pointer hover:opacity-50" onClick={()=>toggleImage()}>
            <i className="fa-solid fa-arrow-right text-4xl p-2 max-lg:text-xs bg-slate-300 rounded-full"></i>
            </div>
            </div>
            

           
         
        </div>
      </section>
      <section className="mt-10 flex justify-center items-center">
        <div className=" text-center">
    
          <h1 className=" text-3xl">BLOGS</h1>
        </div>
      </section>
      <section className="pt-5">
        <div className="flex justify-center items-center">
          <div className=" grid grid-cols-3 gap-16  max-lg:gap-4 max-md:block ">
            <div>
              <img src="https://www.carnivalbkk.com/media/amasty/blog/cache/P/e/400/270/Peterpan3_16012024.jpg" alt=""></img>
            </div>
                <div>
                  <img src="https://www.carnivalbkk.com/media/amasty/blog/cache/r/o/400/270/roundtwoii.jpg" alt=""></img>
                </div>
                <div>
                  <img src="https://www.carnivalbkk.com/media/amasty/blog/cache/u/u/400/270/uummbroo.jpg" alt=""></img>
                </div>
                <div>
                  <img src="https://www.carnivalbkk.com/media/amasty/blog/cache/f/i/400/270/final_4_1.jpg" alt=""></img>
                </div>
                <div>
                  <img src="https://www.carnivalbkk.com/media/amasty/blog/cache/i/m/400/270/imperial_lt2.jpg" alt=""></img>
                </div>
                <div>
                  <img src="https://www.carnivalbkk.com/media/amasty/blog/cache/4/8/400/270/480-315_0_1.jpg" alt=""></img>
                </div>
                <div>
                  <img src="https://www.carnivalbkk.com/media/amasty/blog/cache/A/r/400/270/Artboard_46_150x-100_0.jpg" alt=""></img>
                </div>
                <div>
                  <img src="https://www.carnivalbkk.com/media/amasty/blog/cache/A/r/400/270/Artboard_46_3_.jpg" alt=""></img>
                </div>
                <div>
                  <img src="https://www.carnivalbkk.com/media/amasty/blog/cache/A/r/400/270/Artboard_46_2_.jpg" alt=""></img>
                </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 ">
        <button className="p-5 border border-black hover:bg-black hover:text-white">
          ดูทั้งหมด
        </button>
      </div>
      </section>
      
    </div>
  );
}

export default Main;
