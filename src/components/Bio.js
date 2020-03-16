import React from "react"
import picture from "../images/about-picture.jpg"

class Bio extends React.Component  {
  render(){
    return(
      <div>

        <div className="line-numbers">
          <p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34</p>
        </div>
        <div className="divider">
        </div>

        <div className="about-content-container">

          <div className="comments">
              <p>//this is a comment.</p>
              <p>// This is a comment.</p>
              <p>// This is a comment.</p> 
          </div>

            <div className="about-main-section">
             
              <ul className="about-list">
                <li>
                  <p><span style={{ color: "#86FFF8"}}>.name</span> &#123; </p>
                    <p className="tag-info">Tyler Cauley</p>
                  <p>&#125;</p>
                </li>
                <li>
                  <p><span style={{ color: "#8000FF"}}>.bio</span> &#123; </p>
                    <p className="tag-info">I am a Web Developer based in Charlotte, NC. A graduate from the UNC Charlotte Full-Stack Web Development program. I love this craft because it is a never ending learning experience which means the bar is always being raised. It allows me to use my creative mind while developing a user friendly product that accommodates a smooth experience making it easy for your clients to navigate headache free. When I am not coding I can be found road cycling or traveling.</p>
                  <p>&#125;</p>
                </li>
                <li>
                  <p><span style={{ color: "#FF0000"}}>.skills</span> &#123; </p>
                    <p className="tag-info">Web: HTML, CSS, JS, NodeJS, ExpressJS;</p>
                    <p className="tag-info">Web: jQuery, API, ReactJS;</p>
                    <p className="tag-info">Framework: Materialize, Foundation;</p>
                    <p className="tag-info">Framework: BootStrap, Boulma;</p>
                    <p className="tag-info">Dev: Git;</p>
                    <p className="tag-info">Database: MySQL, MongoDB;</p>
                    <p className="tag-info">Cloud Platform: Heroku;</p>
                  <p>&#125;</p>
                </li>
              </ul>

              <div className="about-image-container">
                <img src={picture} /> 
              </div>

            </div>  
                     

        </div>
      </div>
  
    )
    
  }
}

export default Bio
