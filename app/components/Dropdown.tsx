import { useState } from "react";

const Dropdown = ({ options, label }: { options: string[], label: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDropDown = () => setIsOpen(!isOpen)
    return (
        <div className="relative">
            <button id="dropdownDefaultButton" type="button" className="bg-[#366977] w-[30vw] justify-between ml-8 mb-1 inline-flex items-center focus:ring-4 focus:ring-[#D9D9D9] rounded-md hover:bg-[#153943] focus:outline-none p-3 text-[#D9D9D9] " onClick={handleDropDown}>
                {label}
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>

            </button>
            {isOpen && (
                <div id="dropdown" className="divide-y divide-gray-100 rounded-lg bg-[#D9D9D9] ml-8 w-[15vw] h-auto">
                    <ul className="dropdown-menu absolute w-[12vw] z-10 bg-[#555252]">
                        {options.map((option, index) => (
                            <li key={index} className="rounded-md  p-3 hover:bg-[#B2AEAE] ">
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;

{/* <button id="dropdownDefaultButton" type="button" onClick={handleDropDown} className="bg-[#366977] ml-8 mb-1 inline-flex items-center focus:ring-4 focus:ring-[#D9D9D9] rounded-md hover:bg-[#153943] focus:outline-none p-3 text-[#D9D9D9] ">
                  Select Stream or course
                  <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>

                </button>
                {dropDown && (
                  <div id="dropdown" className="divide-y divide-gray-100 rounded-lg bg-[#B2AEAE] ml-8 w-[15vw] h-auto" >
                    <ul>
                      <li className="rounded-md  p-3 hover:bg-[#555252] ">Enginering</li>
                      <li className="rounded-md  p-3 hover:bg-[#555252] ">Enginering</li>
                      <li className="rounded-md  p-3 hover:bg-[#555252] ">Enginering</li>
                      <li className="rounded-md  p-3 hover:bg-[#555252] ">Enginering</li>
                      <li className="rounded-md  p-3 hover:bg-[#555252] ">Enginering</li>
                      <li className="rounded-md  p-3 hover:bg-[#555252] ">Enginering</li>
                    </ul>
                  </div>
                )
                } */}
