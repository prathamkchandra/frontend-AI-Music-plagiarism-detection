import React, { useEffect, useState } from "react";
import { ChartPieLabelList } from "./piechart";

export default function ResultCard({ data }) {
  const [pieData, setPieData] = useState<Record<string, string | number>[]>([]);

  useEffect(() => {
    if (!data?.final_score) return;
    setPieData([
      { value: data.final_score, name: "Similarity",   fill: "red"},

      { value: 100 - data.final_score, name: "Unique" , fill:"green"},
    ]);
  }, [data]);


  return (
    <div className="bg-gray-900/80 backdrop-blur-md mt-6 p-6 rounded-2xl shadow-xl max-w-3xl w-full mx-auto">
      <h2 className="text-2xl font-bold text-orange-400 mb-4">Results</h2>
{data.final_score !== null && (
        <div className="mt-6 flex flex-col items-center">
          <div
            className={`px-4 py-2 rounded-full font-bold text-white mb-4 ${
              data.final_score >= 85 ? "bg-red-500" : data.final_score <= 75 ? "bg-green-500" : "bg-yellow-500"
            }`}
          >
            Similarity Score: {data.final_score}%
          </div>

          <ChartPieLabelList  chartData={pieData}/>
        </div>
      )}

      <p className="mb-2">🎧 Uploaded Song: <b>{data.uploaded_song}</b></p>
      {data.uploaded_song_path && (
        <audio controls src={data.uploaded_song_path} className="w-full mb-4 rounded-lg" />
      )}

      {data.match_song && (
        <p className="mb-2">
          ✅ Matched Song: <b>{data.match_song}</b> <span className="text-gray-400">({data.match_label})</span>
        </p>
      )}
      {data.match_song_path && (
        <audio controls src={data.match_song_path} className="w-full mb-4 rounded-lg" />
      )}

          </div>
  );
}
