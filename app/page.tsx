'use client'
import { useState } from "react";
import UploadForm from "./components/Uploadform";
import ResultCard from "./components/Result";

export default function Home() {
   const [result, setResult] = useState(null);

  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };
  return (
   <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-tr from-pink-500 to-red-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Header */}
     

<div className="flex justify-around items-center w-full">      {/* Upload Form */}
      <div className="w-full flex flex-col items-center  z-10 grow">
         <header className="text-center mb-12 z-10 w-full">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg animate-bounce">
          🎵 Music Plagiarism Checker
        </h1>
        <p className="mt-4 text-gray-300 text-lg font-light tracking-wide">
          Upload your track/song and discover how similar it is to our dataset.
        </p>
      </header>
        <div className="backdrop-blur-lg max-w-lg bg-white/10 p-6 rounded-2xl shadow-lg border border-white/20 transition-transform hover:scale-105">
          <UploadForm onUpload={handleUpload} />
        </div>
      </div>

      {/* Result Section */}
      {result && (
        <div className="w-full max-w-3xl mt-10 z-10 animate-fadeIn">
          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-xl border border-white/20">
            <ResultCard data={result} />
          </div>
        </div>
      )}
      </div>

    </div>
  );
}
