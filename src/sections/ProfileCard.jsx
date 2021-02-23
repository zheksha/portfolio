import React from "react";
import avatar from "../images/users/Profile-pic.jpg";

const ProfileCard = () => {
  return (
    <div className="profile-card row bg-dark py-5 px-4  text-center d-flex flex-column align-items-center ">
      <div className="avatar d-flex">
        <img src={avatar} alt="avatar" />
      </div>
      <h4 className="text-light">Ulan Zhekshenbek</h4>
      <p className="text-muted small p-0 m-0 ">Fullstack Developer</p>
      <div className="contact-info  d-flex flex-column align-items-start mt-5 p-0 m-0 ">
        <p className="email text-light m-0">
          <i className="fas fa-envelope"></i> :{" "}
          <a href="mailto: zheksha@gmail.com">somework@email.com</a>
        </p>
        <p className="telegram text-light m-0">
          <i className="fab fa-telegram-plane"></i> :{" "}
          <a className="btn-link" href="https://t.me/zheksha" target="blank">
            t.me/zheksha
          </a>
        </p>
        <p className="telegram text-light m-0">
          <i className="fab fa-github"></i> :{" "}
          <a href="https://github.com/zheksha" target="blank">
            zheksha
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
