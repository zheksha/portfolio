import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-dark d-flex justify-content-center align-items-center py-2 px-5">
      <p className="text-light p-0 m-0">Zheksha</p>
      <button className="btn btn-primary ml-auto px-4">
        <i className="fas fa-print mr-1"></i> Print
      </button>
    </nav>
  );
};

export default NavBar;
