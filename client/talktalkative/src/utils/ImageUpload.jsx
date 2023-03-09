import { useState, useEffect } from "react";

export const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  return (
    <>
      <label
        for="img"
        className="w-24 h-24 bg-gray-50 rounded-full border overflow-hidden border-black flex justify-center transition ease-in-out delay-50 hover:bg-gray-200 active:bg-gray-400 cursor-pointer"
      >
        <img
          src={selectedFile ? preview : "image/plus-icon.svg"}
          className={selectedFile ? "max-w-max" : "w-6"}
        ></img>
      </label>
      <input
        type="file"
        id="img"
        name="img"
        accept="image/*"
        className="hidden"
        onChange={onSelectFile}
      />
    </>
  );
};
