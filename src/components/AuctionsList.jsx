// src/components/AuctionsList.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Container, Card } from 'react-bootstrap';

const AuctionsList = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    const fetchAuctions = async () => {
      const querySnapshot = await getDocs(collection(db, 'auctions'));
      const auctionsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAuctions(auctionsList);
    };

    fetchAuctions();
  }, []);

  return (
    <Container>
      <h2>Auctions</h2>
      {auctions.map((auction) => (
        <Card key={auction.id} className="mb-3">
          <Card.Body>
            <Card.Title>{auction.title}</Card.Title>
            <Card.Text>{auction.description}</Card.Text>
            <Card.Text>Starting Bid: {auction.startingBid}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default AuctionsList;
