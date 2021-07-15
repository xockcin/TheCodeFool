import {useState} from 'react'
import './App.css'
import Frame from './components/Layout/Frame'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import splashImage from './assets/thefool2.png'

import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
  <div>
    <h1>Menu</h1>
  </div>;
}

const Splash = (props) => {
  return (
    <Modal show={props.show} onHide={props.hide} id="splash">
      <Modal.Body>
        <Container>
          <Image src={splashImage} fluid rounded />
          <div id="slogan" onClick={props.hide}>
            <h5>
              <strong>
                "If the fool would persist in his folly he would become wise."
              </strong>
              <cite>
                <div>
                  <h6>-William Blake</h6>
                </div>
              </cite>
            </h5>
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
}



function App() {
  const [showModal, setShowModal] = useState(true);
  const [showMenu, setShowMenu] = useState(false)

  const handleCloseModal = () => setShowModal(false)
  const handleShowModal = () => setShowModal(true)

  return (
    <Frame>
      <Splash show={showModal} hide={handleCloseModal} />

      <Container id="menu">
        <Row>
          <Col md={6} className="menu-btn bg-primary">
            <h2>portfolio</h2>
          </Col>
          <Col md={6} className="menu-btn bg-warning">
            <h2>blog</h2>
          </Col>
          <Col md={6} className="menu-btn bg-success">
            <h2>about</h2>
          </Col>
          <Col md={6} className="menu-btn bg-danger">
            <h2>contact</h2>
          </Col>
        </Row>
      </Container>
    </Frame>
  );

}

export default App;
