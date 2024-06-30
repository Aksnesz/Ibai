// src/components/AuctionDetails.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { Container, Card, ListGroup } from 'react-bootstrap';

const AuctionDetails = () => {
  const { id } = useParams();
  const [auction, setAuction] = useState(null);

  useEffect(() => {
    const fetchAuction = async () => {
      const auctionDoc = await getDoc(doc(db, 'auctions', id));
      if (auctionDoc.exists()) {
        setAuction(auctionDoc.data());
      } else {
        alert('Auction not found');
      }
    };

    fetchAuction();
  }, [id]);

  return (
    <Container>
      {auction ? (
        <>
          <h2>{auction.title}</h2>
          <Card>
            <Card.Body>
              <Card.Text>{auction.description}</Card.Text>
              <Card.Text>Current Bid: ${auction.currentBid}</Card.Text>
              <ListGroup>
                <ListGroup.Item>
                  <strong>Bids:</strong>
                </ListGroup.Item>
                {auction.bids.map((bid, index) => (
                  <ListGroup.Item key={index}>
                    {bid.user}: ${bid.amount}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default AuctionDetails;
