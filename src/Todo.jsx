import React, { useState, useEffect } from "react";

function Todo() {
  const [data, setData] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes && storedNotes.length > 0) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentTime = new Date().toString();
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, { id: Date.now(), time: currentTime, text: data }];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    });
    setData("");
  };

  const handleDelete = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    const updatedNotes = notes.filter((note) => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const clearAll = () => {
    localStorage.removeItem("notes");
    setNotes([]);
  };

  return (
    <div className="py-[45px] ">
      <div className="bg-[#3b3a30] p-5">
      <div className="flex justify-center items-center  mt-10 mb-10 w-full">
        <h1 className="text-4xl px-3  text-zinc-400 italic  font-bold">Create your Notes</h1>
      </div>
      <>
        <div className="flex  md:h-full w-full md:w-70 items-center justify-center ">
          <div className="mt-5 h-fit w-96 rounded-lg border bg-[#9fa9a3] px-10 py-5 text-gray-700 ">
            <h1 className="text-lg font-bold">Add Your Notes Here</h1>
            <form onSubmit={handleSubmit}>
              <div className="relative mt-1">
                <input
                  onChange={handleChange}
                  type="text"
                  id="text1"
                  value={data}
                  className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pr-3 pb-2.5 pt-4 text-sm text-gray-950 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder="Enter your Note"
                />
              </div>

              <div className="flex mt-3 justify-end space-x-2">
                <button
                  className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white outline-none focus:ring"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="min-width: 100%; m-10">
          <div className="mx-auto mt-8 max-w-screen-lg px-2">
            <button
              onClick={clearAll}
              className="rounded-xl bg-white px-6 py-3 font-medium outline-none focus:ring"
            >
              Clear All
            </button>

            <div className="mt-6  overflow-hidden rounded-xl border shadow">
              <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
                <thead className="hidden border-b lg:table-header-group">
                  <tr className="">
                    <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Content</td>
                    <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Date</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody className="lg:border-gray-300">
                  {notes.map((note) => (
                    <tr key={note.id} className="">
                      <td className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                        {note.text}
                      </td>
                      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                        {note.time}
                      </td>
                      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                        <button
                          onClick={() => handleDelete(note.id)}
                          className="inline-flex items-center rounded-full bg-red-600 py-2 px-3 text-xs text-white"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
      </div>
    </div>
  );
}

export default Todo;
