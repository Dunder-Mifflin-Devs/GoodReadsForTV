
import { useState } from 'react';

export default function DropDown() {
  const [open, setOpen] = useState(null);

  const menuItems = {
    Movies: [
      { name: 'Action', link: '/movies/action' },
      { name: 'Romantic', link: '/movies/romantic' },
    ],
    TVShows: [
      { name: 'Drama', link: '/tvshows/drama' },
      { name: 'Comedy', link: '/tvshows/comedy' },
    ]
  };

  return (
    <div>
      <div className="w-auto hidden lg:block">
        <ul className="flex items-center mr-8">
          {Object.keys(menuItems).map(category => (
            <li key={category} className="relative group">
              <span
                className="mr-14 text-2xl text-white hover:text-gray-200 tracking-tight cursor-pointer"
                onClick={() => setOpen(open === category ? null : category)}
              >
                {category}
              </span>
              {open === category && (
                <div className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
                  <ul>
                    {menuItems[category].map(item => (
                      <li key={item.name} className="px-4 py-2 hover:bg-gray-200">
                        <a href={item.link} className="text-black">{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
