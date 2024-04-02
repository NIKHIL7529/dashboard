import { useState } from "react";
import NewStory from "../NewStory/NewStory";
import ProjectList from "../ProjectList/ProjectList";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex-grow flex flex-col font-serif">
      <div className=" py-4 pl-2 flex items-center justify-between">
        {isSearchOpen ? (
          <div className="flex items-center gap-4 w-full pr-2">
            <input
              type="text"
              placeholder="Search my storyboards"
              className="px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent w-full"
            />
            <button
              className="flex items-center justify-center text-gray-500 hover:text-gray-700 border-2 bg-gray-200 rounded-full w-6 h-6"
              onClick={toggleSearch}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-5">
              <i class="fa-solid fa-bold h-10 w-10 flex items-center justify-center rounded-full bg-[#121212] text-white"></i>
              <h2 className="text-lg font-bold mr-4">Project Dashboard</h2>
            </div>
            <div className="flex items-center gap-2 mr-0">
              <input
                type="text"
                placeholder="Search my storyboards"
                className=" hidden md:block px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" // Hide on small screens
              />
              <i
                className="fa-solid fa-magnifying-glass h-8 w-8 cursor-pointer flex items-center justify-center rounded-full bg-[#f5f6f0] text-gray-400 md:hidden"
                onClick={toggleSearch}
              ></i>
              <button className="bg-[#eaf5fb] border-[#cae4f4] border-2 hover:bg-[#eaf5fb]-700 font-bold py-1 px-1 rounded mr-0 sm:mr-2 sm:px-4 ">
                Quick Start
              </button>
              <i class="fa-solid fa-n h-8 w-8 flex items-center justify-center rounded-full border-2 border-black bg-gradient-to-br from-[#f6dbd7] via-[#f5cca4] to-[#f5c174]"></i>
              <i class="fa-solid fa-bolt h-8 w-8 flex items-center justify-center rounded-l-full bg-black mr-0 text-white"></i>
            </div>
          </>
        )}
      </div>
      <div className="flex-grow bg-[#f5f6f0] p-12">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <i class="fa-solid fa-n h-8 w-8 flex items-center justify-center rounded-full border-2 border-black bg-gradient-to-br from-[#f6dbd7] via-[#f5cca4] to-[#f5c174]"></i>
            <h3 className="text-lg font-bold">Nikhil Gupta Team</h3>
          </div>
          <button
            className="bg-[#121212] text-white font-bold py-1 px-4   rounded"
            onClick={openModal}
          >
            New Project
          </button>
        </div>
        <ProjectList />
        <NewStory isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
}
