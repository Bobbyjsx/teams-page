import React from 'react';
import './Teams.css';
//img
import panda from "../Img/panda.png"
import cook from "../Img/cook.png"
import steve from "../Img/steve.png"
import aise from "../Img/aise.png"
import uba from "../Img/uba.png"
import damilore from "../Img/damilore.png"
import lee from "../Img/lee.png"
import eternal from "../Img/eternal.png"
import phorlar from "../Img/phorlar.png"
import socials from "../Img/socials.png"
//
import footer from "../Img/Footer.png"
import logo from "../Img/Logo.png"
import { Link } from 'react-router-dom';

function Teams() {
    return (
      <div className="body">
      
        <header className="header">
          <img src={logo} />
          <nav id='nav'>
            <Link id="nav-nav"to="/About">About Us</  Link>
            <Link id="nav-nav" to="/Blog">Blog</Link>
            <Link id="nav-nav" to="/Contact">Contact Us</Link>
          </nav>
          <a id="login">Login</a>
        </header>
        <div id='body'>
        <div id="first">
           
            <div id='first-h1'>
              <h1>Tech 101, A functional system, internet access and...<span id="bold">DevAsk</span> </h1>
            </div>
             
              <p>
              We are a team of coders and designers passionate about seeing the glow return to your face when you finally resolve that week-old bug. Panda grey, Lee me A. Lone, and I were interns at HNGi9 and every time an error page comes up in our code, we wished there was some sort of textbook we could look up instead of spending hours combing through lines of code. We built DevAsk to help thousands like ourselves cut down the time spent debugging instead ship innovative products 10x better.
              </p>
           </div>
           <div id='border'></div>
           <div id='team'>
           <h2>Meet Our <span id='blue'>Team</span></h2>
              <p>We have a team of developers from all stacks, devoted to helping you debug your next project</p>
              <div id='img'>
                <img id='image' src={panda} />
                <img id='image' src={cook} />
                <img id='image' src={steve} />
                <img id='image' src={aise} />
                <img id='image' src={uba} />
                <img id='image' src={damilore} />
                <img id='image' src={lee} />
                <img id='image' src={eternal} />
                <img id='image' src={phorlar} />
              </div>
         </div>.
        </div>
        <div id='footer'>
          <div id='column1'>
            <img src={footer} />
            <p>Follow us on all social media platforms.</p>
            <img src={socials}/>
          </div>

          <div id='column2'>
           <h4>products</h4>
           <p>Team</p>
           <p>Advertising</p>
          </div>

          <div id='column3'>
            <h4>Company</h4>
            <p>About</p>
            <p>Blog</p>
            <p>Career</p>
            <p>Pricing</p>
          </div>

          <div id='column4'>
            <h4>More On DevAsk</h4>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>Cookie Policy</p>
            <p>API</p>
          </div>
          <div id='column5'>
            <h4>Support</h4>
            <p>How It Works</p>
            <p>Help Center</p>
            <p>FAQ's</p>
          </div>
          
        </div>
       
      </div>
    );
  }
  
  export default Teams;