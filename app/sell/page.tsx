"use client"
import { useState } from "react"
import Image from "next/image"
import Dropdown from "../components/Dropdown"
import { MdUpload } from 'react-icons/md';

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

  const [coverImage, setCoverImage] = useState<File|null>(null);
  // const [dropDown, setdropDown] = useState(false)

  const courseOptions = [
    "Engineering",
    "Arts",
    "Science",
    "Commerce",
    "Medicine",
    "Law",
  ];

  const subjectOptions = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submmitted",)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setCoverImage(file)
      SetFormData({ ...formData, imageUrl: file.name })
    }
  };
   
  const previewUrl = coverImage ? URL.createObjectURL(coverImage) : '';
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    SetFormData({ ...formData, [name]: value });
  };


  const handledescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    SetFormData({ ...formData, [name]: value });
  };

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
                  name="author"
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
                  <span>Price of the Book</span>
                </label>
                <input
                  type="number"
                  name="description"
                  value={formData.description}
                  className="flex flex-col border border-gray-300 rounded-md mt-4 p-3 w-[30vw] bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#366977] focus:border-[#366977] "
                  onChange={handleChange}
                  placeholder="$599 "
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

            <div className="category ml-8 p-4 font-bold text-2xl">Book Category</div>

            <div className="mb-4">
              <div className="ml-8">Select Your Course or Stream</div>
              <Dropdown options={courseOptions} label="Select Your course" />

            </div>
            <div className="course flex justify-between">

              <div className="mb-4">
                <div className="ml-8">Select Your Course or Stream</div>
                <Dropdown options={courseOptions} label="Select Your course" />

              </div>

              <div>
                <div className="ml-8">Select Subject</div>
                <div className="mb-4 mr-8">
                  <Dropdown options={subjectOptions} label="Select Your subject" />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="ml-8">Select Your Course or Stream</div>
              <Dropdown options={courseOptions} label="Select Your course" />
            </div>

            <div className="form-group flex justify-center">
              <div className="flex flex-col mb-8 justify-center">
                <label htmlFor="description" className="mb-4">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handledescriptionChange}
                  rows={3}
                  cols={110}
                  placeholder="Enter the description of the book"
                  className="flex flex-col border border-gray-300 rounded-md p-3 w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#366977] focus:border-[#366977]"
                />
              </div>
            </div>

            <div
              className="flex flex-col mb-4 items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files[0];
                if (file) {
                  setCoverImage(file);
                }
              }}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <MdUpload className="w-8 h-8 mb-4 text-gray-500" />

                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  PNG, JPG or JPEG (MAX. 2MB)
                </p>
              </div>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
            {/* Preview the uploaded image */}
            {coverImage && (
              <Image src={previewUrl} alt="Cover Preview" className="w-64 h-auto rounded-lg mt-4" />
            )}

            {/* <div className="flex  w-[70vw]">
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
            </div> */}
          </div>
        </form>
      </div>
    </>
  )
}




export default Sell