import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class PublicPhotos extends Component {
    
    constructor(){
        super()
        this.state = {data: {}, image: ''}
    }

    addfave = async () => {
        await fetch('http://localhost:1234/fave', {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({
                title: this.state.data.title,
                author: this.state.data.author,
                description: this.state.data.description,
                published: this.state.data.published,
                tags: this.state.data.tags,
                image: this.state.image,
            })
        })
        .then((res) => res.json())
        .then((res) => {
            toast.success("❤ Photo added to your favorites!")
        })
    }

    render(){
        return (
            <section className="templateux-portfolio-overlap" id="next">
                <ToastContainer position="top-right"/>
                <div className="container">
            
                <div className="row">

                    {/* gallery */}
                    {this.props.photos.map((i, j) => (
                    <div onClick={
                        () => {this.setState({
                            data: {
                                title: i.title,
                                author: i.author.split('"')[1],
                                description: i.description,
                                published: i.published.split('T')[0],
                                tags: i.tags.split('').length > 0 ? i.tags.split(' ') : '' 
                            }, 
                            image: i.media.m})}
                    } 
                    key={j} className="col-lg-4 col-md-6" data-aos="fade-up">
                    <div className="project">
                        <figure className="figure">
                        <img style={{width: '600px', height: '300px', objectFit: 'cover'}}
                        src={i.media.m} alt="flickr" className="figure-img img-fluid rounded img-fluid"/>  
                        </figure>
                        <div data-toggle="modal" data-target="#exampleModalCenter" className="project-hover">
                            <div className="project-hover-inner">
                                <h2>
                                    {i.title.length > 20
                                    ?
                                    i.title.slice(0,19) + '...'
                                    :
                                    i.title
                                    }
                                </h2>
                                <span>
                                    <i className="mr-1 fas fa-user"></i>
                                    {i.author.split('"')[1]}
                                </span>
                                <br></br>
                                <span>
                                    {i.tags.split('').length > 0 ? <i className="mr-1 fas fa-tag"></i> : ''}
                                    {i.tags.split(' ').length > 0 
                                    ?
                                    i.tags.split(' ').slice(0, 3).map((k, l) => (
                                        <span key={l} className="mr-1 badge badge-secondary">
                                        {k}
                                        </span>
                                    ))
                                    :
                                    ''
                                    }
                                </span>
                            </div>
                            
                            {/* <span
                            style={{position:'relative', top:250, left:290}}>
                                <button className="btn btn-light">
                                <i style={{color:'red'}} className="fas fa-heart"></i>
                                </button>
                            </span> */}

                        </div>
                    </div>
                    </div>
                    ))}
                    
                </div>
                </div>
                
                {/* modal */}
                <div 
                className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" 
                aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">
                                {this.state.data.title}
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <span
                            style={{width: '600px', height: '300px', objectFit: 'cover'}} 
                            dangerouslySetInnerHTML={{__html: this.state.data.description}}>
                            </span>
                            <hr/>
                            <ul style={{listStyle: 'none'}}>
                                <li><i className="mr-2 fas fa-user"></i>{this.state.data.author}</li>
                                <li><i className="mr-2 fas fa-tag"></i>{this.state.data.tags ? this.state.data.tags : 'No tags'}</li>
                                <li><i className="mr-2 far fa-clock"></i>{this.state.data.published}</li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button onClick={this.addfave}
                            type="button" className="btn btn-primary">
                                <i className="ml-1 fas fa-heart"></i> Favorite
                            </button>
                        </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

export default PublicPhotos;