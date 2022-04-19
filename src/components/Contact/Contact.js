import React, { useState } from "react";
import "./Contact.css";
import contact1 from "../../pic/contact1.jpg";
const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `My name is ${data.fullname}.
        My phone number is ${data.phone}.
        My email is ${data.email}.
        My subject is ${data.subject}.
        My message is ${data.message}`
    );
  };
  return (
    <>
      <section className="contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>Contact</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shodow">
                <div className="img">
                  <img src={contact1} alt="" />
                </div>
                <div className="details">
                  <h1>Contact Me</h1>
                  <p>
                    I am avaiable for freelance work. Connect with me via and
                    call in to my account.
                  </p>
                  <br/>
                  <p>Phone: +48539221948</p>
                  <p>Email: vintik.kirill@gmai.com</p>
                  <span>FIND WITH ME</span>
                  <div className="button f_flex">
                    <button className="btn_shadow">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button className="btn_shadow">
                      <i className="fab fa-github"></i>
                    </button>
                    <button className="btn_shadow">
                      <i className="fab fa-linkedin-in"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="right box_shodow">
              <form onSubmit={handleSubmit}>
                <div className="f_flex">
                  <div className="input row">
                    <span>YOUR NAME</span>
                    <input
                      type="text"
                      name="fullname"
                      value={data.fullname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input row">
                    <span>YOUR NUMBER</span>
                    <input
                      type="phone"
                      name="phone"
                      value={data.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="input ">
                  <span>EMAIL</span>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="input ">
                  <span>SUBJECT</span>
                  <input
                    type="text"
                    name="subject"
                    value={data.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="input ">
                  <span>YOUR MESSAGE</span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                  />
                </div>
                <button className="btn_shadow">
                  SEND MESSAGE <i className="fa fa-long-arrow-down"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
