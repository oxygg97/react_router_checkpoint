import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Moviecards = ({ movie }) => {
  return (
    <div>
      <Link to={`/trailer/${movie.title}`}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={movie.posterUrl} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.description}</Card.Text>
          </Card.Body>
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            value={movie.rate}
            edit={false}
          />
        </Card>
      </Link>
    </div>
  );
};

export default Moviecards;
