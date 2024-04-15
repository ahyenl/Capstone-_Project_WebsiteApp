import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route,} from 'react-router-dom';
import Location from './Location';
import Services from './Services';
import Form from './Form';
import Booking from './Booking';
import Aboutus from './Aboutus';
import Contact from './Contact';
import Apptform from './Apptform';
// import Accordion from './Accordion';
import Frequentaskquestions from './Frequentaskquestions';
import Accessibility from './Accessibility';
import Peopleofdetermination from './Peopleofdetermination';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "location",
    element: <Location />,
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "form",
    element: <Form />,
  },
  {
    path: "booking",
    element: <Booking />,
  },

  {
    path: "aboutus",
    element: <Aboutus />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "apptform",
    element: <Apptform />,
  },
  {
    path: "frequentaskquestions",
    element: <Frequentaskquestions />,
  },
  {
    path: "accessibility",
    element: <Accessibility />,
  },
  {
    path: "peopleofdetermination",
    element: <Peopleofdetermination />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
