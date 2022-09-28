import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
    return(
        <Container fluid className="footer text-center text-light pt-4 pb-4">
            <Row>
                <Col>
                   MohanKrishna [<a href="https://www.linkedin.com">Linkedin</a>]
                </Col>
            </Row>
        </Container>
    )
}