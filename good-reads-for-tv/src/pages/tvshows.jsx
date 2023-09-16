import Feature from "../components/common/Feature";

const TVshows = () => {
  return (
    <>
    <h1 className="text-9xl font-extrabold text-gray-100">TV Shows</h1>
        <div className="flex flex-grow flex-row flex-wrap">
          <Feature poster="{{ img: '', alt: '' }}" title={'TV Show 1'} />
          <Feature poster="{{ img: '', alt: '' }}" title={'TV Show 2'} />
          <Feature poster="{{ img: '', alt: '' }}" title={'TV Show 3'} />
          <Feature poster="{{ img: '', alt: '' }}" title={'TV Show 4'} />
          <Feature poster="{{ img: '', alt: '' }}" title={'TV Show 5'} />
          <Feature poster="{{ img: '', alt: '' }}" title={'TV Show 6'} />
          <Feature poster="{{ img: '', alt: '' }}" title={'TV Show 7'} />
          <Feature poster="{{ img: '', alt: '' }}" title={'TV Show 8'} />
        </div>
    </>
  )
}

export default TVshows