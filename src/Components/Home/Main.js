import React from 'react'
import './Main.css'
import project1 from '../../utils/images/project-1.jpg'
import project2 from '../../utils/images/project-2.jpg'

export default function Main() {
  return (
    <div data-aos="fade-up" data-aos-duration="1500" className='flex-col w-[100vw] bg-[#240046] py-10 justify-between faq-cont'>
      <div class="bg-[#ff9e03] relative flex w-[45vw] ml-[8vw] mb-[5vh] flex-row rounded-xl  bg-clip-border text-gray-700 shadow-md">
        <div class="relative m-0 bg-[#ff9e03] w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none  bg-clip-border text-gray-700">
          <img
            src={project1}
            alt="image"
            class="h-full w-full object-cover opacity-60"
          />
        </div>
        <div class="p-6">

          <h2 class="mb-2 block font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Accurate Predictions Based on Machine Learning
          </h2>
          <p class="mb-8 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            Our algorithm is trained by a vast database of medical symptoms and conditions, providing you with accurate predictions based on your symptoms.
          </p>

        </div>
      </div>

      <div class="bg-[#ff9e03] relative flex w-[45vw] mr-[8vw] ml-auto flex-row rounded-xl  bg-clip-border text-gray-700 shadow-md">
        <div class="relative m-0 bg-[#ff9e03] w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none  bg-clip-border text-gray-700">
          <img
            src={project2}
            alt="image"
            class="h-full w-full object-cover opacity-60"
          />
        </div>
        <div class="p-6">

          <h2 class="mb-2 block font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Quick Results Within Seconds
          </h2>
          <p class="mb-8 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            No need to wait. Simply enter your symptoms and let our algorithm work at lightning speed to deliver your predictions.
          </p>

        </div>
      </div>


    </div>

  )
}
