import React from 'react'
import FeatureCol from './FeatureCol'

const Features = () => {
  return (
    
    <section id="features" className="py-5 text-white">
    <div className="container my-5">
        <h2 className="section-title text-center display-5 mb-5">What makes a password strong?</h2>
        <div className="row">
            <FeatureCol 
            icon="bx bx-key" 
            title="Easy to use"
            desc="Quran GPT is designed to be user-friendly, making it simple for you to explore the Quran. Our chatbot interface is intuitive, and you can ask questions in plain language."
            />

            <FeatureCol 
            icon="bx bx-check-shield" 
            title="Secure"
            desc="We prioritize your privacy and data security. Rest assured, your interactions with Quran GPT are not stored or saved. Your Quranic queries are confidential."
            />

            <FeatureCol 
            icon="bx bx-lock-alt" 
            title="Free to use"
            desc="Access to the Quran GPT chatbot is absolutely free. We believe that everyone should have the opportunity to explore the Quran with AI, without any cost barriers."
            />
        </div>
    </div>
</section>
  )
}

export default Features