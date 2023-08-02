import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row, Container, Image ,Spinner} from 'react-bootstrap';
import Link from 'next/link'
import Header from '../components/Header';
import Footer from '../components/Footer';
import configData from "../config.json";

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
    //console.log(urlPage)
    //url = query ? `${API_ENDPOINT}${urlPage}${urlQuery}` : "";
    //url = `${configData.SERVER_URL}posts?_embed&categories[]=12&status[]=publish&per_page=${urlPage}`;
    url = `${configData.SERVER_URL}posts?_embed&status[]=publish&per_page=${urlPage}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
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
    <div className="wbg-grey">
      <Header />
      
      <Image
        src="/images/insights_banner.jpeg"
        width="100%"
        height="620"
        background='no-repeat'
        background-size='cover'
        
        className="banner-img"
        
      />
      
      <Container >
        <p className="fs-1 bogle-medium walmart-default" >News & Insights</p>
      </Container>
      <Container className="wbg-grey">
        <Row>

          {

            movies.map((post, index) => {
              //console.log(post);
              return (

                <Col sm={4} className="p-3" key={post.id}>
                  <Card className="story_post" >
                    <Image
                      src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                      alt={post['title']['rendered']}
                      width="100%"
                      height="250px"
                    />
                    <Card.Body className="b-border">
                      <Card.Title className="fs-4 mb-4 insights"  dangerouslySetInnerHTML={{__html:post['title']['rendered']}}/>
                      <Link key={index} href={`/${post['slug']}`}>
                        <Button variant="primary" className="read_btn">Read more</Button>
                      </Link>
                    </Card.Body>
                  </Card>

                </Col>
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
  );
};

export default SuccessStories;