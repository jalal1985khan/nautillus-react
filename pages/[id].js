import Header from '/components/Header';
import Footer from '/components/Footer';
import Router from 'next/router';
import Head from 'next/head'
import {Col,Container, Row, Image, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import configData from "config.json";

const post = ({data}) => {
  // console.log(data);
  return (

<div>
     
<Header/>   
<div className='grid grid-cols-3 gap-5 w-full'>
{
data.map((post)=>{
    console.log(post)
return (
  <>
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

<Container fluid key={post.id} className="post-banner" style={{ backgroundImage: `url(${post['_embedded']['wp:featuredmedia'][0]['source_url']})`}}>
<Row>
<Col><Button className="back-btn" onClick={() => Router.back()}>Back</Button></Col>
</Row>
<Row>
<Col><h1 className="fs-2 bogle-medium walmart-default" dangerouslySetInnerHTML={{__html:post['title']['rendered']}}/></Col>    
</Row>

</Container>
<Container className="pt-4">
</Container>
<Container className="mx-auto">

<div dangerouslySetInnerHTML={{__html:post['content']['rendered']}}/>
</Container>               




<Footer/>


</>







)



})}

</div>
</div>
  )
}

export default post




export async function getServerSideProps(context){
    const {id} = context.params;

    const res = await fetch(`${configData.SERVER_URL}posts?_embed&slug=${id}`);
    const data = await res.json();
    return {props:{data}}
    
    
    
    }