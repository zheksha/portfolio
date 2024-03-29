import React from "react";
import avatar from "../images/users/Profile.jpeg";

const ProfileCard = () => {
  return (
    <React.Fragment>
      <div className="profile-card row bg-dark py-5 px-4  text-center d-flex flex-column flex-wrap align-items-center ">
        <div className="avatar d-flex">
          <img src={avatar} alt="avatar" />
        </div>
        <h4 className="text-light">Ulan Z.</h4>
        <p className="text-muted small p-0 m-0 ">Fullstack Developer</p>
        <div className="contact-info  d-flex flex-column  flex-wrap align-items-start mt-5 p-0 m-0 ">
          <button className="btn   email text-light m-0">
            <i className="fas fa-envelope"></i> :{" "}
            <a href="mailto: zheksha@gmail.com">zheksha@gmail.com</a>
          </button>
          <button className="btn my-1   telegram text-light m-0">
            <i className="fab fa-telegram-plane"></i> :{" "}
            <a href="https://t.me/zheksha" target="blank">
              t.me/zheksha
            </a>
          </button>
          <button className="btn  telegram text-light m-0">
            <i className="fab fa-github"></i> :{" "}
            <a href="https://github.com/zheksha" target="blank">
              zheksha
            </a>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileCard;
