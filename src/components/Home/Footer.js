import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavLink from 'react-bootstrap/NavLink';
import Nav from 'react-bootstrap/Nav';

import "./Footer.css";

function Footer() {
  return (
    <Card className="text-center mt-3 footer">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title><i class="las la-phone-volume"></i> 01016440812</Card.Title>
        <Card.Text>
        <i class="las la-envelope-open-text"></i> egyman930@gmail.com
        </Card.Text>
        <Container>
        <Row>
            <Col lg={4} sm={12}>
            <NavLink><i class="lab la-facebook facebook"></i></NavLink>
            </Col>
            <Col lg={4} sm={12}>
            <NavLink><i class="lab la-twitter twitter"></i></NavLink>
            </Col>
            <Col lg={4} sm={12}>
            <NavLink><i class="lab la-youtube youtube"></i></NavLink>
            </Col>
        </Row>
        </Container>
      </Card.Body>
      <Card.Footer className="text-muted copyright"><span>&copy; Mohammed Helmy 2024</span></Card.Footer>
    </Card>
  );
}

export default Footer;