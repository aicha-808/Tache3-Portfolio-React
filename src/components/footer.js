import { Col, Container, Row } from "react-bootstrap";
import logo from '../assets/img/logo.svg'
import naveIcone1 from '../assets/img/nav-icon1.svg'
import naveIcone2 from '../assets/img/nav-icon2.svg'
import naveIcone3 from '../assets/img/nav-icon3.svg'
import { MailchimpForm } from "./MailchimpForm";


export const Footer = () => {
    return(
        <section className="footer">
            <Container>
                <Row className="align-items-center text-center">
                    <MailchimpForm />
                    <Col sm={6} className="mb-3">
                        <img src={logo} alt="" className="footerLogo"></img>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end mb-2">
                        <div className="social-icon">
                            <a href="#home"><img src={naveIcone1} alt=""></img></a>
                            <a href="#skills"><img src={naveIcone2} alt=""></img></a>
                            <a href="#projects"><img src={naveIcone3} alt=""></img></a>
                        </div>
                        <p>Copyright 2022 All Reserved</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}