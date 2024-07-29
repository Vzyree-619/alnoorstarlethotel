// 'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { useLoading } from './contexts/LoadingContext'; // Adjusted import path
// import Image from 'next/image';
// import '../styles/globals.css';

// const Loading = () => {
//   const { loading } = useLoading();

//   if (!loading) return null;

//   return (
//     <div className='loading'>
//       <Image
//         className='loaderImg'
//         src={'/loading.png'}
//         width={400}
//         height={400}
//         alt='Loading'
//       />
//       <div className='loading-container'>
//         <div className='box'></div>
//         <div className='box'></div>
//         <div className='box'></div>
//       </div>
//     </div>
//   );
// };

// const ClientLayout = ({ children }: { children: React.ReactNode }) => {
//   const router = useRouter();
//   const { setLoading } = useLoading();

//   useEffect(() => {
//     const handleRouteChangeStart = () => {
//       setLoading(true);
//     };
//     const handleRouteChangeComplete = () => {
//       setLoading(false);
//     };

//     router.events.on('routeChangeStart', handleRouteChangeStart);
//     router.events.on('routeChangeComplete', handleRouteChangeComplete);
//     router.events.on('routeChangeError', handleRouteChangeComplete);

//     return () => {
//       router.events.off('routeChangeStart', handleRouteChangeStart);
//       router.events.off('routeChangeComplete', handleRouteChangeComplete);
//       router.events.off('routeChangeError', handleRouteChangeComplete);
//     };
//   }, [router, setLoading]);

//   return (
//     <>
//       <Loading />
//       {children}
//     </>
//   );
// };

// export default ClientLayout;
