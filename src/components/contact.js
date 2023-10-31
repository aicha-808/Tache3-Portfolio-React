import { useState } from "react";
import { Container, Row, Col} from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
// import { response } from "express";

export const Contact = () => {
    const formInitial = {
        firstName: '',
        lastName: '',
        email: '',
        tel: '',
        message: ''
    }
    const [formDetail, setFormDetail] = useState(formInitial);
    const [boutonTex, setButtonText ] = useState('Send')
    const [status, setStatus] = useState({});

    const UpdateProperty = (category, value) => {
        setFormDetail({
            ...formDetail,
            [category]: value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body:JSON.stringify(formDetail),
        });
        setButtonText("Send");
        let result = response.json();
        setFormDetail(formInitial);
        if (result.code === 200) {
            setStatus({success: true, message:'message sent successfuully'})
        }else{
            setStatus({success: false, message: 'something went'})
        }
    }

    return(
        <section className='contact'>
            <Container>
                <Row>
                    <Col md={6}>
                        <img src={contactImg} alt=''></img>
                    </Col>
                    <Col md={6}>
                        <h2 className='mb-3 fw-bold'>Get in Touch</h2>
                        <form onSubmit={handleSubmit} className="text-center">
                            <Row>
                                <Col sm={6}  md={12} lg={6}>
                                    <input onChange={(e) => UpdateProperty('firstName', e.target.value)} value={formDetail.firstName} type='text' className='py-2 px-3 rounded-4 mb-3 bg-transparent' placeholder='First Name'></input>
                                </Col>
                                <Col sm={6}  md={12} lg={6}>
                                    <input onChange={(e) => UpdateProperty('lastName', e.target.value)} type='text' className='py-2 px-3 rounded-4 mb-3 bg-transparent' placeholder='Last Name'></input>
                                </Col>
                                <Col sm={6}  md={12} lg={6}>
                                    <input onChange={(e) => UpdateProperty('email', e.target.value)} type='email' className='py-2 px-3 rounded-4 mb-3 bg-transparent' placeholder='Email Adress'></input>
                                </Col>
                                <Col sm={6} md={12} lg={6}> 
                                    <input onChange={(e) => UpdateProperty('tel', e.target.value)} type='tel' className='py-2 px-3 rounded-4 mb-3 bg-transparent' placeholder='Phone No'></input>
                                </Col>
                                <Col sm={6}  md={12} lg={6}>
                                    <textarea onChange={(e) => UpdateProperty('message', e.target.value)} cols={55} 
                                    rows={5} className='py-2 px-3 rounded-4 mb-3 bg-transparent' placeholder='Message'>
                                    </textarea>
                                    <div className='mt-4'>
                                        <button className='btn btn-light px-5 rounded-0'>{boutonTex}</button>
                                    </div>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                               
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}