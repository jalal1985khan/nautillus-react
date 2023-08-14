import Header from '/components/Header';
import Footer from '/components/Footer';
import axios from "axios";
import {Col,Container, Row,Form} from 'react-bootstrap';
import configData from "config.json";
import { format } from 'date-fns'
import Head from 'next/head'
import { useState } from 'react';




const FileUploader = ({ data }) => {
  

  const [success, setSuccess] = useState(true);
  const [file, setFile] = useState(null);
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);



  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('resume', file);

      try {
        const response = await fetch(`${configData.SERVER_FROM}contact-form-7/v1/contact-forms/8578/feedback`, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          //console.log(response)
          //console.log('File uploaded successfully');
          setSuccess(false);
          setPost("Your resume has been sent successfully");
          setLoading(true);
          // You can now trigger the Contact Form 7 submission using the WordPress REST API
        } else {
          console.error('File upload failed');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <>
{
data.map((post)=>{      

  
  return (
    <>
<Header/>
<Container key={post.id} >
<h1 className="mt-5">Job Detail</h1>
<hr/>
<Row>
<Col>
<h2>{post['acf']['rank']}</h2>
<Row>
<Col><p>Job ID:</p></Col>
<Col><p>{post['acf']['job_id']}</p></Col>    
</Row>
<Row>
<Col><p>Date Posted:</p></Col>
<Col><p>{format(
  new Date(post['date']),
  'dd/MM/yyyy'
)}</p></Col>    
</Row>
<Row>
<Col><p>Joining Date:</p></Col>
          <Col><p>
  {post['acf']['joining_date']}
  /{post['acf']['type_of_vessel']}</p></Col>    
</Row>
</Col>    
<Col>
<h2>Position Description:</h2>
<Row>
<Col><p>{post['acf']['position_description']}</p></Col>   
</Row>
</Col>
</Row>
<hr/>
<h3>Submit a CV\Resume There are two options below:<br/>1. If you do not have a current CV, select this option to use our CV/Resume builder, or <br/>2. If you have a CV prepared on a personal device, please select this option.</h3>
    {/* <p>Please select an option</p> */}
    

    
        
</Container>
</>
)



})}

{success &&   
    <Container className="mt-5 mb-5">
      <input type="file" onChange={handleFileChange} className="custom-file-input" />
      <button onClick={handleUpload} className="career-btn">Upload</button>
      </Container>
      }
      <Container className="mt-5 mb-5">
      {loading &&
        <h1 class="reg-success mt-4 fs-2">{post}</h1>
        }
        </Container>
        

      <Footer/>
      </>
  );
};

export default FileUploader;


export async function getServerSideProps(context){
  const {id} = context.params;
  const res = await fetch(`${configData.SERVER_URL}job?_embed&slug=${id}`);
  const data = await res.json();
  return {props:{data}}
  }
