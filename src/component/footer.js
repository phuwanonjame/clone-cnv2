import React from "react";

function Footer() {
  return (
    <div className="relative top-10 z-[1]">
        <section>
        <div
        style={{
          backgroundImage:
            "url('https://www.carnivalbkk.com/static/version1707220334/frontend/Mgf/carnivalbkk/th_TH/images/sign-up-bg.png')",
                  }}
      >
        <div className="flex max-md:block  items-center">
          <div className="p-5 max-md:p2 text-white">
            <p>SIGN UP TO OUR NEWSLETTER</p>
            <p>FOR ALL OUR LATEST PROMOTIONS</p>
          </div>
          <div className="max-md:p-5">
            <input
              className=" border-none max-md:w-72  w-96 h-10 p-2 bg-slate-200"
              type="text"
            ></input>
            <button className=" bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-r hover:from-black p-2   text-white hover:bg-black">
              สมัครสมาชิก
            </button>
          </div>
        </div>
      </div>
        </section>
        <section className="pt-10">
            <div className="m-5">

       
            <div className=" grid grid-cols-4 gap-28 max-md:block">
                <div>
                    <p className=" text-lg">CUSTOMER SERVICE</p>
                    <p className=" text-xs">CARNIVAL MEMBERSHIP</p>
                    <p className=" text-xs">HOW TO ORDER</p>
                    <p className=" text-xs">POLICIES</p>
                    <p className=" text-xs">PRIVACY AND COOKIE POLICY</p>
                    <p className=" text-xs">FAQS</p>
                    <p className=" text-xs">HOT LINE : 02-1147423</p>

                </div>
                <div>
                    <p className=" text-lg">SHIPPING</p>
                    <p className=" text-xs">SHIPPING POLICY</p>
                    <p className=" text-xs">STATUS TRACKING</p>
                    <p className=" text-xs">STORE LOCATION</p>
                   

                </div>
                <div>
                    <p className=" text-lg">CONTACT US</p>
                    <p className=" text-xs">ABOUT US</p>
                    <p className=" text-xs">CONTACT PHONE: 02-1147423</p>
                    <p className=" text-xs">PHONE HOURS, MON-SUN: 10 AM - 7 PM ICT</p>
                    <p className=" text-xs">SUPPORT@CARNIVALBKK.COM</p>
                 

                </div>
                <div>
                <p className=" text-lg">FOLLOW US</p>
                <div className="text-3xl">
                <i class="fa-brands fa-facebook p-2"></i>
                <i class="fa-brands fa-instagram p-2"></i>
                <i class="fa-brands fa-youtube p-2"></i>
                </div>
                    

                </div>
            </div>
            </div>
        </section>
        <section class="p-5"><div class="  flex justify-center items-center"><p class=" w-5/6  h-1 bg-slate-100"></p></div></section>
        <section class="p-5"><div class="  flex justify-center items-center"><p className="text-xs">© CARNIVAL SUPPLY CO.,LTD.ALL RIGHTS RESERVED.</p></div></section>
      
    </div>
  );
}

export default Footer;
