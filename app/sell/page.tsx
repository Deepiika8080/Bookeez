"use client"
import { useState } from "react"
import Image from "next/image"


const Sell = () => {
  const [formData, SetFormData] = useState({
    title: "",
    price: "",
    description: "",
    finalPrice: "",
    author: "",
    isbn: "",
    condition: "",
    puiblisher: "",
    year: "",
    imageUrl: ""

  })

  const [imagePreview, setImagePreview] = useState<string>("/assests/preview-img.jpg");
  const [dropDown, setdropDown] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submmitted",)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setImagePreview(URL.createObjectURL(file))
      SetFormData({ ...formData, imageUrl: file.name })
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    SetFormData({ ...formData, [name]: value });
  };

  const handleDropDown = () => {
    setdropDown(!dropDown)
  }

  return (
    <>
      <div className="flex w-[70vw] bg-[#D9D9D9] m-auto">
        <form onSubmit={handleSubmit}>
          <div className="formInputs flex flex-col">
            <div className="flex justify-between w-[70vw]">
              <div className="title m-4 pl-4">
                <label htmlFor="name" className="block">
                  <span>Title of the Book</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  className="flex flex-col border border-gray-300 rounded-md mt-4 p-3 w-[30vw] bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#366977] focus:border-[#366977] "
                  onChange={handleChange}
                  placeholder="Hornics Art of Books"
                  required
                  id="name"
                />
              </div>
              <div className="author m-4">
                <label htmlFor="author" className="block">
                  <span>Author</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.author}
                  className="flex flex-col border border-gray-300 rounded-md mt-4 p-3 w-[30vw] bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#366977] focus:border-[#366977] "
                  onChange={handleChange}
                  placeholder="william shakespear"
                  required
                  id="author"
                />
              </div>

            </div>

            <div className="flex justify-between w-[70vw]">
              <div className="description m-4 pl-4">
                <label htmlFor="description" className="block">
                  <span>Desccription of the Book</span>
                </label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  className="flex flex-col border border-gray-300 rounded-md mt-4 p-3 w-[30vw] bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#366977] focus:border-[#366977] "
                  onChange={handleChange}
                  placeholder="A book which teaches How to talk at different places "
                  required
                  id="description"
                />
              </div>
              <div className="ISBN m-4">
                <label htmlFor="isbnCode" className="block">
                  <span>ISBN Code</span>
                </label>
                <input
                  type="text"
                  name="isbn"
                  value={formData.isbn}
                  className="flex flex-col border border-gray-300 rounded-md mt-4 p-3 w-[30vw] bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#366977] focus:border-[#366977] "
                  onChange={handleChange}
                  placeholder="DEYU678IOJT667"
                  required
                  id="isbnCode"
                />
              </div>

            </div>

            <div className="flex  w-[70vw]">
              <div className="file m-4 pl-4 flex justify-between w-[70vw]">
                <div className="flex flex-col">
                  <label htmlFor="file" className="block">
                    <span>CoverPage of the Book</span>
                  </label>
                  <input
                    type="file"
                    name="imageUrl"
                    accept="/image/*"
                    className="flex flex-col border border-gray-300 rounded-md mt-4 p-3 w-[30vw] bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#366977] focus:border-[#366977] "
                    onChange={handleFileChange}
                    placeholder="Hornics Art of Books"
                    required
                    id="file"
                  />
                </div>
                <div>

                  {
                    imagePreview &&
                    <Image src={imagePreview} alt="" className=" mr-52  rounded-[0.22rem]" width={100} height={150} />
                  }
                </div>
              </div>
            </div>
            <div className="category ml-8 p-4 font-bold text-2xl">Book Category</div>
            <div className="ml-8">Select Your Course or Stream</div>
            <div className="course flex ">

              <div className="mb-4">
                <button id="dropdownDefaultButton" type="button" onClick={handleDropDown} className="bg-[#366977] ml-8 mb-1 inline-flex items-center focus:ring-4 focus:ring-[#D9D9D9] rounded-md hover:bg-[#153943] focus:outline-none p-3 text-[#D9D9D9] ">
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
                }
              </div>

              <div>
                <div className="aPrice flex ">
                  <label htmlFor="description" className="block mr-2 ml-16 mt-3">
                    <span>Actual Price</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    value={formData.price}
                    className="flex flex-col border border-gray-300 rounded-md  p-3 w-[10vw] bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#366977] focus:border-[#366977] "
                    onChange={handleChange}
                    placeholder="$899"
                    required
                    id="description"
                  />
                </div>
              </div>


              <div>
                <div className="aPrice flex ">
                  <label htmlFor="finalPrice" className="block mr-2 ml-16 mt-3">
                    <span>Final Price</span>
                  </label>
                  <input
                    type="text"
                    name="finalPrice"
                    value={formData.finalPrice}
                    className="flex flex-col border border-gray-300 rounded-md  p-3 w-[10vw] bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#366977] focus:border-[#366977] "
                    onChange={handleChange}
                    placeholder="$599"
                    required
                    id="finalPrice"
                  />
                </div>
              </div>
            </div>

            <div className="ml-8">Select Subject</div>
            <div className="mb-4">
              <button id="dropdownDefaultButton" type="button" onClick={handleDropDown} className="bg-[#366977] ml-8 mb-1 inline-flex items-center focus:ring-4 focus:ring-[#D9D9D9] rounded-md hover:bg-[#153943] focus:outline-none p-3 text-[#D9D9D9] ">
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
              }
            </div>
          </div>
        </form>
      </div>
    </>
  )
}



export default Sell