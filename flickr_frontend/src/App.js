import React from 'react';
import './App.css';

const App = () => {
  return (
    
    <div class="js-animsition animsition" data-animsition-in-class="fade-in" data-animsition-out-class="fade-out">

    <header class="templateux-navbar" data-aos="fade-down">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-3 col-3"><div class="site-logo"><a href="index.html" class="animsition-link">
            Flickr API
          </a></div></div>
          <div class="col-sm-9 col-9 text-right">

            <button class="hamburger hamburger--spin toggle-menu ml-auto js-toggle-menu" type="button">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>  

            <nav class="templateux-menu js-templateux-menu" role="navigation">
              <ul class="list-unstyled">
                <li class="">
                  <form>
                    <div class="row">
                      <button class="col-sm-2 button button--red">
                        <i class="fas fa-search"></i>
                      </button>
                      <input type="text" class="col-sm-10 form-control" placeholder="Search for tags ..."/>
                    </div>
                  </form>
                </li>
                </ul>
            </nav>  
          </div>
        </div>
      </div>
    </header>

    <section class="templateux-hero">
    </section>
    
    <section class="templateux-portfolio-overlap" id="next">
      <div class="container-fluid">
    
        <div class="row">
          <div class="col-lg-4 col-md-6" data-aos="fade-up">
            <a class="project animsition-link" href="work-single.html">
              <figure>
                <img src="images/img_3.jpg" alt="Free Template" class="img-fluid"/>  
              </figure>
              <div class="project-hover">
                <div class="project-hover-inner">
                  <h2>Moon High Res</h2>
                  <span>View Case Study</span>
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <a class="project animsition-link" href="work-single.html">
              <figure>
                <img src="images/img_4.jpg" alt="Free Template" class="img-fluid"/>  
              </figure>
              <div class="project-hover">
                <div class="project-hover-inner">
                  <h2>H20 Water Bottle</h2>
                  <span>View Case Study</span>
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <a class="project animsition-link" href="work-single.html">
              <figure>
                <img src="images/img_5.jpg" alt="Free Template" class="img-fluid"/>  
              </figure>
              <div class="project-hover">
                <div class="project-hover-inner">
                  <h2>Creatsy Mailing Box</h2>
                  <span>View Case Study</span>
                </div>
              </div>
            </a>
          </div>
          
        </div>
      </div>
    </section>

    <a class="templateux-section templateux-cta animsition-link mt-5" href="contact.html" data-aos="fade-up">
      <div class="container-fluid">
        <div class="cta-inner">
          <h2><span class="words-1">Start a Project.</span> <span class="words-2">Let's chat we are good people.</span></h2>
        </div>
      </div>
    </a>

  </div>

  );
}

export default App;
