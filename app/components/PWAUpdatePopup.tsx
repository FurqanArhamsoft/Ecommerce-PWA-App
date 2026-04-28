"use client";

import usePWAUpdate from "../hooks/usePWAUpdate";

export default function PWAUpdatePopup() {
  const { updateAvailable } = usePWAUpdate();

  if (!updateAvailable) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-black text-white p-4 rounded shadow-lg flex justify-between items-center">
      <span>🚀 New version available</span>
      
      <button
        onClick={() => window.location.reload()}
        className="bg-yellow-500 px-3 py-1 rounded text-black"
      >
        Update
      </button>
    </div>
  );
}