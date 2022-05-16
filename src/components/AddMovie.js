import { Button, Modal, Form } from "react-bootstrap";
import React, { useState } from "react";

const AddMovie = ({ addmovie }) => {
  const [movie, setmovie] = useState({});

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setmovie({ ...movie, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <>
        <Button variant="primary" onClick={handleShow}>
          Movie Title
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
              <Form.Group className="mb-3">
                <Form.Label>Movie Title</Form.Label>
                <Form.Control
                  name="name"
                  placeholder="write here"
                  type="text"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Movie description</Form.Label>
                <Form.Control
                  name="description"
                  placeholder="write here"
                  type="text"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>insert image</Form.Label>
                <Form.Control
                  name="posterURL"
                  placeholder="write here"
                  type="text"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>rating</Form.Label>
                <Form.Control
                  name="rate"
                  placeholder="write here"
                  type="number"
                  onChange={handleChange}
                />
              </Form.Group>
            </>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                addmovie(movie);
                handleClose();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default AddMovie;
