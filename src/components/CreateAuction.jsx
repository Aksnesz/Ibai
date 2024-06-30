// src/components/CreateAuction.js
import React, { useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Container, Form, Button } from 'react-bootstrap';

const CreateAuction = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startingBid, setStartingBid] = useState(0);

  const handleCreateAuction = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'auctions'), {
        title,
        description,
        currentBid: startingBid,
        bids: [],
      });
      alert('Auction created successfully');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container>
      <h2>Create Auction</h2>
      <Form onSubmit={handleCreateAuction}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formStartingBid">
          <Form.Label>Starting Bid</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter starting bid"
            value={startingBid}
            onChange={(e) => setStartingBid(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </Container>
  );
};

export default CreateAuction;
