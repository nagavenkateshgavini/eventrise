import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Button, ButtonGroup, Modal, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import CardAmount from "../../common/CardPayment/CardAmount";
import "./styles.css";

const erc20Abi = require("../../abi/abi.json");
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const SELLER_ADDRESS = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";

const PaymentEntry = () => {
  const { totalAmount } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [provider, setProvider] = useState(null);

  const handleConnectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setProvider(new ethers.providers.Web3Provider(window.ethereum));
        setShowModal(false);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("Please install MetaMask or another compatible wallet to connect.");
    }
  };

  const handleButton1Click = async () => {
    console.log(provider);
    if (!provider) {
      setShowModal(true);
      return;
    }

    const signer = await provider.getSigner();

    const tokenContract = new ethers.Contract(
      CONTRACT_ADDRESS,
      erc20Abi,
      signer
    );

    const paymentAmount = ethers.utils.parseUnits(totalAmount, 18);

    try {
      const tx = await tokenContract.transfer(SELLER_ADDRESS, paymentAmount);
      await tx.wait();
      console.log("Payment transfer successful");
      navigate("/completion");
    } catch (error) {
      console.error("Error sending payment transfer:", error);
    }
  };

  const handleModalClose = () => setShowModal(false);

  const handleButton2Click = async () => {
    const ticketData = {
      userID: 1,
      eventID: 1,
      paymentType: "cards",
      createdTime: new Date(),
    };

    try {
      const response = await fetch("http://localhost:3000/api/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ticketData),
      });

      if (response.ok) {
        console.log("Ticket added successfully");
      } else {
        console.log("Error adding ticket");
      }
    } catch (error) {
      console.error("Error adding ticket:", error);
    }

    navigate("/payment/cards/" + totalAmount);
  };

  return (
    <Container className="py-4">
      <div className="background-image background-image-dark"></div>
      <Card className="registration-card">
        <h1 className="text-center mb-4">Payment Portal</h1>
        <div className="mainComponent">
          <CardAmount totalAmount={totalAmount} />
          <div className="d-flex justify-content-center">
            <ButtonGroup>
              <Button
                className="payment-btn payment-btn-primary"
                onClick={handleButton1Click}
              >
                Pay using Crypto
              </Button>
              <Button
                className="payment-btn payment-btn-secondary"
                onClick={handleButton2Click}
              >
                Pay using Debit/Credit cards
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </Card>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Connect Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please connect your wallet to proceed with the crypto payment.</p>
          <Button onClick={handleConnectWallet}>Connect Wallet</Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default PaymentEntry;
