import React from 'react'
import { info } from "../../Data/data";
import Expandable from './Expandable';

export default function Faq() {
  return (
    <section  class="bg-[#240046]">
    <div class="container px-6 py-12 mx-auto ">
      <div class="flex justify-center">
        <h1 class="text-6xl font-semibold text-white">FAQ</h1>
      </div>
        

        <div class="mt-8 space-y-8 lg:mt-12 flex flex-col justify-center items-center">
        {info.map(({ title, details, id }, i) => (
        <Expandable key={id} title={title} details={details} id={id} />
        ))}
        </div>
    </div>
</section>
  )
}
