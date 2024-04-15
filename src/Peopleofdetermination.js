import './Peopleofdetermination.css';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import eye from './Images/eye.png';
import mouse from './Images/mouse.png';
import ear from './Images/ear.png';
import { Link } from "react-router-dom";


export default function Peopleofdetermination(){
    return (
        <div className="people" >
        <Header />
        <div className="tabnav">
        <Link to="/" className="active">Home / </Link>
        <Link to=""> People of Determination</Link>
        </div>
        <div className="questions">
        <br/> <br/>
        < h1>MBC Help line: 8009090</h1><br/>
        <h3>I find difficulty in</h3><br/><br/> <br/>
        <div className="grid-pod">
        <div className="poditem"><img src={eye} alt="Image" /><br/><h2>Seeing</h2></div>
        <div className="poditem"><img src={mouse} alt="Image" /><br/><h2>Using Mouse </h2> </div>
        <div className="poditem"><img src={ear} alt="Image" /><br/><h2> Hearing </h2></div>
        </div>
        <br/> <br/> <br/> <br/><br/> <br/>
        <Footer />
         </div>  
        
       

        </div>
    );
};