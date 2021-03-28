import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-dark d-flex  py-2 px-5 mb-5">
      <div className="container d-flex justify-content-center align-items-center">
        <p className="text-light p-0 m-0">Zheksha</p>
        <button
          onClick={() => window.print()}
          className="btn btn-primary ml-auto px-4"
        >
          <i className="fas fa-print mr-1"></i> Print
        </button>
      </div>
    </div>
  );
};

export default NavBar;
