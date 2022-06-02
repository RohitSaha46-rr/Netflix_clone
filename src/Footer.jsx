import React from 'react'
import './footer.css';
const Footer = () => {
    const fb=()=>{
        window.open("https://www.facebook.com/NetflixIN/");
    }
    const insta=()=>{
        window.open("https://www.instagram.com/Netflix_IN/");
    }
    const twitter=()=>{
        window.open("https://twitter.com/netflixindia");
    }
    const youtube=()=>{
        window.open("https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg");
    }
  return (
    <div className='footer '>
        <div className='container'>
            <div className='box1'>
            <i className="fab fa-facebook" id="ic" style={{color:"#4267B2"}} onClick={fb}></i>
       <i className="fab fa-twitter ps-4" id="ic" style={{color:"#00acee"}} onClick={insta}></i>
       <i className="fab fa-instagram ps-4" id="ic" style={{color:"#833AB4"}} onClick={twitter}></i>
       <i className="fab fa-youtube ps-4" id="ic" style={{color:"red"}} onClick={youtube}></i>
            </div>
            <div className='box2 mt-3'>
                <p>Audio and Subtitles</p>
                <p>Audio Description</p>
                <p>Help Centre</p>
                <p>Gift Cards</p>
            </div>
            <div className='box2 mt-2'>
                <p>Media Centre</p>
                <p>Investor Relations</p>
                <p>Jobs</p>
                <p>Terms Of Use</p>
            </div>
            <div className='box2 mt-2'>
                <p>Privacy</p>
                <p>Legal Notices</p>
                <p>Cookie Preferences</p>
                <p>Corporate Information</p>
            </div>
            <div className='box2 mt-2'>
                <p>Contact Us</p>
                
            </div>
            <button type="button" className="btn btn-outline-secondary mt-2">Service Code</button>
            <p className='mt-2'>@1997-2022 Netflix,@ Made By Rohit Saha</p>
        </div>
    </div>
  )
}

export default Footer