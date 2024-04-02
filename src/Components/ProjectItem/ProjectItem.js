export default function ProjectItem({ project }) {
  return (
    <div
      className="bg-white shadow-md rounded-md px-4 py-5 mb-4 sm:px-8" // Mobile responsive additions
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <i className="fa-regular fa-folder text-2xl"></i>
          <div className="flex flex-col ">
            <h4 className="text-m font-bold">{project.title}</h4>
            <span className="text-xs text-gray-400">
              {project.stories.length} storyboard
            </span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <i className="fa-solid fa-ellipsis-vertical"></i>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 mb-6">
        {project.stories.map((story) => (
          <div key={story.id} className="flex flex-col">
            <img src={story.coverImage} alt={story.title} className="w-full" />
            <div className="flex flex-col border-2 border-t-0 border-gray-100 p-4">
              <span>{story.title}</span>
              <span className="text-sm text-gray-500">
                Updated {story.lastUpdated || "Unknown"}
              </span>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-center bg-[#f9faf5] cursor-pointer">
          <i className="fa-solid fa-circle-plus text-[#f9faf5] border-2 border-[#dadbd6] bg-[#dadbd6] rounded-full text-5xl "></i>
        </div>
      </div>
    </div>
  );
}
