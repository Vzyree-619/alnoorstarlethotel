import Image from 'next/image';

export default function Loading() {
  return (
    <div className='loading'>
      <Image
        className='loaderImg'
        src={'/loading.png'}
        width={400}
        height={400}
        alt='Loading'
      />
      <div className='loading-container'>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
      </div>
    </div>
  );
}
