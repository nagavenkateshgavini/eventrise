import { Accordion } from "react-bootstrap";

function FAQSection() {
  return (
    <section className="faq-section mb-5 py-5">
      <div className="row">
        <div className="col">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                How to book a ticket from this site?
              </Accordion.Header>
              <Accordion.Body>
                It’s easy to find a destination for your holiday, but not so
                easy to book a flight. What’s stopping you? Here’s how you can
                book a flight ticket online hassle-free.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How to attend events?</Accordion.Header>
              <Accordion.Body>
                In other words, look at the mistakes at the highest level of
                sports. A mistake can be traced back to the fundamentals. A
                player moves their feet or alters their shot or kick. In hockey,
                they don't backcheck, and in basketball, the players stop
                playing defense, assuming their offense will cover for them.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                How to make payments from this site?
              </Accordion.Header>
              <Accordion.Body>
                Offering more than one option could help you attract a wider
                variety of customers and allow your customers to make larger
                purchases. However, there are advantages, disadvantages and
                costs associated with each payment type.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                How to tranfer my tickets to friends?
              </Accordion.Header>
              <Accordion.Body>
                Offering more than one option could help you attract a wider
                variety of customers and allow your customers to make larger
                purchases. However, there are advantages, disadvantages and
                costs associated with each payment type.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
