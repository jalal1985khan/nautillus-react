import Header from '/components/Header';
import Footer from '/components/Footer';
import axios from "axios";
import {Col,Container, Row,Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import configData from "config.json";
import { format } from 'date-fns'
import Head from 'next/head'
import { useState} from 'react';

const Post = ({data}) => {
   
     
    const [file, setFile] = useState()

    function handleChange(event) {
      setFile(event.target.files[0])
    }
    
    function handleSubmit(event) {
      event.preventDefault()
      const url = `${configData.SERVER_FROM}contact-form-7/v1/contact-forms/8578/feedback`;
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileName', file.name);
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      axios.post(url, formData, config).then((response) => {
        console.log(response.data);
      });
  
    }
   
   
   
    //console.log(data);

  return (
    
<div>
{
data.map((post)=>{
    //console.log(post)
return (
<Head key={post.id}>
{/* <!-- HTML Meta Tags --> */}
<title>{post['yoast_head_json']['title']}</title>
<meta name="description" content={post['yoast_head_json']['description']}></meta>

{/* <!-- Google / Search Engine Tags --> */}
<meta itemprop="name" content={post['yoast_head_json']['title']}></meta>
<meta itemprop="description" content={post['yoast_head_json']['description']}></meta>
<meta itemprop="image" content=""></meta>

{/* <!-- Facebook Meta Tags --> */}
<meta property="og:url" content={post['yoast_head_json']['og_url']}></meta>
<meta property="og:type" content="article"></meta>
<meta property="og:title" content={post['yoast_head_json']['title']}></meta>
<meta property="og:description" content={post['yoast_head_json']['description']}></meta>
<meta property="og:image" content=""></meta>

{/* <!-- Twitter Meta Tags --> */}
<meta name="twitter:card" content="summary_large_image"></meta>
<meta name="twitter:title" content={post['yoast_head_json']['title']}></meta>
<meta name="twitter:description" content={post['yoast_head_json']['description']}></meta>
<meta name="twitter:image" content=""></meta>

</Head>
)
})
}

        
<Header/>   

<div className='grid grid-cols-3 gap-5 w-full'>
{
data.map((post)=>{

  const dateStr = post['acf']['joining_date'];
  const year = dateStr.slice(0,4);
  const month = dateStr.slice(4,6);
  const day = dateStr.slice(6,8);
  const date = new Date(`${year}-${month}-${day}`);
//console.log(post)
return (
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
   {post['acf']['type_of_vessel']}</p></Col>    
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
<h1>Submit a CV\Resume There are two options below: 1. If you do not have a current CV, select this option to use our CV/Resume builder, or 2. If you have a CV prepared on a personal device, please select this option.</h1>
<p>Please select an option</p>
<Form>
      {['radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label='Upload an existing CV\Resume. (.doc, .docx, .txt, .rtf, .pdf):'
          />

        </div>
      ))}
    </Form>

    <form onSubmit={handleSubmit}>
          <h1>React File Upload</h1>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
    
    
</Container>

)



})}

</div>
<Footer/>
</div>
  )
}

export default Post




export async function getServerSideProps(context){
    const {id} = context.params;
    const res = await fetch(`${configData.SERVER_URL}job?_embed&slug=${id}`);
    const data = await res.json();
    return {props:{data}}
    
    
    
    }