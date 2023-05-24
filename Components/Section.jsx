import React from "react";
import '../Styles/Section.css';
import heroimg from '../challenge/images/image-hero-desktop.png';
import databiz from '../challenge/images/client-databiz.svg';
import audiophile from '../challenge/images/client-audiophile.svg';
import meet from '../challenge/images/client-meet.svg';
import maker from '../challenge/images/client-maker.svg';
import heroImgMobile from '../challenge/images/image-hero-mobile.png'


function Section() {




  return(
    <>
      <div className=" conatiner section-container ">
        <div className="row section-row ">
          {/* ----------------------------------- */}
          
            {/* --------------left side of grid ------------------------------*/}
            <div className=" col-12 col-md-6 info-div">
              <div className='d-sm-none title-container'>
                <h1 className="title">Make remote work</h1>
              </div>
            <div className="title-container d-none d-sm-flex" >
              <h1 className="make">Make</h1>
              <h1 className="remote-work">remote work</h1>
            </div>

            <div className="text-container-mobile d-sm-none">
              <p className="text-p">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            </div>

            <div className="text-container d-none d-sm-flex">
              <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar</p>
              
            </div>

            <div className="button-container">
              <button type="button" class="btn btn-dark">Learn more</button>
            </div>

            <div className="brands-container">
              <img className="brand-img" src={databiz} alt="databiz-logo" />
              <img className="brand-img" src={audiophile} alt="audiophile-audio" />
              <img className="brand-img" src={meet} alt="meet-logo" />
              <img className="brand-img" src={maker} alt="maker-logo" />
            </div>
            
          </div>


          {/* -------------------------Grid right side--------------------- */}
          <div className="col-12 col-md-6 hero-img-container">
            
            <img className="hero-img d-none d-sm-flex " src={heroimg} alt="hero-img" />
            <img src={heroImgMobile} alt="hero-img" className="d-felx d-sm-none hero-img" />
          </div>


            

          
          {/* ------------------------ */}
          
        </div>

      </div>

    </>
  )
}

export default Section;