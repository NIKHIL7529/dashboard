import { useState } from "react";

export default function NewStory({ isOpen, onClose }) {
  const [storyboardName, setStoryboardName] = useState("");
  const [frameSize, setFrameSize] = useState("Landscape (16:9)");
  const [aiAssistant, setAiAssistant] = useState(false);

  const handleStoryboardNameChange = (e) => {
    setStoryboardName(e.target.value);
  };

  const handleFrameSizeChange = (e) => {
    setFrameSize(e.target.value);
  };

  const handleAiAssistantToggle = () => {
    setAiAssistant(!aiAssistant);
  };

  const handleCreateStoryboard = () => {
    console.log("Creating storyboard:", storyboardName, frameSize, aiAssistant);
    onClose();
  };

  const isDisabled = !storyboardName || !frameSize;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75 overflow-auto">
      <div className="bg-white rounded-lg w-full max-w-sm mx-auto relative">
        <div className="p-10">
          <div className="flex items-center justify-between pb-8">
            <h2 className="text-2xl font-bold">New Storyboard</h2>
            <button
              className="flex items-center justify-center text-gray-500 hover:text-gray-700 border-2 bg-gray-200 rounded-full w-6 h-6"
              onClick={onClose}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Storyboard Name
            </label>
            <input
              type="text"
              placeholder="e.g. Default Project Storyboard"
              value={storyboardName}
              onChange={handleStoryboardNameChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Frame Size
            </label>
            <select
              value={frameSize}
              onChange={handleFrameSizeChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            >
              <option value="Landscape (16:9)">Landscape (16:9)</option>
              <option value="Portrait (9:16)">Portrait (9:16)</option>
              <option value="Square (1:1)">Square (1:1)</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between border-t-2 p-10">
          <div className="flex items-center">
            <button onClick={handleAiAssistantToggle}>
              {aiAssistant ? (
                <i className="fa-solid fa-toggle-on"></i>
              ) : (
                <i className="fa-solid fa-toggle-off"></i>
              )}
            </button>
            <label className="ml-2 text-gray-700">AI Assistant</label>
          </div>
          <button
            onClick={handleCreateStoryboard}
            disabled={isDisabled}
            className={`bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ${
              isDisabled ? "opacity-20 cursor-not-allowed" : ""
            }`}
          >
            Create Storyboard
          </button>
        </div>
      </div>
    </div>
  );
}
