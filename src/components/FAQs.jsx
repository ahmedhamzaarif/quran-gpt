import React from 'react'
import FaqItem from './FaqItem'

const FAQs = () => {
    const faqData = [
        {
            title: "How does Quran GPT work?",
            desc: "Quran GPT uses advanced AI technology to understand and respond to your questions about the Quran. It leverages a vast dataset of Quranic text and interprets your queries to provide meaningful and accurate answers."
        },
        {
            title: "What are the benefits of using Quran GPT?",
            desc: "Quran GPT offers an accessible and interactive way to explore the Quran. You can gain insights, find explanations, and seek clarity on Quranic topics. It's a valuable resource for anyone looking to deepen their understanding."
        },
        {
            title: "How do I interact with Quran GPT?",
            desc: "Engaging with Quran GPT is straightforward. Simply start a conversation by asking your Quran-related questions. The chatbot will respond with information, explanations, and references from the Quran."
        },
        {
            title: "Can I save the responses I receive from Quran GPT?",
            desc: "No, Quran GPT does not save your conversations or responses. We prioritize your privacy and ensure that your interactions with the chatbot are secure and confidential."
        }
    ]
  return (
    
    <section id="faq" className="py-5 my-5">
    <div className="container">
        <h2 className="section-title text-center display-5">FAQs</h2>
        <p className="lead text-center mb-5">Questions about Quran GPT? Answers below!</p>
        <div className="accordion accordion-flush" id="accordionFlushExample">
            {faqData.map(({title, desc}, i) => (
                <FaqItem key={i} id={i} title={title} desc={desc}/>
            ))}
        </div>
    </div>
</section>
  )
}

export default FAQs