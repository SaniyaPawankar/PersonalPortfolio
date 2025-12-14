import React, { useState } from 'react'
import axios from "axios"

const Form = () => {

    const [file, setFile] = useState(null)
    const [uploadedData, setUploadedData] = useState(null)

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file to upload")
            return
        }

        const formData = new FormData()
        formData.append("File1", file);

        try {
            const res = await axios.post("http://localhost:5020/api/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            })

            setUploadedData(res.data.file)
            alert("File uploaded successfully!")
        } catch (err) {
            console.log(err);
            alert("Upload failed!")
        }
    }

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-xl w-[350px] p-6 border border-gray-300">

                <h2 className="text-xl font-semibold text-center mb-4 text-gray-700">
                    Upload File
                </h2>

                <form className="flex flex-col gap-4">
                    <label htmlFor="file" className="text-gray-600 font-medium">
                        Choose file
                    </label>

                    <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleFileChange}
                        className="border border-gray-400 rounded-lg p-2 cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
                    />
                </form>

                <button
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg px-4 py-2 mt-5 transition-all duration-200"
                    onClick={handleUpload}
                >
                    Upload
                </button>
            </div>
        </div>

    )
}

export default Form
