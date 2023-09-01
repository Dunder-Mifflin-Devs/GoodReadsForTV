import featurePlaceholder from './../../assets/images/featurePlaceholder.jpg';

export default function Feature({poster, title}) {
  return (
    <div className="p-8 text-white flex flex-col w-1/6 ">
      <div>
        <img
          src={poster.img || featurePlaceholder}
          alt={poster.alt || title || 'Placeholder'}
          className="sharp object-cover"
        ></img>
      </div>
      <h2 className="font-lisu text-[--white] truncate text-ellipsis overflow-hidden">{title || 'Placeholder'}</h2>
    </div>
  );
}
