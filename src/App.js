import Header from "./components/header";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import RightCard from "./components/rightCard";
import LeftCard from "./components/leftCard";
import CardRegister from "./components/cardRegister";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <Header />

      <Container className="container-app mb-5">
        <Row>
          <Col lg={5} md={12}>
            <RightCard />
          </Col>
          <Col lg={7} md={12}>
            <LeftCard />
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <CardRegister />
      </Container>

      <Footer />
    </div>
  );
}

export default App;
