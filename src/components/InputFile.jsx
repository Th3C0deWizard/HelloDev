import Icon from "./Icon";
import { useState } from "react";

function InputFile(props) {
  const [placeholder, setPlaceholder] = useState(props.placeholder);
  const setName = (e) => {
    console.log(e.target.files[0].name);
    setPlaceholder(e.target.files[0].name);
  };

  return (
    <label
      for="dropzone-file"
      className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer hover:bg-bray-600 bg-gray-700 border-gray-600 hover:border-amber-600"
    >
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <Icon
          path="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          w={24}
          h={24}
          color="amber-400"
        />
        <p className="px-3 pt-2 text-sm text-amber-500">
          <span className="font-semibold ">Click to upload</span> or drag and
          drop
        </p>
        <p className="text-xs text-amber-500">{placeholder}</p>
      </div>
      <input id={props.id} type="file" className="hidden" onChange={setName} />
    </label>
  );
}

export default InputFile;
