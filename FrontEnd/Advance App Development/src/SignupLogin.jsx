import React from 'react';
import './SignupLogin.css';

class YourComponent extends React.Component {
  handleBtnClick = () => {
    document.querySelector(".form-signin").classList.toggle("form-signin-left");
    document.querySelector(".form-signup").classList.toggle("form-signup-left");
    document.querySelector(".frame").classList.toggle("frame-long");
    document.querySelector(".signup-inactive").classList.toggle("signup-active");
    document.querySelector(".signin-active").classList.toggle("signin-inactive");
    document.querySelector(".forgot").classList.toggle("forgot-left");
    // Add or remove classes as needed
    // $(this).removeClass("idle").addClass("active");
  }

  handleBtnSignupClick = () => {
    document.querySelector(".nav").classList.toggle("nav-up");
    document.querySelector(".form-signup-left").classList.toggle("form-signup-down");
    document.querySelector(".success").classList.toggle("success-left");
    document.querySelector(".frame").classList.toggle("frame-short");
  }

  handleBtnSigninClick = () => {
    document.querySelector(".btn-animate").classList.toggle("btn-animate-grow");
    document.querySelector(".welcome").classList.toggle("welcome-left");
    document.querySelector(".cover-photo").classList.toggle("cover-photo-down");
    document.querySelector(".frame").classList.toggle("frame-short");
    document.querySelector(".profile-photo").classList.toggle("profile-photo-down");
    document.querySelector(".btn-goback").classList.toggle("btn-goback-up");
    document.querySelector(".forgot").classList.toggle("forgot-fade");
  }

  render() {
    return (
      <div>
        {/* Your JSX code here */}
      </div>
    );
  }
}

export default YourComponent;
