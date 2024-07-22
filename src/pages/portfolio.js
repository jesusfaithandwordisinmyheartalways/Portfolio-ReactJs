

import React from "react";
import '../components/portfolio/portfolio.css';
import { useNavigate } from "react-router-dom";
import HandImage from '../images/handsign.png';
import Graduation from '../images/graduation image .jpg';
import HeaderImage from '../images/portfolio image.jpg';
import GitHub from '../images/github image.png';
import Linkedin from '../images/linkedin.png';
import JavaScript from '../images/javascript.png';
import ReactLogo from '../images/react-1-logo.png';
import GitLogo from '../images/gitversioncontrol.png';
import HTML from '../images/html5.png';
import CSSLogo from '../images/css.png';
import RegexLogo from '../images/regex.png';
import UXUILogo from '../images/UI_UX image.avif';
import TravelLand from '../images/travel.png';
import UserForm from '../images/Laptop Screen.png';
import Space from '../images/space land page(1).png';
import TravelLandPage from '../images/travel screenshot.png';
import User from '../images/user icon icon.png';
import Location from '../images/location.jpg';
import Email from '../images/email.png';


const Portfolio = () => {
    const navigate = useNavigate()

    const NavigateTo = (id) => {
        navigate(`#${id}`)
        const element = document.getElementById(id)
        if(element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    }


        const handleExternalNavigation = (url) => {
            window.location.href = url
        }
  
    return (
        <>

        
            {/*----------------------------------NAVBAR --------------------------------------------*/}

            <nav className="Nav-Container">
                <div className="Nav-Wrapper">

                    <div className="portfolio">
                        <div><h3>Portfo<span className="portfolio-inner-text">lio</span></h3></div>
                    </div>



                    <div className="nav-button-content">
                       <div className="navbar-content">
                         <div onClick={() => NavigateTo('header')}><button type="button">Home</button></div>
                         </div>
                    </div>

                    <div className="nav-button-content">
                       <div className="navbar-content">
                        <div onClick={() => NavigateTo('content')}><button type="button">About</button></div>
                       </div>
                    </div>

                    <div className="nav-button-content">
                    <div className="navbar-content">
                      <div onClick={() => NavigateTo('skills')}><button type="button">Skills</button></div>
                    </div>
                    </div>

                        
                    <div className="nav-button-content"> 
                    <div className="navbar-content">
                      <div onClick={() => NavigateTo('showcase')}><button type="button">Projects</button></div>
                    </div>
                    </div>   

                    <div className="nav-button-content">
                    <div className="navbar-content">
                      <div onClick={() => NavigateTo('contact')}><button type="button">Contact</button></div>
                    </div>
                    </div>


                </div>
            </nav>
            
            
            
            
            
            
            
            
            
            
            {/*----------------------------------HOME SECTION --------------------------------------------*/}

                        <header className="Header-Container" id="header">

                            <div className="Header-Wrapper">

                            <div className="header-content">
                                <div className="font-end"><div>FrontEnd Developer | UI/UX Designer</div></div>
                                <div><div><h3>Hi, <img src={HandImage}></img> I'm Andrew Johnson, Recent College Graduate</h3></div></div>
                                
                                 <div className="header-links-wrapper">
                                   <div className="link"><a href="#contact">I Need a Website</a></div>
                                   <div className="link-two"><a href="https://www.linkedin.com/in/andrew-johnson-64632199/" target="_blank">Want to hire</a></div>
                                   
                                 </div>

                                

                                 

                                

                            </div>



                            <div className="header-image">
                                <img src={HeaderImage}></img>
                            </div>




                            </div>



                        </header>
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        {/*----------------------------------CONTENT SECTION --------------------------------------------*/}


                        <main className="Main-Content" id="content">

                            <div className="Main-Wrapper">
                                    <div className="about-content">
                                        <div><h3>About Me</h3></div>
                                        <div><hr /> </div>
                                    </div>
                            </div>

                            <div className="About-Me-Wrapper">


                            <div className="about-me-content">
                                <div><div><img src={Graduation}></img></div></div>
                            </div>

                            <div className="about-me-content-bio">
                                <div>
                                   <div><h3>I'm Andrew & I love to develop websites</h3></div>
                                   <div>I'm an recent college graduated that has an passion for Front-End development.
                                   My focus is on creating dynamic friendly websites within an team and remain in the process to continue to improve
                                   my knowledge on the latest industry technologies. I have a drive to always want to improve myself as an developer
                                   with different programming languages & tools. Here, the portfolio showcases just some of 
                                   the web applications developed by me and highlights my ability to deliver 
                                   dynamic web apps for a company.  </div>
                                </div>
                            </div>


                            </div>

                            <div className="About-Me-Links-Wrapper">
                                <div>
                                    <div onClick={() => handleExternalNavigation('https://github.com/jesusfaithandwordisinmyheartalways')}><img src={GitHub}></img></div>
                                </div>

                                <div>
                                    <div onClick={() => handleExternalNavigation('https://www.linkedin.com/in/andrew-johnson-64632199/')}><img src={Linkedin}></img></div>
                                </div>


                                
                            </div>


                        </main>
                        
                        
                        
                        
                        
                        
                        
                        {/*----------------------------------WHAT I KNOW SECTION --------------------------------------------*/}




                        <div className="Technologies-Container">


                            <div className="Tech-Wrapper" id="skills">
                                <div>
                                <div><h3>Skills</h3></div>
                                    <hr />
                                </div>
                            </div>


                            <div className="image-wrapper">

                                    <div className="image-language">
                                        <img src={ReactLogo}></img>
                                        <img src={JavaScript}></img>

                                        <img src={GitLogo}></img>

                                        <img src={GitHub}></img>

                                        <img src={RegexLogo}></img>

                                        <img src={UXUILogo}></img>


                                        <img src={HTML}></img>

                                        <img src={CSSLogo}></img>

                                        </div>


                                    </div>





                        <div className="Tech-Skills-Wrapper">
                                   
                                   <div className="know-text">
                                        <div><h3>My Experience</h3></div>
                                       <div><p>I'm an frontend developer college graduated
                                        BS in Information Technology with an concentration in Software Engineering (2023).
                                        I have motivation , driven to achieve results, team person, & on continually to improve 
                                        my skills with different languages and the industry trend as a Frontend developer.
                                        With firm knowledge on ReactJs framework, React Hooks,  JavaScript, Git version control, Regular expressions,
                                        GitHub, CSS, CSS3, HTML5 a& Third Party APIs.  
                                          </p></div>
                                   </div>

                           </div>


                        </div>
                        
                        
                        
                        
                        
                        
                        
                        
                        {/*----------------------------------WORK SO FAR --------------------------------------------*/}

                    <div className="Showcase-Container" id="showcase">


                        <div className="Showcase-Wrapper">

                            <div>
                                <div><h3>Some of My Projects</h3></div>
                                    <hr />
                            </div>

                        </div>


                        <div className="Experience-Wrapper">

                        <div className="image-one" onClick={() => handleExternalNavigation('https://travelapp-react-js.vercel.app/')}>
                            <div><img src={TravelLandPage}></img></div>
                            <div className="image-one-text"><div><h3>Travel Land ReactJs Web App</h3></div></div>
                            <div className="image-one-text-two"><div><p>ReactJs | JavaScript | Animation</p></div></div>

                        </div>

                        <div className="image-two" onClick={() => handleExternalNavigation('https://user-form-validation-react-js.vercel.app/')}>
                            <div><img src={UserForm}></img></div>
                            <div className="image-two-text"><div><h3>Form Validation App (Mobile,Tablet,Laptop)  </h3></div></div>
                            <div className="image-two-text-two"><div><h3>ReactJS | JavaScript | User Error Handling </h3></div></div>
                        </div>



                        <div className="image-three" onClick={() => handleExternalNavigation('https://space-travel-react-js-indol.vercel.app/')}>
                            <div><img src={Space}></img></div>
                            <div className="image-three-text"><div><h3>Space Travel Web App</h3></div></div>
                            <div className="image-three-text-two"><div><h3>ReactJs | VsCode | Animation</h3></div></div>
                        </div>



                        </div>



                    </div>
                    
                    
                    
                    
                    
                    {/*----------------------------------CONTACT ME SECTION --------------------------------------------*/}

                    <div className="Contact-Container" id="contact">
                        <div className="Contact-Wrapper">

                            <div className="contact-text">
                            <div>
                            <h3>Contact Me</h3>
                                <hr />
                            </div>
                            </div>

                            <div className="contact-text-two">
                                <div>
                                <div><h3>React Out to Me</h3></div>
                                </div>
                            </div>

                        </div>


                                <div className="Contact-Info-Wrapper">

                                <div className="contact-text-three">
                                      <div><img src={User}></img></div>
                                </div>

                                <div className="contact-text-three">
                                    <div><h3>Name</h3><span>Andrew Johnson</span></div>
                                </div>

                                <div className="contact-text-three" >
                                    <div><img src={Location}></img></div>
                                </div>

                                <div className="contact-text-three">
                                    <div><h3>Address</h3><span>Savannah, TX</span></div>
                                </div>

                                <div>
                                    <div><img src={Email}></img></div>
                                </div>

                                <div className="contact-text-three">
                                    <div><div><h3>Email</h3><span>andrewjohnson9393@gmail.com</span></div></div>
                                </div>


                                </div>
                    </div>
                    
                    






                    
                    {/*----------------------------------FOOTER SECTION --------------------------------------------*/}

                            <footer className="Footer-Container">


                                <div className="Footer-Wrapper">

                                <div className="footer-content">
                                    <div><h3>Created By <span>Andrew Johnson</span></h3></div>
                                    <div><p> &copy; 2024 All rights reserved</p></div>
                                </div>



                                </div>


                            </footer>



        </>
    )


}

export default Portfolio