import React, { Component } from 'react';
import './App.css';
import PublicPhotos from './Components/PublicPhotos'
// import FavePhotos from './Components/FavePhotos'

class App extends Component {
  
  constructor(){
    super()
    this.state = {photos: []}
  }
  
  componentDidMount(){
    fetch('http://localhost:1234/photos')
    .then((res) => res.json())
    .then((res) => {
      // console.log(res)
      this.setState({photos: res.items})
    })
  }

  render(){
      
    return(
      
      <div className="js-animsition animsition" data-animsition-in-className="fade-in" data-animsition-out-className="fade-out">

      <header style={{zIndex:1, background:'white', position: 'fixed', top: 0, width: '100%'}} 
      className="templateux-navbar" data-aos="fade-down">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-6"><div className="site-logo">
            <a href="/" className="animsition-link">
              <b>Flickr</b> Public Photos
            </a></div></div>
            <div className="col-sm-6 col-6 text-right">

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

      <section className="my-3 templateux-hero">
      </section>
      
      <PublicPhotos photos={this.state.photos}/>

      <a href="/" className="templateux-section templateux-cta animsition-link mt-5" data-aos="fade-up">
        <div className="container-fluid">
          <div className="cta-inner">
            <h2><span className="words-1">Start a Project.</span> <span className="words-2">Let's chat we are good people.</span></h2>
          </div>
        </div>
      </a>

    </div>

    )
  }
}

export default App;
