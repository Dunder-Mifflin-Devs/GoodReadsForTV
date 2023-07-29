import React from "react";

export default function Header() {

  return (
    <div className="bg-gray-700 border-b border-gray-600 border-opacity-30">
        <div className="container p-2 px-4 mx-auto">
            <div className="flex justify-between items-center  py-5">
                <div className="w-auto">
                    <div className="flex p-2 flex-wrap items-center">LOGO</div>                    
                </div>
                <div className="w-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="w-auto hidden lg:block">
                            <ul className="flex items-center mr-8">
                                <li className="mr-14 font-medium text-white hover:text-gray-200 tracking-tight">Movies</li>
                                <li className="mr-14 font-medium text-white hover:text-gray-200 tracking-tight">TV Shows</li>
                            </ul>
                        </div>
                        <div className="w-auto hidden lg:block">
                            button
                        </div>
                    </div>
                </div>
            </div>         
        </div>

    </div>
  );
}
