import React from 'react'

const Hero = () => {
  return (
    <section id="hero" className="pb-5 d-flex align-items-center">
        <div className="container">
        <div className="row gx-md-5 flex-column-reverse flex-md-row">
            <div className="col-md-7 align-items-center d-flex">
            <div className="hero-inner">
                <h5 className="fw-bold">Quran GPT</h5>
                <h2 className="sectio-title display-6 fw-bold">Unlock Quranic Knowledge with AI</h2>
                <p className="lead">Tired of sifting through endless verses and interpretations? Quran GPT makes understanding the Quran easier than ever. With a simple conversation, you can unravel the profound wisdom of the Quran and get answers to your questions.</p>
            </div>
            </div>
            <div className="col-md-5 align-items-center d-flex">
            <img id="hero-img" src="hero.svg" alt="" className="img-fluid mb-5 mb-md-0"/>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Hero