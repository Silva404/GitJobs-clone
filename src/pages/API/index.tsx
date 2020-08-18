import React from "react";

import { Container, Title, TextContainer } from "./styles";
import { Link } from "react-router-dom";

const API: React.FC = () => {
  return (
    <Container>
      <Title>
        <h1>The GitHub Jobs API</h1>
      </Title>
      <TextContainer>
        <p>The GitHub Jobs API allows you to search, and view jobs with JSON over
          HTTP. </p>
          <p>To get the JSON representation of any search result or job
          listing, append .json to the URL you'd use on the HTML GitHub Jobs
          site. </p>
          <p>For example, when searching for Python jobs near New York on the site I am taken to this url:</p>
          <Link to="https://jobs.github.com/positions?description=python&location=new+york">https://jobs.github.com/positions?description=python&location=new+york</Link>
          <p>To get the JSON representation of those jobs I just use
          positions.json:</p>
          <Link to="https://jobs.github.com/positions.json?description=python&location=new+york">https://jobs.github.com/positions.json?description=python&location=new+york</Link>  
      </TextContainer>
    </Container>
  );
};

export default API;
