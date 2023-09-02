import Feature from './Feature';

export default function Body() {
  return (
    <>
      <div className="flex flex-grow flex-row flex-wrap">
        <Feature poster="{{ img: '', alt: '' }}" title={'Movie 1'} />
        <Feature poster="{{ img: '', alt: '' }}" title={'Movie 2'} />
        <Feature poster="{{ img: '', alt: '' }}" title={'Movie 3'} />
        <Feature poster="{{ img: '', alt: '' }}" title={'Movie 4'} />
        <Feature poster="{{ img: '', alt: '' }}" title={'Movie 5'} />
        <Feature poster="{{ img: '', alt: '' }}" title={'Movie 6'} />
        <Feature poster="{{ img: '', alt: '' }}" title={'Movie 7'} />
        <Feature poster="{{ img: '', alt: '' }}" title={'Movie 8'} />
      </div>
    </>
  );
}
