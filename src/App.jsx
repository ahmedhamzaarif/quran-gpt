import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { ChatBot, FAQs, Features, Footer, Header, Hero } from './components';

const App = () => {

  // header stuck
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header isSticky={isSticky}/>
      <main id="main">
        <ChatBot/>
        <Hero/>
        <Features/>
        <FAQs/>
      </main>
      <Footer/>
    </div>
  )
}

export default App