import React from 'react';
import './Extras.css'; // Import your CSS file for styling
import pesos from './Images/pesos.png';
import wallet from './Images/wallet.png';
import send from './Images/send.png';
import load from './Images/load.png';


function Extras() {
  return (
    <div className="grid-extra">
      <div className="serviceitem"><img src={pesos} alt="Image" className="img-extra"/><br/><h3 className="text-serv">Pay Bills </h3><p className="text-para"> Pay for your essential bills in MBC.</p></div>
      <div className="serviceitem1"><img src={wallet} alt="Image"  className="img-extra"/><br/><h3 className="text-serv">Add to your Wallet </h3><p className="text-para"> Add money and you re good to go! No need to worry, your Bayad wallet is safe and secure.</p></div>
      <div className="serviceitem"><img src={send} alt="Image"  className="img-extra" /><br/><h3 className="text-serv"> Send Money for Free  </h3> <p className="text-para"> You can transfer money to other banks without the extra fees!</p></div>
      <div className="serviceitem1"><img src={load} alt="Image"  className="img-extra"/><br/><h3 className="text-serv"> Buy Load  </h3><p className="text-para">  Always stay connected with your loved ones! Easily buy load anytime, anywhere.</p></div>
    </div>
  );
}

export default Extras;
