import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        style={{ fontSize: "14px", fontWeight: "300" }}
        onClick={handleShow}
        className="btn text-white mx-2"
      >
        Login
      </button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="form-group">
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
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
