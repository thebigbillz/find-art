import React, { Component } from 'react';

import '../css/Artwork.css';
import { Link } from 'react-router-dom';

class Artwork extends Component {
  render() {
    const { id, imageUrl, name, description } = this.props.artworks;
    return (
      <div className="container-artwork-url">
        <Link to={`/artwork/bid/${id}`}>
          <img className="artwork-image" src={imageUrl} alt="art work" />
        </Link>
        <div className="artwork-title">{name}</div>
        <div className="artwork-description">{description}</div>
      </div>
    );
  }
}

export default Artwork;
