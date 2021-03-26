import React from "react";

const ContactMe = () => {
  return (
    <div className="contactme  mt-3 p-3 pb-5 bg-white ">
      <form>
        <h4 className="header-title mt-2 mb-3">Contact me</h4>
        <div className="row ">
          <div className="col-md-4 mt-3">
            <div className="row ">
              <div className="d-flex align-items-top">
                <div className="d-flex align-items-center">
                  <i className="fas fa-phone-volume"></i>
                </div>
                <div className="d-flex flex-column ml-3 ">
                  <h5 className="p-0 mt-0 mb-1">Call me:</h5>
                  <span>+1 123 4567 890</span>
                </div>
              </div>
            </div>

            <div className="row py-4">
              <div className="d-flex align-items-top">
                <div className="d-flex align-items-center">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="d-flex flex-column ml-3 ">
                  <h5 className="p-0 mt-0 mb-1">Mail me:</h5>
                  <span>zheksha@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6 form-group">
                <label className="mb-1">Name</label>
                <input type="text" required className="form-control" />
              </div>

              <div className="col-md-6 form-group">
                <label className="mb-1">Email address</label>
                <input type="email" required className="form-control" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12 form-group">
                <label className="mb-1">Email address</label>
                <textarea rows="4" type="email" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mt-3">
                <button type="submit" className="btn btn-primary px-4">
                  Submit form
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div
        className="LI-profile-badge mt-5"
        data-version="v1"
        data-size="large"
        data-locale="en_EN"
        data-type="horizontal"
        data-theme="light"
        data-vanity="zheksha"
      >
        <a
          class="LI-simple-link"
          href="https://www.linkedin.com/in/zheksha?trk=profile-badge"
          target="blank"
        >
          Ulan Z.
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
