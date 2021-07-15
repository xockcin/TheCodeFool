import {useState} from 'react'
import './App.css'
import Frame from './components/Layout/Frame'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import image from './assets/thefool2.png'

import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
  <div>
    <h1>Menu</h1>
  </div>;
}

const Splash = (props) => {
  return (
    <>
      <Modal show={true}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.showMenu}>
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function App() {
  const [showModal, setShowModal] = useState(true);
  const [showMenu, setShowMenu] = useState(false)

  const handleCloseModal = () => setShowModal(false)
  const handleShowModal = () => setShowModal(true)

  return (
    <Frame>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Body>
          <Container>
            <Image src={image} fluid rounded />
            <div id="slogan" onClick={handleCloseModal}>
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
    </Frame>
  );

}

export default App;
