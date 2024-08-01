

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
import RecipeSearchImage from '../images/receipesearch.png';
import FigmaLogo from '../images/figmalogo.png';
import JSONImage from '../images/json.png';
import GoToTech from '../images/go to tech screenshot.png'


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
                                <div className="font-end"><div>UI/UX Designer | Frontend Developer</div></div>
                                <div className="font-end-text"><div><h3>Hi, <img src={HandImage}></img> I'm Andrew Johnson,      Frontend Developer</h3></div></div>
                                
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
                                   <div>I'm an recent college graduated with an BS in Information Technology with an concentration in Software Engineering (2023).
                                    I have an passion for Front-End development & UI/UX design for webs apps, tablets  and mobile screens.
                                   My focus is on creating dynamic friendly websites within an team and remain in the process to continue to improve
                                   my knowledge on the latest industry technologies. I have a drive to always want to improve myself as an developer
                                   with different programming languages & tools. Here, the portfolio showcases just some of 
                                   the web applications I have by me and highlights my ability to deliver 
                                   dynamic web apps for a company. Please visit my Github or Linkedin image icon to see my craft.  </div>
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

                                        <img src={FigmaLogo}></img>

                                        <img src={JSONImage}></img>

                                        </div>


                                    </div>





                        <div className="Tech-Skills-Wrapper">
                                   
                                   <div className="know-text">
                                        <div><h3>My Experience</h3></div>
                                       <div><p>I'm a frontend developer and recent college graduated that focus on designing dynamic websites. 
                                       I am motivated, love to learn from others,  driven to achieve results, well equip in a project management environment, team person, 
                                       & continually up to date on the latest technologies trends as a Frontend developer.
                                        With knowledge & experience with ReactJS framework, Context API, React Hooks,
                                         Interface Design Tools with Figma, JavaScript, Git Version Control, GitHub, Regular expressions,
                                          & CSS, CSS3, HTML5. I'm ready to contribute to your company to bring success 
                                       in the UX/UI design aspect & to help clients to bring their website ideas to life’.
                                          </p></div>
                                   </div>

                           </div>


                        </div>
                        
                        
                        
                        
                        
                        
                        
                        
                        {/*----------------------------------WORK SO FAR --------------------------------------------*/}

                    <div className="Showcase-Container" id="showcase">


                        <div className="Showcase-Wrapper">

                            <div>
                                <div><h3>Some of My Projects |  Click & See </h3></div>
                                    <hr />
                            </div>

                        </div>


                        <div className="Experience-Wrapper">

                        <div className="image-one" onClick={() => handleExternalNavigation('https://travelapp-react-js.vercel.app/')}>
                            <div><img src={TravelLandPage}></img></div>
                            <div className="image-one-text"><div><h3>Travel Land ReactJs Web App</h3></div></div>
                            <div className="image-one-text-three"><div><p>Web, UX/UI Design</p></div></div>
                            <div className="image-one-text-two"><div><p>ReactJs | User Re-routing | Animation</p></div></div>

                        </div>


                        <div className="image-three" onClick={() => handleExternalNavigation('https://culture-search-recipe.vercel.app/')}>
                            <div><img src={RecipeSearchImage} className="image-recipe"></img></div>
                            <div className="image-three-text"><div><h3>Recipe Culture Search Web App</h3></div></div>
                            <div className="image-three-text-three"><div><p>Web, UX/UI Design (Mobile, Tablet Land & Login)</p></div></div>
                            <div className="image-three-text-two"><div><h3>JavScript | User Redirection | Animation</h3></div></div>
                        </div>


                        <div className="image-two" onClick={() => handleExternalNavigation('https://user-form-validation-react-js.vercel.app/')}>
                            <div><img src={UserForm}></img></div>
                            <div className="image-two-text"><div><h3>User Form Validation App  </h3></div></div>
                            <div className="image-two-text-three"><div><p>Responsive Web | Mobile, Tablet, Laptop | UX/UI Design</p></div></div>
                            <div className="image-two-text-two"><div><h3>ReactJS | JavaScript | Animation </h3></div></div>
                        </div>


                        <div className="image-four" onClick={() => handleExternalNavigation('https://gototechecommercepage-react-js.vercel.app//')}>
                            <div><img src={GoToTech}></img></div>
                            <div className="image-four-text"><div><h3>E-Commerce Product Page Web App  </h3></div></div>
                            <div className="image-four-text-three"><div><p>Responsive Web | Mobile, Laptop | UX/UI Design</p></div></div>
                            <div className="image-four-text-two"><div><h3>ReactJS | JavaScript | Image Slideshow </h3></div></div>
                        </div>






                        </div>



                    </div>
                    
                    
                    
                    
                    



                    {/*----------------------------------CONTACT ME SECTION --------------------------------------------*/}

                    <div className="Contact-Container" id="contact">
                        <div className="Contact-Wrapper">

                            <div className="contact-text">
                            <div>
                            <h3>Contact</h3>
                                <hr />
                            </div>
                            </div>

                            <div className="contact-text-two">
                                <div>
                                <div><h3>Reach Out to Me</h3></div>
                                </div>
                            </div>

                        </div>


                                <div className="Contact-Info-Wrapper">

                                <div className="contact-text-three">
                                      <div><img src={HeaderImage}></img></div>
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