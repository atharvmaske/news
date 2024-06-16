import React, { Component } from 'react';
import './Nitems.css'; 

class Nitems extends Component {
    render() {
        const { title, description, urlToImage, newsUrl } = this.props;

        return (
            <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
                <div className="card mb-4" style={{ minWidth: '18rem', minHeight: '25rem', maxWidth: '18rem', maxHeight: '25rem' }}>
                    <img src={urlToImage} className="card-img-top"  style={{ objectFit: 'cover',  minHeight: '10rem',maxHeight: '10rem' }}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-primary">Read In Detail</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nitems;
