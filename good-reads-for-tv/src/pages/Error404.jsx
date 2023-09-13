import React from "react";

export default function Error404(){


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-100">404</h1>
        <h2 className="text-4xl font-semibold text-gray-100">Page Not Found</h2>
        <p className="mt-4 text-lg text-gray-100">
          We're sorry, the page you're looking for cannot be found.
        </p>
      </div>
    </div>
  );
}
