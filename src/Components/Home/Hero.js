import React from 'react'
import hospi from '../../utils/images/hospi.png'
import injection from '../../utils/images/injection.png'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div class="relative h-screen w-full flex flex-col md:flex-row items-center justify-center md:justify-start text-center sm:text-left bg-cover bg-center" style={{
      backgroundColor: '#240046'
    }}>

      <main class="md:px-8  z-10 sm:w-2/3 w-full">
        <div class="">
          <h2 class="md:text-7xl tracking-tight leading-10 font-extrabold text-3xl text-white sm:leading-none lg:text-8xl">
            Disease
            <span class="lg:text-6xl sm:text-4xl ml-2 text-[#ff9e03]">Predictor</span>
          </h2>

          <div class="typewriter">
            <h1 class="lg:text-lg ml-8 sm:ml-1  text-[#ffb43a] text-[0.68rem] md:text-[0.75rem]">Machine learning approach towards disease prediction</h1>
          </div>

          <div class="mt-5 sm:mt-8 sm:flex justify-start" className='strt-btn'>
            <div class="rounded-md shadow bg mt-6">
              <Link to={'./prediction'}>
                <button class="w-full flex items-center justify-center  px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-[#7930bd] hover:bg-[#843ac9] focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                  Get started
                </button>
              </Link>
            </div>

          </div>

          <div class="md:w-[40vw] sm:w-full mt-2 text-[#ff9e03] flex items-center justify-center ">
            Are you feeling under the weather and can’t put your finger on it? Our Disease Predictor will help you unravel the mystery. Simply input your symptoms and let the magic happen!
          </div>

        </div>
      </main>

      <div class="flex flex-col z-10">


        <div class="text-sm font-light flex items-center m-5">

          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <img src={injection} class="w-6 mr-2 h-6" />
            Treatment and Precaution
          </button>

        </div>

        <div class="text-sm font-light flex items-center m-5">

          <Link to={'/treatment'}>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <img src={hospi} class="w-6 mr-2 h-6" />
              Hospitals
            </button>
          </Link>

        </div>



      </div>

    </div>

  )
}
