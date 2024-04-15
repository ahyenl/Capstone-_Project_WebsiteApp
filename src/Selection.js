import React, { useState } from 'react';
import './Selection.css'; // Import the CSS file
import energy from '../src/Images/energy.jpg'
import water from '../src/Images/water.jpg'
import landline from '../src/Images/landline.jpg'
import mobile from '../src/Images/mobile.jpg'
import cable from '../src/Images/cable.jpg'
import internet from '../src/Images/internet.jpg'
import creditcard from '../src/Images/creditcard.jpg'
import govt from '../src/Images/govt.jpg'


function Selection() {
  const [searchTerm, setSearchTerm] = useState('');
  const contacts = [
    { name: 'Electricity', href: '#', src: energy , 
      description: (
      <>
        <p className="para-about1">Breakdown of Charges. Here's a guide to help you understand what each of these bill charges mean, and where they go.</p>
        <h3>Generation Charge</h3>
        <p className="para-about1">This covers the cost of power we purchase from our suppliers - Independent Power Producers (IPPs), power producers with Power Supply Agreements (PSAs) with Meralco, power producers using Renewable Energy and the Wholesale Electricity Spot Market.</p>
        <h3>Transmission Charge</h3>
        <p className="para-about1">This charge is for the cost of delivery of electricity from power suppliers usually located in other provinces or in remote areas outside of our franchise area – to our distribution system. This is paid to the National Grid Corporation of the Philippines (NGCP), our transmission service provider.</p>
        <h3>System Loss Charge</h3>
        <p className="para-about1">This refers to the cost-recovery of power lost due to technical and non-technical system losses. The maximum level of losses that may be recovered by private distribution utilities was set at 9.5% by Republic Act No. 7832, which was reduced to 8.5% starting 2010, as provided under ERC Resolution No.17, Series of 2008.</p>
        <h3>Distribution Charge</h3>
        <p className="para-about1">This is the only portion of your bill that goes to Meralco. It covers the cost of developing, constructing, operating and maintaining our distribution system, which delivers power from high-voltage transmission grids to commercial and industrial establishments and residential end-users.</p>
        <h3>Subsidies Lifeline and Senior Citizen Discounts</h3>
        <p className="para-about1">The discount is for the marginalized, low-income customers and senior citizens who consume 100 kWh or less in a given month. They can enjoy a discount of up to 5%, an amount which is subsidized by all other customers. Under Subsidies, Tax Recovery Adjustment Charge is also included. It is the charge collected from customers of the different local government units where local franchise taxes, prior to rate unbundling, were already paid by Meralco but not yet recovered from customers.</p>
        <h3>Metering Charge</h3>
        <p className="para-about1">This is the charge for the cost of reading, operating and maintaining power metering facilities and associated equipment, as well as other costs attributed to the provision of metering service.</p>
        <h3>Supply Charge</h3>
        <p className="para-about1">This is for the cost of rendering service to customers such as billing, collection, customer assistance and other associated services. Only about 17.5% of your bill component actually goes to Meralco. Meralco is responsible for gathering all these charges and simplifying them, so you won't need to worry about the many different entities collecting payment from you.</p>
        <hr/>
      </>
    ),
  },
    { name: 'Water', href: '#', src: water ,
    description: (
      <>
        <h3>Billing Summary</h3>
        <p className="para-about1">Basic Charge covers the cost of operating, maintaining, improving and expanding the distribution network, as well as the facilities that bring potable water to customers. It is based on the latest approved tariff schedule.</p>
        <p className="para-about1">Sewerage Charge is 20% of Basic Charge for Commercial and Industrial customers connected to a sewer line. This charge is not levied on Residential and Semi-Business customers, or on Commercial and Industrial customers who are not connected to the sewer line.</p>
        <p className="para-about1">Maintenance Service Charge (MSC) covers the maintenance of the water meter, and is based on the size of the installed meter.</p>
        <p className="para-about1">Government Taxes consist of the 2% National Franchise Tax, and the Local Franchise Tax implemented by the respective local government units where the Business Area offices of Maynilad are located. This will be remitted to the national and local government (BIR for the National Franchise Tax and LGU for the Local Franchise Tax).</p>
        <p className="para-about1">Previous Unpaid Amount pertains to charges billed prior to the billing period, and should be settled immediately together with the current charges to avoid disconnection of the water service.</p>
        <p className="para-about1">Total Amount Due is the Total Current Charges plus any Previous Unpaid Amount.</p>
        <p className="para-about1">Payment Due Date is the deadline for paying the Total Amount Due.</p>
        <hr/> 
      </>
    ),
  },
    { name: 'Landline', href: '#', src: landline,
    description: (
      <>
        <p className="para-about1">A PLDT wired prepaid landline has no expensive monthly bills. Local calls are charged per call - not per minute, not per second. It’s an unlimited connection that your family can enjoy to the max!</p>
        <p className="para-about1">*GMM Rate Only. Absolute value may vary monthly depending on foreign currency adjustments.</p>
        <p className="para-about1">NOTE: Rates are inclusive of 12% VAT and may change without prior notice.</p>
        <hr/> 
      </>
    ),
  },
    { name: 'Mobile Postpaid', href: '#', src: mobile,
    description: (
      <>
        <p className="para-about1">A late payment fee of P50 applies when you miss paying your bill on your due date. It's intended to encourage our customers to pay their bills on time and avoid the inconvenience of service interruption due to unpaid balances.</p>
        <p className="para-about1">This fee applies to Consumer Mobile Postpaid/Platinum and Globe At Home Postpaid accounts. It will apply to all bills and includes recurring services and one-time purchases.</p>
        <hr/> 
      </>
    ), },
    { name: 'Cable TV', href: '#', src: cable,
    description: (
      <>
        <p className="para-about1">Late Payment Charges.  Service Provider reserves the right to impose a late payment charge on unpaid amounts as Service Provider determines in its sole discretion. Service Provider may charge interest equivalent to one and a half percent (1.5%) per month for all accounts not paid by the due date, plus a late payment charge equivalent to one and half percent (1.5%) per month, until the date of full payment.</p>
        <hr/> 
      </>
    ), },
    { name: 'Internet', href: '#', src: internet,
    description: (
      <>
      <p className="para-about1">Here are the important sections of your bill that you need to know: </p>
      <p className="para-about1">Subscriber Name and Billing Address — On the upper left of your statement of account, you will see the name of the subscriber on record and the billing address.</p>
      <p className="para-about1">Billing Information — This is located on the upper right portion of your statement of account. This section will show your Statement Date, Account Number, Telephone Number, and Customer TIN. Please always have your account number ready when paying.</p>
      <p className="para-about1">Billing Summary - This is located on page 1 of your statement of account.</p>
          <hr/> 
      </>
    ),},
    { name: 'Credit Card', href: '#', src: creditcard,
    description: (
      <>
      <p className="para-about1">Credit cards are a financial tool that provides cardholders with a credit limit. A credit limit acts like a loan and you can take as much credit as you want within that limit on the premise that you’ll pay off your “loan” on a certain due date. Each month, your bank will send you a credit card bill along with a minimum amount to pay which is typically 3% to 10% of your total bill.</p>
      <p className="para-about1">Paying your credit card balance on time can give you a lot of benefits. It will improve your CREDIT SCORE which will help you apply for new financial products and get higher credit limits, avoid late fees and keep your credit card in good standing.</p>
          <hr/> 
      </>
    ),},
    { name: 'Government', href: '#', src: govt, 
    description: (
      <>
      <h3>SSS (Social Security System):</h3>
      <p className="para-about1">SSS is a government agency in the Philippines that provides social security protection to workers in the private sector. It offers retirement, disability, sickness, maternity, and death benefits to qualified members and their beneficiaries.</p>
      <h3>Pag-IBIG (Home Development Mutual Fund):</h3>
      <p className="para-about1">Pag-IBIG is a government agency that provides affordable housing finance and savings programs to Filipino workers. It offers housing loans, short-term loans, and provident savings to help members secure their future and achieve homeownership.</p>
      <h3>Pag-IBIG (Home Development Mutual Fund):</h3>
      <p className="para-about1">PhilHealth is the national health insurance program in the Philippines that provides health insurance coverage and benefits to Filipinos. It offers financial protection against medical expenses and ensures access to affordable healthcare services for its members and their dependents</p>

          <hr/> 
      </>
    ),},
  ];

  const handleChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toUpperCase().includes(searchTerm) ||
    contact.name.toLowerCase().includes(searchTerm)


  
  );

  return (
    <body>
    <div className="phonebook">
      <h2>Services Information</h2>
      <input
        type="text"
        id="myInput"
        placeholder="Search for type of bills.."
        title="Type services"
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="grid-container">
        {filteredContacts.map((contact) => (
          <div  key={contact.name} className="grid-item">
            <div className="contact-info">
              {contact.src && ( 
                <img src={contact.src} alt={contact.name} /> 
              )}
              <a href={`#${contact.name}`}>{contact.name}</a>
            </div>
            </div>
        ))}
      </div>

      
    </div>
    <br/><hr/>
    {filteredContacts.map((contact) => (
      <section key={contact.name} id={contact.name}>
        <h2>{contact.name}</h2>
        <p>{contact.description}</p>
   
  </section>
    ))}
    </body>
  );
}

export default Selection;
