import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  // {// add new nodes here}
  const [notes, setNotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can add logic to save the note

    const copyNotes = [...notes];
    copyNotes.push({ title, details });

    setNotes(copyNotes);

    console.log(copyNotes);
    setTitle("");
    setDetails("");
  };

  const handleDelete = (index) => {
    const copyNotes = [...notes];
    copyNotes.splice(index, 1);
    setNotes(copyNotes);
  };

  return (
    <>
      <div className="flex min-h-screen md:flex-row flex-col justify-between items-center text-center bg-gray-900 pb-10">
        <div className="w-1/3 text-white p-8">
          <div className=" min-w-86 mx-auto mt-10 border-[1.2px] border-gray-300 p-8 rounded-lg">
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex flex-col gap-4"
            >
              <input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="outline-0 border-gray-300 border-[1.2px] rounded-md p-2 "
                type="text"
                placeholder="Enter your title"
                value={title}
              />
              <textarea
                onChange={(e) => {
                  setDetails(e.target.value);
                }}
                className="min-h-[120px] outline-0 border-gray-300 border-[1.2px] rounded-md p-2 "
                type="text"
                placeholder="Write details here..."
                value={details}
              />
              <button className="self-center font-bold rounded-lg text-lg  w-36 h-12 bg-[#374151] text-[#ffffff] justify-center cursor-pointer hover:bg-gray-800 duration-300">
                Submit!
              </button>
            </form>
          </div>
        </div>
        <div className="w-3/3  p-8 overflow-hidden ">
          <h1 className="text-2xl font-bold text-white">Recent Notes</h1>
          <div className="border-b-[1.2px] border-gray-300 p-1"></div>
          {/* {box parents div} */}
          <div className="flex flex-row md:flex-row flex-wrap px-10 overflow-hidden overflow-x-hidden py-8">
            {notes.map((note, index) => (
              <div
                key={index}
                className="box relative w-[220px] h-[300px] bg-gray-600 text-white  m-4 p-4 rounded-lg border-[1.2px] border-gray-300 overflow-hidden flex-stroke-0 scroll-x-hidden "
              >
                <h4 className="text-md capitalize font-bold">{note.title}</h4>
                <div className="border-b-[1.2px] border-gray-500 p-1"></div>
                <p className="inline-block text-wrap text-gray-300 text-sm font-semibold capitalize pt-2 text-start ">
                  {note.details}
                </p>

                <button
                  onClick={() => {
                    handleDelete(index);
                  }}
                  className="absolute bottom-3 left-1/2 transform -translate-x-1/2 border-[1.2px] border-gray-700 bg-gray-800 px-3 py-1 rounded text-sm text-gray-400 hover:bg-gray-400 hover:text-gray-800 duration-300 cursor-pointer"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
