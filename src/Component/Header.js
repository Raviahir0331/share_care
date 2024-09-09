import React from 'react';
import { useNavigate } from "react-router-dom";
import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Style.css';


function Header() {
  const navigate = useNavigate();
  const DonateLink = () => {
    navigate("/Signin", { replace: true });
  };
  return (
    <div class="container row menu-bar">
    <div class="col-md-2 py-2 flex ">
     <a href="/"> <img
        src="data:image/png;base64,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"
        className="w-1/2"
      />
      </a>
    </div>
    <div class="col-md-5">
      <ul className="flex gap-5 font-light cursor-pointer">
            
          <li className="hover:underline hover:-translate-x-1 hover:text-sky-700 text-color">
            Home
          </li>
            
          <li className="hover:underline hover:-translate-x-1  hover:text-sky-700 text-color" >
            About Us
          </li>
        
          <li className="hover:underline hover:-translate-x-1 hover:text-sky-700 text-color" >
            Contact Us
          </li>
        
        <li>
        <div className="justify-end">
      <button
            className="favorite"
            id="rbd"
            type="submit"
            onClick={() => {
              DonateLink();
            }}
          >
            Donate
          </button>    
      </div>
        </li>
      </ul>
      
      
      
    </div>
    
    {/* <div class="col-md-5 flex items-center justify-end text-center">
      <input
        placeholder="Search any Products"
        className="rounded-l h-10  text-gray-800 text-center bg-gray-100 focus:outline-none"
      /> */}
      {/* <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="h-10 w-4 pr-3 rounded-r bg-slate-100"
      /> */}
      {/* <button className="bg-green-50 rounded-md text-green-500 w-20 h-10 left-2">Register</button> */}
      {/* <div className="flex items-center justify-center text-center gap-4">
        <FontAwesomeIcon
          icon={faUser}
          className="h-10 w-5 cursor-pointer ml-7"
          
        />
        <FontAwesomeIcon
          icon={faCartShopping}
          className="text-base w-5 cursor-pointer"
          
        />
      </div>
    </div> */}
  </div>
  );
}

export default Header;
// import React from 'react'
// import './Header.css'
// import { useNavigate } from "react-router-dom";


// const Header = () => {
//   const navigate = useNavigate();
//   const DonateLink = () => {
//          navigate("/Signin", { replace: true });
//        };
//   return (
//     <>
//     <div className='container-fluid mainclass '>
//         <div className='row header '>
//          <div className='col-md-2 '>
//             <h1 className='charity-heading'>
//                 Share & Care
//             </h1>
//          </div>
//          <div className='col-md-5 '>
//         <ul className='navbar-items'>
//             <li>Home</li>
//             <li>About</li>
//             <li>Social Events</li>
//             <li>Blog</li>
//             <li>Contact</li>
//         </ul>
//          </div>
//          <div className='col-md-5  searchbar'>      
//       <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//       {/* <button class="btn btn-outline-success" type="submit">Signin</button> */}
//       {/* <button class="btn btn-outline-success" type="submit"></button> */}
//       <button class="button-68" role="button" onClick={() => {
//                DonateLink();
//            }}>Donate</button>

// {/* <button class="button-91" role="button">Donate</button> */}
//          </div>
//         </div>
//     </div>
//     </>  )
// }

// export default Header;