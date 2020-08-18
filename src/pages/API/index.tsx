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
        <p>
          The GitHub Jobs API allows you to search, and view jobs with JSON over
          HTTP.{" "}
        </p>
        <p>
          To get the JSON representation of any search result or job listing,
          append .json to the URL you'd use on the HTML GitHub Jobs site.{" "}
        </p>
        <p>
          For example, when searching for Python jobs near New York on the site
          I am taken to this url:
        </p>
        <Link to="https://jobs.github.com/positions?description=python&location=new+york">
          https://jobs.github.com/positions?description=python&location=new+york
        </Link>
        <p>
          To get the JSON representation of those jobs I just use
          positions.json:
        </p>
        <Link to="https://jobs.github.com/positions.json?description=python&location=new+york">
          https://jobs.github.com/positions.json?description=python&location=new+york
        </Link>

        <h3>Pagination</h3>

        <p>
          The API also supports pagination. /positions.json, for
          example, will only return 50 positions at a time. You can paginate results
          by adding a page parameter to your queries.
        </p>

        <p>
          Pagination starts by default at <strong>0</strong>.
        </p>

        <p>
          <b>Examples</b>
        </p>

        <ul>
          <li><Link to="https://jobs.github.com/positions.json?description=ruby&amp;page=1">https://jobs.github.com/positions.json?description=ruby&amp;page=1</Link></li>
          <li><Link to="https://jobs.github.com/positions.json?page=1&amp;search=code">https://jobs.github.com/positions.json?page=1&amp;search=code</Link></li>
        </ul>

        <h3>
          GET /positions.json
        </h3>

        <p>
          Search for jobs by term, location, full time vs part time, or any combination
          of the three. All parameters are optional.
        </p>

        <p>
          <b>Parameters</b>
        </p>

        <ul>
          <li>
            <strong>description</strong> — A search term, such as "rustrongy" or "java". This parameter
            is aliased to <strong>search</strong>.
          </li>

          <li>
            <strong>location</strong> — A city name, zip code, or other location search term.
          </li>

          <li>
            <strong>lat</strong> — A specific latitude. If used, you must also send long
            and must <strong>not</strong> send location.
          </li>

          <li>
            <strong>long</strong> — A specific longitude. If used, you must also send lat
            and must <strong>not</strong> send location.
          </li>

          <li>
            <strong>full_time</strong> — If you want to limit results to full time positions set this
            parameter to 'true'.
          </li>
        </ul>

        <p>
          <strong>Examples</strong>
        </p>

        <ul>
          <li><Link to="https://jobs.github.com/positions.json?description=python&amp;full_time=true&amp;location=sf">https://jobs.github.com/positions.json?description=python&amp;full_time=true&amp;location=sf</Link></li>
          <li><Link to="https://jobs.github.com/positions.json?search=node">https://jobs.github.com/positions.json?search=node</Link></li>
          <li><Link to="https://jobs.github.com/positions.json?lat=37.3229978&amp;long=-122.0321823">https://jobs.github.com/positions.json?lat=37.3229978&amp;long=-122.0321823</Link></li>
        </ul>


        <h3>
          GET /positions/ID.json
        </h3>

        <p>
          Retrieve the JSON representation of a single job posting.
        </p>

        <p>
          <b>Parameters</b>
        </p>

        <ul>
          <li>
            <b>markdown</b> — Set to 'true' to get the description and how_to_apply fields as Markdown.
          </li>
        </ul>

        <p>
          <b>Examples</b>
        </p>

        <ul>
          <li><Link to="https://jobs.github.com/positions/21516.json">https://jobs.github.com/positions/21516.json</Link></li>
          <li><Link to="https://jobs.github.com/positions/21516.json?markdown=true">https://jobs.github.com/positions/21516.json?markdown=true</Link></li>
        </ul>
      </TextContainer>
    </Container> 
  );
};

export default API;
