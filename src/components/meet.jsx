import React from "react";
import panda from    "../pages/Img/panda.png"
import cook from     "../pages/Img/cook.png"
import steve from    "../pages/Img/steve.png"
import aise from     "../pages/Img/aise.png"
import uba from      "../pages/Img/uba.png"
import damilore from "../pages/Img/damilore.png"
import lee from      "../pages/Img/lee.png"
import eternal from  "../pages/Img/eternal.png"
import phorlar from  "../pages/Img/phorlar.png"

function Meet(){
    return(
        <div id='team'>
        <h2 id="hala">Meet Our <span id='blue'>Team</span></h2>
           <p id="duh">We have a team of developers from all stacks, devoted to helping you debug your next project</p>
           <div id='img'>
             <img id='image' alt=" " src={panda} />
               <img id='image' alt=" " src={cook} />
                 <img id='image' alt=" " src={steve} />
                  <img id='image' alt=" " src={aise} />
                  <img id='image' alt=" " src={uba} />
                 <img id='image' alt=" " src={damilore} />
                <img id='image' alt=" " src={lee} />
              <img id='image' alt=" " src={eternal} />
             <img id='image' alt=" " src={phorlar} />
           </div>
      </div>
     
    )
}

export default Meet;