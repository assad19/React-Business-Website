import React from 'react'
import { Link } from "react-router-dom";

const header = () => {
  return (<>
    <div class="hero_area">
    <header class="header_section">
      <div class="header_top">
        <div class="container-fluid">
          <div class="contact_nav">
            <a href="">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call : +01 123455678990
              </span>
            </a>
            <a href="">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <span>
                Email : demo@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="header_bottom">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="index.html">
              <span>
                Inance
              </span>
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class=""> </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ">
                <li class="nav-item active">
                <Link to={"/"}>Home</Link>
                </li>
                <li class="nav-item">
                <Link to={"/about"}>About Us</Link>
                  
                </li>
                <li class="nav-item">
                <Link to={"/service"}>Services</Link>
                </li>

                <li class="nav-item">
                <Link to={"/contact"}>Contact Us</Link>
                </li>

                <li class="nav-item">
                <Link to={"/todos"}>Todos</Link>
                </li>


              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <section class="slider_section ">
      <div class="container ">
        <div class="row">
          <div class="col-md-6 ">
            <div class="detail-box">
              <h1>
                Repair and <br />
                Maintenance <br />
                Services
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur, tempora iusto, ad possimus soluta hic praesentium mollitia consequatur beatae, aspernatur culpa.
              </p>
              <a href="">
                Contact Us
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="img-box">
              <img src="../../../images/slider-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  </>)
}

export default header