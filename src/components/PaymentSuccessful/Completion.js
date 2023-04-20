import { Container, Button, ButtonGroup, Card } from "react-bootstrap";
import "./styles.css";

function sendToHomepage() {
  //Need to redirect
}

function Completion() {
  return (
    <Container className="py-4">
      <div className="background-image background-image-bright"></div>
      <Card className="registration-card">
        <h4 className="text-center mb-4" style={{ color: "white" }}>
          Congratulations, your payment is successful! <br /> You will receive
          the ticket to your registered email address shortly!
        </h4>
        <div className="mainComponent">
          <div className="d-flex justify-content-center">
            <ButtonGroup>
              <Button
                className="payment-btn payment-btn-secondary"
                onClick={sendToHomepage}
              >
                Great! Take me back to the Home page.
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </Card>
    </Container>
  );
}

export default Completion;