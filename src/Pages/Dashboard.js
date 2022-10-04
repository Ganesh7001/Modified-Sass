import React from 'react'
import About from './About'
import Booking from './Booking'
import Feature from './Feature'
import Navbar from './Navbar'
import Stories from './Stories'
import Tours from './Tours'

const Dashboard = () => {
  return (
    <div>
        
        <Navbar/>
        <header class="header">
          <div class="header__logo-box">
                <img src="Images/logo-white.png" alt="logo" class="header__logo"/>
          </div>
        <div class="header__textbox">
            <h1 class="heading_primary">
                <span class="heading_primary--main">OUTDOORS</span>
                <span class="heading_primary--sub">Is where life begins...</span>
          </h1>
          <a href="#" class="btn btn--white btn--animated">Discover our toors</a>
        </div>
        </header>
        <main>
                <About/>
                <Feature/>
                <Tours/>
                <Stories/>
                <Booking/>
            

        </main>
        <footer class="footer">
            <div class="footer_logo-box">


                <picture class="footer_logo">
                    <source srcset="Images/logo-green-small-1x.png 1x  , Images/logo-green-small-2x.png 2x" media="(max-width:37.5em)"/>
                    <img srcset="Images/logo-green-1x.png 1x  , Images/logo-green-2x.png 2x" alt="Full logo"/>
                </picture>
                
            </div>
            <div class="row">
                <div class="col-1-of-2">
                    <div class="footer_navigation">
                        <ul class="footer_list">
                            <li class="footer_item"><a href="" class="footer_link">Company</a></li>
                            <li class="footer_item"><a href="" class="footer_link">Contact Us</a></li>
                            <li class="footer_item"><a href="" class="footer_link">Careers</a></li>
                            <li class="footer_item"><a href="" class="footer_link">Privacy policy</a></li>
                            <li class="footer_item"><a href="" class="footer_link">Terms</a></li>
                        </ul>
                    </div>

                </div>
                <div class="col-1-of-2">
                    <p class="footer_copyright">
                        Built by <a href="" class="footer_link">Johans scheduter</a> for his online course <a href="" class="footer_link">Advanced CSS and Sass</a> Copyright &copy; Johans scheduter.
                    </p>
                </div>
            </div>

        </footer>

        <div class="popup" id="popup">
            <div class="popup_content">
                <div class="popup_left">
                    <img src="Images/nat-8.jpg" alt="tour photo" class="popup_img"/>
                    <img src="Images/nat-9.jpg" alt="tour photo" class="popup_img"/>
                </div>
                <div class="popup_right">
                    <a href="#section-tours" class="popup_close">&times;</a>
                    <h2 class="heading-secondary u-margin-bottom-small">Start Booking Now</h2>
                    <h3 class="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                    <p class="popup_text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui earum sapiente voluptatum quis perspiciatis impedit optio, cumque harum praesentium alias in, 
                        magnam quia ipsum rerum! Aperiam eveniet sapiente doloremque unde?
                    </p>
                    <a href="#" class="btn btn--green">Book Now</a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Dashboard