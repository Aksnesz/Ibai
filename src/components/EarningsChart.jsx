// src/components/EarningsChart.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import { Container } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const EarningsChart = () => {
  const [earningsData, setEarningsData] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchEarnings = async () => {
      const q = query(collection(db, 'auctions'), where('userId', '==', user.uid));
      const querySnapshot = await getDocs(q);
      const earnings = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEarningsData(earnings);
    };

    if (user) {
      fetchEarnings();
    }
  }, [user]);

  const data = {
    labels: earningsData.map((auction) => auction.title),
    datasets: [
      {
        label: 'Earnings',
        data: earningsData.map((auction) => auction.currentBid),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
      },
    ],
  };

  return (
    <Container>
      <h2>Earnings Chart</h2>
      <Line data={data} />
    </Container>
  );
};

export default EarningsChart;
