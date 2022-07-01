import Head from 'next/head';

import Navbar from './Navbar';

const Layout = ({ children }) => {
   return (
      <>
         <Head>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Treloo - Travel Agency</title>
         </Head>
         <Navbar />
         {children}
      </>
   );
}

export default Layout;