import NewsCard from "./subComponents/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NewsSection() {
  return (
    <Container className="news-container">
      <Row>
        <Col sm={12} className="news-title">Latest News</Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col sm={12}>
          <NewsCard />
        </Col>
      </Row>
    </Container>
  );
}

export default NewsSection;
