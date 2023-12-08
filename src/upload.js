import { useState } from "react";

const UploadPdfButton = ({ user }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      if (!file) {
        console.error("Please select a file to upload.");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
        credentials: "include", // Include credentials (cookies) in the request
      });

      if (response.ok) {
        const result = await response.json();
        console.log("File uploaded successfully:", result);
        // Handle success as needed
      } else {
        console.error("File upload failed.");
        // Handle failure as needed
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      {" "}
      <p>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload PDF</button>
      </p>
    </div>
  );
};

export default UploadPdfButton;
