import featurePlaceholder from './../../assets/images/featurePlaceholder.jpg';
import {NavLink} from 'react-router-dom';

export default function Feature({poster, title}) {
  return (
    <div className="text-white flex flex-col">
      <div>
        <img
          src={poster.img || featurePlaceholder}
          alt={poster.alt || title || 'Placeholder'}
          className="sharp object-cover"
        ></img>
      </div>
      {title && (
        <h2 className="font-lisu truncate text-ellipsis overflow-hidden hover:text-[--orange] hover:underline pt-4">
          {title}
        </h2>
      )}
    </div>
  );
}
