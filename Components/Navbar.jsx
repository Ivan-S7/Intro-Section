import React from "react";
import calendarIcon from '../challenge/intro-section-with-dropdown-navigation-main/images/icon-calendar.svg'
import todoIcon from '../challenge/intro-section-with-dropdown-navigation-main/images/icon-todo.svg'
import planningIcon from '../challenge/intro-section-with-dropdown-navigation-main/images/icon-planning.svg'
import remindersIcon from '../challenge/intro-section-with-dropdown-navigation-main/images/icon-reminders.svg'
import logo from '../challenge/intro-section-with-dropdown-navigation-main/images/logo.svg'
import arrowUp from '../challenge/images/icon-arrow-up.svg'
import arrowDown from '../challenge/images/icon-arrow-down.svg'
import '../Styles/Navbar.css'
import { useState } from "react";


function Navbar(){

  const [collapsedOpen, setCollapsedOpen] = useState(false);
  const [collapsedCompany, setCollapsedCompany] = useState(false);

  

  const collapsed = () =>{
    setCollapsedOpen(!collapsedOpen);
   
  }

  const collapsedCompanyArrow = () =>{
    setCollapsedCompany(!collapsedCompany);
    
  }

 



  return(
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img className="pt-2 ps-4 ivan"  src={logo} alt="" /> </a>
          {/* ----------------------------------offcanvas-------------------------------------------- */}

          <button class="btn  d-md-none boton-offcanvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="bi bi-list"></i></button>

          <div class="offcanvas offcanvas-end d-md-none" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasRightLabel"></h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body d-md-none">
              <div className="first-element">

              

              {/* ---------------------------Offcanvas Features------------------------------------- */}
              <p> 
                <button class="btn btn-color " type="button" data-bs-toggle="collapse" data-bs-target="#features" aria-expanded="false" aria-controls="collapseExample" onClick={collapsed}>
                  Features 
                  <img src={arrowDown} alt="feature-arrow-down-icon" className={collapsedOpen ? 'feature-arrow-down d-none' : 'feature-arrow-down'} />
                  <img src={arrowUp} alt="feature-arrow-up-icon" className={collapsedOpen ? 'feature-arrow-up' : 'feature-arrow-up d-none'}/>
                </button>
              </p>
              <div class="collapse" id="features">
                <div class="card card-body">
                  <ul className="mobile-list">
                    <li className="feature-li"><a href="#"><img src={todoIcon} className="feature-icon" alt="todo-icon" />Todo List</a></li>

                    <li className="feature-li"><a href="#"><img src={calendarIcon} className="feature-icon" alt="todo-icon" />Calendar</a></li>

                    <li className="feature-li"><a href="#"><img src={remindersIcon} className="feature-icon" alt="todo-icon" />Reminders</a></li>

                    <li className="feature-li"><a href="#"><img src={planningIcon} className="feature-icon" alt="todo-icon" />Planning</a></li>
                  </ul>
                </div>
              </div>
              {/* -----------------------------Offcanvas Company------------------------------------ */}
              <p> 
                <button class="btn btn-color " type="button" data-bs-toggle="collapse" data-bs-target="#company" aria-expanded="false" aria-controls="collapseExample" 
                onClick={collapsedCompanyArrow}>
                  Company
                  <img src={arrowDown} alt="arrow-down-icon" className={collapsedCompany ? 'arrowCompanyDown d-none' : 'arrowCompanyDown'} />
                  <img src={arrowUp} alt="arrow-up-icon"  className={collapsedCompany ? 'arrowCompanyUp' : 'arrowCompanyUp d-none'} />
                </button>
              </p>
              <div class="collapse" id="company">
                <div class="card card-body">
                  <ul className="mobile-list">
                    <li className="company-li"><a href="#">History</a></li>
                    <li className="company-li"><a href="#">Our Team</a></li>
                    <li className="company-li"><a href="#">Blog</a></li>
                  </ul>
                </div>
              </div>
              {/* --------------------------Offcanvas carrers------------------------------------- */}
              <div className="offcanvas-link">
                <a href="#">Carrers</a>
              </div>
             {/* ---------------------------Offcanvas About----------------------------------------- */}
                
              <div className="offcanvas-link">
                <a href="#">About</a>
              </div>
            </div>

            {/* --------------------------Offcanvas Login / register------------------------------ */}
              <div className="second-element" id="second-element">
                <div className="user-options">
                  <ul className="user-ul">
                    <li className="user-li"><button className="btn btn-color login">Login</button></li>
                    <li className="user-li"><button className="btn btn-color  register">Register</button></li>
                  </ul>
                </div>
              </div>
              


            {/* ------------------------------------------------------------------------------------ */}
            </div>
          </div>

          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Features
                  
                </a>
                <ul className="dropdown-menu">
                  <li> 
                    <div className="inline-menu"> 
                      <img src={todoIcon} className="icon" alt="todo-icon" /> <a className="dropdown-item" href="#">Todo List</a>
                    </div>
                  </li>
                  <li> 
                    <div className="inline-menu" >
                      <img src={calendarIcon} className='icon' alt="calendar-Icon" /> <a className="dropdown-item" href="#">Calendar</a>
                      </div>
                  </li>
                  <li> 
                    <div className="inline-menu">
                    <img src={remindersIcon} className='icon' alt="planning-icon" /><a className="dropdown-item" href="#">Reminders</a>
                    </div>
                  </li>
                  <li>
                    <div className="inline-menu">
                    <img src={planningIcon} className='icon' alt="planning-icon" /> <a className="dropdown-item" href="#">Planning</a>
                    </div>
                  </li>
               </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Company
                </a>
                <ul className="dropdown-menu">
                  <li className="company-li"><a className="dropdown-item" href="#">History</a></li>
                  <li className="company-li"><a className="dropdown-item" href="#">Our Team</a></li>
                  <li className="company-li"><a className="dropdown-item" href="#">Blog</a></li>
               </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Carrers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              </ul>


                {/* <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                <ul className="navbar-nav me-4 left-side" >

                  <li className="nav-item me-4">
                    <a className="nav-link active" aria-current="page" href="#">Login</a>
                  </li>

                  <li className="nav-item register-item">
                    <a className="nav-link active" aria-current="page" href="#">Register</a>
                  </li>

                </ul>
          </div>
        </div>
      </nav>

    </div>
  )

}


export default Navbar;