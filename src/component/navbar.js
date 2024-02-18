import React from 'react'

function Navbar() {
  return (
    <nav className='  w-screen bg-slate-50 p-5 fixed z-[1]  '>
       <div className="flex justify-between items-center  ">
          <div className='flex justify-center items-center ml-36 max-lg:ml-0 '>
            <i class="fa-solid fa-bars hidden max-md:block mr-5 text-2xl"></i>
            <img className='w-36 h-22 mr-10' src='https://www.carnivalbkk.com/media/logo/stores/4/carnival-black-logo_2_.png' alt=''></img>
            <ul  className='flex justify-center items-center max-lg:hidden'>
            <li className=' mr-5 text-sm'>NEW ARRIVAL</li>
            <li className=' mr-5 text-sm'>CARNIVAL®</li>
            <li className=' mr-5 text-sm'>SHOP</li>
            <li className=' mr-5 text-sm'>FOOTWEAR</li>
            <li className=' mr-5 text-sm'>MEN</li>
            <li className=' mr-5 text-sm'>WOMEN</li>
            <li className=' mr-5 text-sm'>BLOG</li>
            <li className=' mr-5 text-sm'>SALE</li>          
            </ul>
            
          </div>
          <div className='mr-32 flex justify-center items-center max-lg:mr-0 max-md:hidden' >
            <i class="fa-solid fa-magnifying-glass m-2"></i>
            <i class="fa-regular fa-user m-2"></i>
            <i class="fa-solid fa-bag-shopping m-2"></i>
            <p>|</p>
            <p className='ml-2'>TH</p>

          </div>
          <div className='mr-32  justify-center items-center max-lg:mr-0 hidden max-md:block '>
          <i class="fa-solid fa-bag-shopping m-2 text-2xl"></i>
          </div>

        </div> 
    </nav>
  )
}

export default Navbar