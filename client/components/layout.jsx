import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <main className='w-100 flex bg-slate-900'>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout;