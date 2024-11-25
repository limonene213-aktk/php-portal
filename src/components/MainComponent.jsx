"use client";

import React from "react";
import { useState } from "react";

function MainComponent() {
  const [activeGrade, setActiveGrade] = useState(1);

  const resources = {
    // 略: resourcesオブジェクト
  };

  const icons = {
    youtube: "fa-brands fa-youtube",
    drive: "fa-brands fa-google-drive",
    github: "fa-brands fa-github",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#16213e] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-12 animated-title">
          PHP学習ポータル
        </h1>
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveGrade(1)}
            className={`px-6 py-3 rounded-lg font-roboto ${
              activeGrade === 1
                ? "bg-[#4a80f0] text-white"
                : "bg-[#2a2a4a] text-gray-300"
            }`}
          >
            1年生
          </button>
          <button
            onClick={() => setActiveGrade(2)}
            className={`px-6 py-3 rounded-lg font-roboto ${
              activeGrade === 2
                ? "bg-[#4a80f0] text-white"
                : "bg-[#2a2a4a] text-gray-300"
            }`}
          >
            2年生
          </button>
        </div>

        {Object.entries(resources[activeGrade]).map(([type, category]) => (
          <div key={type} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <i className={`${icons[type]} text-2xl text-[#4a80f0]`}></i>
              <h2 className="text-2xl font-roboto font-bold">
                {category.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2a2a4a] p-4 rounded-lg hover:bg-[#3a3a5a] transition-all duration-300"
                >
                  <h3 className="font-roboto text-lg">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">クリックして開く</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Montserrat:900');
        
        .animated-title {
          font-family: 'Montserrat', sans-serif;
          background: url('https://thumbs.dreamstime.com/b/tropical-flower-pattern-seamless-flowers-blossom-flowers-nature-background-vector-illustration-61142748.jpg');
          background-size: auto 200%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 8s linear infinite;
        }

        @keyframes shine {
          from {
            background-position: center 0;
          }
          to {
            background-position: center 200%;
          }
        }
      `}</style>
    </div>
  );
}

export default MainComponent;
