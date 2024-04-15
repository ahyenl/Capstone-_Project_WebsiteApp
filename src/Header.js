import './Header.css';
import mbc2 from './Images/mbc2.png';
import flogo from './Images/flogo.jpg';
import { Link } from "react-router-dom";



export default function Header(){
    return (
        <div className="header" >
        <div className="logo-container">
        <Link to="/"><img className="flogo" src={flogo}  alt="Logo" /></Link>
             <img className="flogo1"src={mbc2}  alt="Logo" /></div>
           
        <br/> <br/> <br/> <br/><br/> <br/>
       

        </div>
    );
};

