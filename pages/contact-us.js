import { useState} from 'react';
import axios from "axios";
import {Container, Row, Col,Card, Image} from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Office from '../components/ContactOffice';
import configData from "config.json";




function ContainerExample() {

    const [post, setPost] = useState(null);
    const [yourName, setName] = useState(null);
    const [yourEmail, setEmail] = useState(null);
    const [yourSubject, setSubject] = useState(null);
    const [yourMessage, setMessage] = useState(null);
    const [spinner, setSpinner] = useState(false);
    const [loading, setLoading] = useState(false);
    const [disable, setDisabled] = useState(false);
    const [errrname, setErrName] = useState(null);
    const [errremail, setErrEmail] = useState(null);
    const [errrsubject, setErrSubject] = useState(null);
    const [success, setSuccess] = useState(true);

    
    const handleSubmit = event => {
        // 👇️ prevent page refresh
        event.preventDefault();

    };

    function createPost() {

        setSpinner(true);
        axios.post(`${configData.SERVER_FROM}contact-form-7/v1/contact-forms/8565/feedback`,
            {
                'your-name': { yourName },
                'your-email': { yourEmail },
                'your-subject': { yourSubject },
                'your-message': { yourMessage },
            }, {
            headers: {
                "Content-Type": 'multipart/form-data',
            }

        })
            .then((response) => {
                setPost(response.data.message);
                
                // setErrMessage(response.data['invalid_fields'][1]['message']);
                const msg = response.data.status;
                if (msg == 'mail_sent') {
                    setLoading(true);
                    setSpinner(false);
                    setSuccess(false);

                }
                else{
                setErrName(response.data['invalid_fields'][0]['message']);
                setErrEmail(response.data['invalid_fields'][1]['message']);
                setErrSubject(response.data['invalid_fields'][2]['message']);
                setSpinner(false);
            }
                // console.log(response.data)
            });
    }


  return (
    <>
    <Header/>
    
      <Image
      src="/images/contact_banner.jpeg"
      width="100%"
      height="620"
      background='no-repeat'
      background-size= 'cover'
      className="banner-img"
      
    />
    <Container>
        <Container>
    <Row>
        <Col >
        <p className="fs-1 bogle-bold walmart-default mt-4">Contact Us</p>
        <p>Contact us for Ship Management, Ship Agency & Logistics, Inspection and Commercial Ship Services.
<br/>Simply fill the form and we will get in touch with you soon.</p>
<p>Note: Job Seekers, please visit our shipping  job listing page.</p>
        </Col>
      </Row> 

      <Row>
        <Col className="text-center">
       <img src="/images/contact_img.jpeg"/>
        </Col>
        <Col className="text-center">
        {success &&
                    <form
                        onSubmit={handleSubmit}
                        style={{ margin: '20px' }}>

                        <div className="mb-3 mt-3">
                            {/* <label htmlfor="yourName" className="form-label text-white"><span className="errors">*</span>Your Name:</label> */}
                            <input
                                //required
                                type='text'
                                className="form-control"
                                id="yourName"
                                name='yourName'
                                placeholder="Ravi Kumar"
                                value={yourName}
                                onChange={event => setName(event.target.value)}
                            />
                            <span className="r_error">{errrname}</span>
                        </div>

                        <div className="mb-3 mt-3">
                            {/* <label htmlfor="yourEmail" className="form-label text-white"><span className="errors">*</span>Your Email:</label> */}
                            <input
                                //required
                                type='email'
                                className="form-control"
                                id="yourEmail"
                                name='yourEmail'
                                placeholder="test@test.com"
                                value={yourEmail}
                                onChange={event => setEmail(event.target.value)}

                            /><span className="r_error">{errremail}</span></div>

                            <div className="mb-3 mt-3">
                                {/* <label htmlfor="yourSubject" className="form-label text-white"><span className="errors">*</span>Subject:</label> */}
                                <input
                                    //required
                                    type='text'
                                    className="form-control"
                                    id="yourSubject"
                                    name='yourSubject'
                                    placeholder="your subject"
                                    value={yourSubject}
                                    onChange={event => setSubject(event.target.value)}

                                /><span className="r_error">{errrsubject}</span>
                                </div>

                                <div className="mb-3 mt-3">
                                {/* <label htmlfor="yourMessage" className="form-label text-white"><span className="errors">*</span>Message:</label> */}
                                <textarea
                                    //required
                                    rows="4" 
                                    cols="50"
                                    className="form-control"
                                    id="yourMessage"
                                    name='yourMessage'
                                    placeholder="your Message"
                                    value={yourMessage}
                                    onChange={event => setMessage(event.target.value)}

                                />
                                </div>
                                {spinner && <div className="spinner-border text-light" role="status"/>}
                            <button type='submit' className='btn btn-primary register ' onClick={createPost}>Send Message</button>
                            

                    </form>
                   }
                   {loading && <h1 class="reg-success mt-4">{post}</h1>}
        </Col>
      </Row> 
      </Container>
    </Container>
<Office/>

    <Footer/>




    </>
  );
}

export default ContainerExample;