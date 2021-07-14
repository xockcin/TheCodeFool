import { Modal, Container, Image } from "react-bootstrap"

const SplashModal = () => {
  return (
    <Modal show="true">
      <Modal.Body>
        <Container>
          <Image
            id="slogan"
            className="img-fluid rounded bg-secondary p-2 my-3"
            src="/images/thefool2.png"
            alt="the fool"
            fluid
          />
          <div data-dismiss="modal" class="d-flex p-5 rounded-pill" id="slogan">
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
};

export default SplashModal
