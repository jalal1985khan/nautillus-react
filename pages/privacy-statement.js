import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';
import configData from "../config.json";


const privacy = ({ data }) => {
    return (
        <div>
            <Header />
            <Container fluid>
                {
                    data.map((post, index) => {
                        //console.log(post)
                        return (
                            <>
                                <Container className="footer-bg d-flex justify-content-center align-items-center" style={{ height: 120 }} fluid>
                                    <h2 className="text-white">{post['title']['rendered']}</h2>
                                </Container>
                                <Container>
                                    <div dangerouslySetInnerHTML={{ __html: post['content']['rendered'] }} className="fs-4" />

                                </Container>
                            </>
                        )


                    })}
            </Container>

            <Footer />
        </div>
    )
}

export default privacy


export async function getServerSideProps(context) {
    //const {id} = context.params;

    const res = await fetch(`${configData.SERVER_URL}pages?_embed&slug=privacy-statement`);
    const data = await res.json();
    return { props: { data } }

}