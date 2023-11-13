import { useState, useEffect } from "react";
import { Col, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col md={12}>
        <div className="row newsletter-bx bg-light text-dark rounded-5 mx auto ">
          <div className="md-6 lg-6">
            <h4 className="fw-bold h6">Subscribe to our Newsletter</h4>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </div>
          <div className="md-6 lg-6">
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx text-center gx-2 ">
                <input className="border-0 bg-transparent p-2 form-control mx-2" value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                <button type="submit" className="btn text-light ">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </Col>
  )
}