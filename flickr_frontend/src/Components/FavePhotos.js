import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class FavePhotos extends Component {
    
    constructor(){
        super()
        this.state = {photos: [], data: {}, image: ''}
    }

    delFave = async(index) => {
        await fetch(`http://localhost:1234/fave/${index}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
        })
        .then((res) => toast.error("❤ Photo removed from your favorites!"))
        .then((res) => {
          this.getFave()
        })
    }

    getFave = async () => {
        await fetch(`http://localhost:1234/fave`)
        .then((res) => res.json())
        .then((res) => {
            this.setState({photos: res})
        })
    }

    componentDidMount(){
        this.getFave()
    }

    render(){
        return (
            <section className="templateux-portfolio-overlap" id="next">
                <ToastContainer position="top-left"/>
                <div className="container">

                    {this.state.photos.length > 0 ? '' : <h2>You don't have any favorite photos yet</h2>}

                <div className="row">

                    {/* gallery */}
                    {this.state.photos.map((i, j) => (
                    <div onClick={
                        () => {this.setState({
                            data: {
                                title: i.title,
                                author: i.author,
                                description: i.description,
                                published: i.published,
                                tags: i.tags.length > 0 ? i.tags : '',
                                image: i.image,
                                index: j
                            },
                            tags: i.tags.length > 0 ? i.tags : '',
                            })}
                    }
                    key={j} className="col-lg-4 col-md-6" data-aos="fade-up">
                    <div className="project">
                        <figure className="figure">
                        <img style={{width: '600px', height: '300px', objectFit: 'cover'}}
                        src={i.image} alt="flickr" className="figure-img img-fluid rounded img-fluid"/>  
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
                                    {i.author}
                                </span>
                                <br></br>
                                <span>
                                    {i.tags.length > 0 ? <i className="mr-1 fas fa-tag"></i> : ''}
                                    {i.tags.length > 0 
                                    ?
                                    i.tags.slice(0, 3).map((k, l) => (
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
                                <li><i className="mr-2 fas fa-tag"></i>{
                                    this.state.tags 
                                    ? 
                                    this.state.tags.map((i, j) => 
                                        (
                                            <span key={j} className="mr-1 badge badge-secondary">
                                            {i}
                                            </span>
                                        )
                                    ) 
                                    : 
                                    'No tags'
                                }</li>
                                <li><i className="mr-2 far fa-clock"></i>{this.state.data.published}</li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button data-dismiss="modal" onClick={()=>{this.delFave(this.state.data.index)}}
                            type="button" className="btn btn-dark">
                                <i className="ml-1 fas fa-trash"></i> Delete
                            </button>
                        </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

export default FavePhotos;