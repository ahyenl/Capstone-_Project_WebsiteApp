import './Frequentaskquestions.css';
import Header from './Header';
import Accordion from './Accordion';
import Footer from './Footer';
import Navbar from './Navbar';
import faq from './Images/faq.jpg';

export default function Frequentaskquestions(){
    return (
        <div className="frequent">
        <Header />
        <Navbar />
        <div className="questions">
        <br/> <br/>
        <h2 className="text-content">Do You Have Questions?</h2>
        <p className="para-about1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to our FAQ page! Here, we aim to provide you with comprehensive answers to the most common questions you might have about our products, services, policies, and more. Whether you're a new visitor looking for information or a returning customer seeking clarification, our FAQ section is designed to offer clear and concise responses to address your queries.</p>
        <img src={faq} alt="Description of the image" className="faqimg" />
        <br/> <br/> <br/>
        <Accordion />
        <br/> <br/> <br/> <br/><br/> <br/>
        <Footer />
         </div>  
        
       

        </div>
    );
};