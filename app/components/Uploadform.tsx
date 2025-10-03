import React, { useState } from "react";

export default function UploadForm({ onUpload }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = e.target.file.files[0];
    if (!file) return;

    setLoading(true);
    await onUpload(file);
    setLoading(false);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-gray-900/70 backdrop-blur-md p-6 rounded-2xl shadow-xl w-full max-w-md mx-auto transition hover:scale-[1.01]"
    >
      <h2 className="text-2xl font-bold text-orange-400 mb-4 text-center">Upload Your Song</h2>
      <input 
        type="file" 
        name="file" 
        accept=".mp3,.wav,.flac" 
        className="mb-4 block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600 cursor-pointer"
      />
      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-gradient-to-r from-orange-500 to-red-500 py-3 px-4 rounded-lg font-bold text-white tracking-wide shadow-lg hover:shadow-xl transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Analyzing..." : "Check Similarity"}
      </button>
    </form>
  );
}
