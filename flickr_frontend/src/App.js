import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch('http://localhost:1234/photos')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setPhotos(res.items)
      })
  }, [])

  return (
    
    <div className="js-animsition animsition" data-animsition-in-className="fade-in" data-animsition-out-className="fade-out">

    <header style={{background:'white', position: 'fixed', top: 0, width: '100%'}} 
    className="templateux-navbar" data-aos="fade-down">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 col-3"><div className="site-logo">
          <a href="/" className="animsition-link">
            <b>Flickr</b> Public Photos
          </a></div></div>
          <div className="col-sm-9 col-9 text-right">

            <button className="hamburger hamburger--spin toggle-menu ml-auto js-toggle-menu" type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>  

            <nav className="templateux-menu js-templateux-menu" role="navigation">
              <ul className="list-unstyled">
                <li className="">
                  <form>
                    <div className="row">
                      <button className="mx-2 col-sm-2 btn btn-danger">
                        <i className="fas fa-search"></i>
                      </button>
                      <input type="text" className="col-sm-8 form-control" 
                      placeholder="Search for tags ..."/>
                    </div>
                  </form>
                </li>
                </ul>
            </nav>  
          </div>
        </div>
      </div>
    </header>

    <section className="templateux-hero">
    </section>
    
    <section className="templateux-portfolio-overlap" id="next">
      <div className="container">
    
        <div className="row">

          {photos.map((i, j) => (
            <div key={j} className="col-lg-4 col-md-6" data-aos="fade-up">
            <a href="/" className="project animsition-link">
              <figure className="figure">
                <img style={{width: '600px', height: '300px', objectFit: 'cover'}}
                src={i.media.m} alt="Free Template" className="figure-img img-fluid rounded img-fluid"/>  
              </figure>
              <div className="project-hover">
                <div className="project-hover-inner">
                  <h2>{i.title}</h2>
                  <span>
                    <i className="mr-1 fas fa-user"></i>
                    {i.author.split('"')[1]}
                  </span>
                  <br></br>
                  <span>
                    <i className="mr-1 fas fa-tag"></i>
                    {i.tags.split(' ').slice(0, 3).map((k, l) => (
                      <span key={l} className="mr-1 badge badge-secondary">
                        {k}
                      </span>
                    ))}
                  </span>
                </div>
                <span style={{position:'relative', top:250, left:290}}>
                  <button className="btn btn-light">
                    <i style={{color:'red'}} className="fas fa-heart"></i>
                  </button>
                </span>
              </div>
            </a>
          </div>
          ))}
          
        </div>
      </div>
    </section>

    <a href="/" className="templateux-section templateux-cta animsition-link mt-5" data-aos="fade-up">
      <div className="container-fluid">
        <div className="cta-inner">
          <h2><span className="words-1">Start a Project.</span> <span className="words-2">Let's chat we are good people.</span></h2>
        </div>
      </div>
    </a>

  </div>

  );
}

export default App;
