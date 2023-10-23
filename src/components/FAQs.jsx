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
        <p className="lead text-center mb-5">Questions about this random password generator? Answers below!</p>
        <div className="accordion accordion-flush" id="accordionFlushExample">
            {faqData.map(({title, desc}, i) => (
                <FaqItem key={i} id={i} title={title} desc={desc}/>
            ))}
            {/* <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  How does the random password generator work?
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <div className="text-muted">The random password generator uses a random number generator to select characters from a pool of letters, numbers, and symbols. The length of the password and the type of characters included can be customized by the user.</div>
                </div>
              </div>
            </div> */}
            {/* <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  What are the benefits of using a random password generator?
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  <div className="text-muted">Using a random password generator can help you create strong passwords that are difficult to crack. This can help protect your accounts from unauthorized access.</div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  How do I use the random password generator?
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <div className="text-muted">To use the random password generator, simply select the length of the password you want, and whether you want to include uppercase letters, lowercase letters, numbers, and symbols. Click the "Generate Password" button to generate a random password.</div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  Can I save my generated passwords?
                </button>
              </h2>
              <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  <div className="text-muted">No, the random password generator does not save your generated passwords. This is to help protect your privacy and security.</div>
                </div>
              </div>
            </div> */}
        </div>
    </div>
</section>
  )
}

export default FAQs