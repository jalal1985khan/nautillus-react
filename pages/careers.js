import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row, Container, Image ,Spinner} from 'react-bootstrap';
import Link from 'next/link'
import Header from '../components/Header';
import Footer from '../components/Footer';
import configData from "../config.json";
import { format } from 'date-fns'
import Head from 'next/head'

const SuccessStories = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(9);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [next, setNext] = useState();
  const [total, setTotal] = useState();
  const [end, setEnd] = useState(true);

  const fetchMovies = async () => {
    setLoading(true);
    
    let url = "";
    const urlPage = `${page}`;
    url = `${configData.SERVER_URL}job?_embed&status[]=publish&per_page=${urlPage}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);
      setMovies(data);
      setLoading(false);
      
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNos = async () => {
    setLoading(true);
    let cat = "";
    cat = `${configData.SERVER_URL}categories/7`;

    try {
      const response = await fetch(cat);
      const cats = await response.json();
      //console.log(cats.count);
      setNext(cats.count);
      setLoading(false);

    } catch (error) {
      console.log(error);
    }
  };




  useEffect(() => {
    fetchMovies();
    fetchNos();
  }, [page], [next]);


  const loadMore = () => {
    setTotal(next)
    //console.log(total)
    const main = next;
    //console.log(page)
    if (page >= total) {
      setEnd(false);
    }

    setPage((oldPage) => {
      return oldPage + 3;
    })
  };

  return (
    <>


{
movies.map((post, index) => { 

return(
<Head key={post.id}>
{/* <!-- HTML Meta Tags --> */}
<title>Current Job Openings - Ship Management Company, Vessel Management Services | Nautilus Shipping</title>
<meta name="description" content="If you have the right qualifications and skills and are looking for sea jobs, we are here to help. Nautilus Shipping is one of the fastest growing shipping companies in India and has multiple shipping job vacancies for the right candidates. Our crewing team is based in Mumbai and Chennai and you can drop your […]"></meta>

{/* <!-- Google / Search Engine Tags --> */}
<meta itemprop="name" content="Current Job Openings - Ship Management Company, Vessel Management Services | Nautilus Shipping"></meta>
<meta itemprop="description" content="If you have the right qualifications and skills and are looking for sea jobs, we are here to help. Nautilus Shipping is one of the fastest growing shipping companies in India and has multiple shipping job vacancies for the right candidates. Our crewing team is based in Mumbai and Chennai and you can drop your […]"></meta>
<meta itemprop="image" content=""></meta>

{/* <!-- Facebook Meta Tags --> */}
<meta property="og:url" content="http://www.nautilusshipping.com/careers"></meta>
<meta property="og:type" content="website"></meta>
<meta property="og:title" content="Current Job Openings - Ship Management Company, Vessel Management Services | Nautilus Shipping"></meta>
<meta property="og:description" content="If you have the right qualifications and skills and are looking for sea jobs, we are here to help. Nautilus Shipping is one of the fastest growing shipping companies in India and has multiple shipping job vacancies for the right candidates. Our crewing team is based in Mumbai and Chennai and you can drop your […]"></meta>
<meta property="og:image" content=""></meta>

{/* <!-- Twitter Meta Tags --> */}
<meta name="twitter:card" content="summary_large_image"></meta>
<meta name="twitter:title" content="Current Job Openings - Ship Management Company, Vessel Management Services | Nautilus Shipping"></meta>
<meta name="twitter:description" content="If you have the right qualifications and skills and are looking for sea jobs, we are here to help. Nautilus Shipping is one of the fastest growing shipping companies in India and has multiple shipping job vacancies for the right candidates. Our crewing team is based in Mumbai and Chennai and you can drop your […]"></meta>
<meta name="twitter:image" content=""></meta>

</Head>


)


 })
}
    
 
    <div className="wbg-grey">
      <Header />
      
      <Image
        src="/images/career_banner.jpeg"
        width="100%"
        height="620"
        background='no-repeat'
        background-size='cover'
        
        className="banner-img"
        
      />
      
      <Container >
      <Container>
    <Row>
        <Col className="mt-5">
        <p className="fs-4">If you have the right qualifications and skills and are looking for sea jobs, we are here to help.</p>
        <p className="fs-4">Nautilus Shipping is one of the fastest growing shipping companies in India and has multiple shipping job vacancies for the right candidates.</p>
        <p className="fs-4">Our crewing team is based in Mumbai and Chennai and you can drop your resume at crewing@nautilusshipping.com even if you do not find your preferred vacancy on this page. New openings are always coming up and we will match you with the right job as soon as possible.</p>
        <p className="fs-4">We offer rewarding opportunities for both onshore and offshore and aspirants and are usually the first choice in foreign as well as coastal job in shipping company.</p>
        </Col>
      </Row>
      <h1 className="heading">Current Job Openings</h1> 


      </Container>
      </Container>
      <Container className="wbg-grey">
        <Row>

          {

            movies.map((post, index) => {
             // console.log(post);

              const dateStr = post['acf']['joining_date'];
              const year = dateStr.slice(0,4);
              const month = dateStr.slice(4,6);
              const day = dateStr.slice(6,8);
              const date = new Date(`${year}-${month}-${day}`);
             // console.log(date)

              return (
<Container key={post.id} className="j-card mb-4">
<Row>
<Col className="px-5">
<h2 dangerouslySetInnerHTML={{__html:post['title']['rendered']}}/>
<Row>
<Col>Job id: {post['acf']['job_id']}</Col>    
</Row>
<Row>
<Col><Col>Date Posted: {format(
  new Date(post['date']),
  'dd/MM/yyyy'
)}</Col></Col>    
</Row>
<Row>
<Col>Joining Date: 
{format(
  new Date(date),
  'dd/MM/yyyy'
)}</Col>    
</Row>
</Col>    
<Col className="center">
<Link key={index} href={`/job-detail/${post['slug']}`}>
<Button className="j-btn">Apply</Button>
</Link>
</Col>
</Row>

</Container>
 
                
              )


            })}
        </Row>
      </Container>


      <section className="section text-center mb-3">
        {loading && <h2 className="loading">Loading...</h2>}
        <div className="loadmodediv">

{end &&  
      <Button 
      variant="primary" 
      onClick={loadMore}
      className="back-btn"
      >{loading && 
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"

        /> }
        {loading ? <>loading...</> :<>Load more</>}
        
      </Button>}
        </div>
      </section>
      <Footer />


    </div>

    </>
  );
};

export default SuccessStories;