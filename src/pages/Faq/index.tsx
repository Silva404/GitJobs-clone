import React from "react";
import { Link } from "react-router-dom";

import Visa from '../../Assets/images/visa.svg'
import Master from '../../Assets/images/master-card.svg'
import American from '../../Assets/images/american-express.svg'

import {
  Container,
  Title,
  Footer,
  Cards,
  Card,
  Box,
  Price,
  CreditCards,
} from "./styles";

const Faq: React.FC = () => {
  return (
    <Container>
      <Title>
        <h1>How GitHub Jobs Works</h1>
        <h3>
          GitHub Jobs is a great place attract the best technical talent for
          your company's open software development positions. Here's how:
        </h3>
      </Title>

      <Cards>
        <Card>
          <img
            src="https://jobs.github.com/images/modules/faq/screenshot-editor.jpg"
            alt="Create & preview your listing"
          />
          <h4>Create & preview your listing</h4>
          <p>
            See exactly how your listing will look before you publish live.
            Before creating a listing, you must login with your GitHub account
            and verify your email address.
          </p>
        </Card>
        <Card>
          <Box>
            <Price>
              <h1>
                <span>$</span>450.00
              </h1>
              <p>per listing</p>
            </Price>
            <CreditCards>
              <img src={Visa} alt="Visa Card"/>
              <img src={Master} alt="Master Card"/>
              <img src={American} alt="American Express Card"/>
              <img src={Visa} alt="Visa Card"/>
              <img src={Master} alt="Master Card"/>
              <img src={American} alt="American Express Card"/>
            </CreditCards>
          </Box>
          <h4>Pay with a major credit card</h4>
          <p>
            Invoicing available on request for bulk orders. Email
            <Link to="jobs@github.com">jobs@github.com </Link>
            for more info. Sorry, no recruitment agencies.
          </p>          
        </Card>
        <Card>
          <img
            src="https://jobs.github.com/images/modules/faq/screenshot-editor.jpg"
            alt="Create & preview your listing"
          />
          <h4>Your listing goes live immediately</h4>
          <p>
            Listings are live for 30 days. We’ll send you a receipt and a link
            to change the listing.
          </p>
        </Card>
      </Cards>

      <Footer>
        <h3>
          Questions? Submit a request via our
          <Link to="https://support.github.com/contact?tags=jobs-support">
            contact form{" "}
          </Link>
          and let's talk.
        </h3>
      </Footer>
    </Container>
  );
};

export default Faq;
