import { useState} from 'react';
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Office from '../components/ContactOffice';
import configData from "config.json";
import Head from 'next/head';




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
                 //setErrName(response.data['invalid_fields'][0]['message']);
                 //setErrEmail(response.data['invalid_fields'][1]['message']);
                 //setErrSubject(response.data['invalid_fields'][2]['message']);
                    setSpinner(false);
                    setLoading(true);
            }
                 console.log(response.data)
            });
    }


  return (
      <>
          <Head>
        <title>Contact - Ship Management Company, Vessel Management Services | Nautilus Shipping</title>
        <meta name="description" content="Delivering excellence in technical and crew management" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="canonical" href="https://www.nautilusshipping.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact - Ship Management Company, Vessel Management Services | Nautilus Shipping" />
        <meta property="og:description" content="Delivering excellence in technical and crew management 1 + Ships manned 100 + Seafarer database 100 + Crew on active rolls 1 + Clients Delivering excellence in technical and crew management Gc, Container, Tankers, Bulk carriers 10 + Ships manned 100 + Seafarer database 100 + Crew on active rolls 10 + Clients Powering ship [&hellip;]" />
        <meta property="og:url" content="https://www.nautilusshipping.com/" />
        <meta property="og:site_name" content="Ship Management Company, Vessel Management Services | Nautilus Shipping" />
        <meta property="article:modified_time" content="2023-07-06T15:35:40+00:00" />
        <meta property="og:image" content="/images/team_banner.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    <Header/>
    
      <Image
      src="/images/contact_banner.jpeg"
      width="800"
      height="620"
      background='no-repeat'
      background-size= 'cover'
              className="banner-img"
              alt="nautlus Shipping"
      
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

      <Row className="m-row">
        <Col className="text-center">
       <Image src="/images/contact_img.jpeg" width="700" height="620" className="m-width" alt="nautilus shipping"/>
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
                          
                          {loading && <h1 className="reg-success mt-4">
                              
                              {post}</h1>}
        </Col>
      </Row> 
      </Container>
    </Container>
<Office/>
<Container className="g-0" fluid >
<iframe src="https://www.google.com/maps/d/embed?mid=1IBRS53rdQ_0XFaEjZIsta38g6BXSkMc&ehbc=2E312F" width="100%" height="480"></iframe>
</Container>
    <Footer/>




    </>
  );
}

export default ContainerExample;