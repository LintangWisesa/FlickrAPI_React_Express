import React, { Component } from 'react';

class PublicPhotos extends Component {
    
    constructor(){
        super()
        this.state = {data: {}, image: ''}
    }

    render(){
        return (
            <section className="templateux-portfolio-overlap" id="next">
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
                                published: i.published,
                                tags: i.tags.split('').length > 0 ? i.tags.split('') : '' 
                            }, 
                            image: i.media.m})}
                    } 
                    key={j} data-toggle="modal" data-target="#exampleModalCenter"
                    className="col-lg-4 col-md-6" data-aos="fade-up">
                    <div className="project">
                        <figure className="figure">
                        <img style={{width: '600px', height: '300px', objectFit: 'cover'}}
                        src={i.media.m} alt="flickr" className="figure-img img-fluid rounded img-fluid"/>  
                        </figure>
                        <div className="project-hover">
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
                        <span style={{position:'relative', top:250, left:290}}>
                            <button className="btn btn-light">
                            <i style={{color:'red'}} className="fas fa-heart"></i>
                            </button>
                        </span>
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
                            {/* <img style={{width: '600px', height: '300px', objectFit: 'cover'}} 
                            src={this.state.image} className="rounded img-fluid" alt="Responsive"/>
                            <i className="mr-1 fas fa-user"></i>{this.state.data.author}
                            <span>
                                {this.state.data.tags ? <i className="mr-1 fas fa-tag"></i> : ''}
                                {this.state.data.tags
                                ?
                                this.state.data.tags
                                :
                                ''
                                }
                            </span> */}
                            <span
                            style={{width: '600px', height: '300px', objectFit: 'cover'}} 
                            dangerouslySetInnerHTML={{__html: this.state.data.description}}>
                            </span>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

export default PublicPhotos;