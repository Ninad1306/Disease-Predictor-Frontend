import { useState } from "react";

export default function Expandable(props) {
  const [expanded, setExpanded] = useState(false);
  console.log(props)
  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (

    <div key={props.id} class="p-4 w-full sm:p-8 bg-[#ff9e03] mr-5 sm:w-[50vw] rounded-lg ">
    <button class="flex items-center justify-between w-full" onClick={() => handleClick()}>
        <h1 class="font-semibold text-[#240046] text-xl">{props.title}</h1>
        {
          expanded ?
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#240046">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
            </svg>
        :
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#240046">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        }

    </button>

    <p  className="mt-6 text-lg text-white" style={{ display: expanded ? "block" : "none" }}>
    {props.details}
    </p>
    </div>

  );
}