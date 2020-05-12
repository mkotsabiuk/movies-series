import React, { Component } from "react";

export class MovieCard extends Component {
  render() {
    const {movie} = this.props
    return (    
    <div>
        <div className="col-md-3 md-5">
            <div className="card card-body bg-dark text-center h-100">
                <img src={movie.Poster} alt="Movie Cover" className="w-100 mb-2"/>
                <h5 className="text-light card-title">
                    {movie.Title} - {movie.Year}
                    <a href="#" className="btn btn-primary">
                        Movie Details
                    </a>
                    <i className="fas fa-chevron-right"></i>
                </h5>

            </div>

        </div>
    </div>
    );
  }
}

export default MovieCard;
