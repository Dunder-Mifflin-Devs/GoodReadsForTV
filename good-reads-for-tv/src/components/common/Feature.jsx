import featurePlaceholder from './../../assets/images/featurePlaceholder.jpg';

export default function Feature({poster, title}) {
  return (
    <div className="p-8 text-white flex flex-col">
      <div>
        <img src={poster.img || featurePlaceholder} alt={poster.alt || 'Placeholder'} className="h-96 sharp"></img>
      </div>
      <h2 className="font-lisu text-[--white]">{title || 'Placeholder'}</h2>
    </div>
  );
}
