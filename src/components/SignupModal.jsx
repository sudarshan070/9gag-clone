import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

function SignUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        style={{ fontSize: "14px", fontWeight: "300" }}
        variant="primary"
        onClick={handleShow}
      >
        SignUp
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Become a member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="form-group">
              <label for="name" className="pt-2 pb-1">
                Full Name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                aria-describedby="emailHelp"
              />
              <label for="email" className="pt-2 pb-1">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
              <label for="password" className="pt-2 pb-1">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                aria-describedby="emailHelp"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUp;
