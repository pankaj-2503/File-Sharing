import "./App.css";
import { useRef, useState, useEffect } from "react";
import { IoCloudUploadSharp } from "react-icons/io5";
import { uploadFile } from "./services/api";

function App() {
  const [file, setFile] = useState("");
  const [result,setResult]=useState("");

  // on clicking button open folder logic
  const fileInputRef = useRef();

  const openfile = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    const getFiles = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        let response = await uploadFile(data);
        setResult(response.path);
      }
    };
    getFiles();
  }, [file]);
  console.log(file);
  
  return (
    <>
      <div>
        <div className="flex justify-center ">
          <div className="bg-gray-700 w-[80%] h-[60vh] rounded-xl flex justify-center flex-col  items-center my-12 md:w-[50%] md:h-[70vh]">
            <h2 className="text-white text-3xl my-6 text-center font-semibold">
              Share files
            </h2>
            <IoCloudUploadSharp className="w-9 h-9 text-white mx-auto my-6 hover:text-zinc-400" />
            <button
              className="text-white mx-auto  bg-indigo-600 rounded-xl p-3 text-xs font-mono my-4 hover:bg-indigo-700 duration-200 ease-in-out"
              onClick={openfile}
            >
              Upload file to generate link
            </button>
            {/* input is used to open file using button on click  */}
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <a href={result} target="_blank">{result}</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
