import { Navbar, Container, Row, Col} from 'react-bootstrap';

export const Header = () => {
    return(
      <div className="header">
        <Navbar className="navbar">
          <Container>
            <Navbar.Brand href="#home">
              <h1>CryptoCurrency</h1>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Container>
        </Navbar>
        <Container>
          <Row>
            <Col>
              <div className="rounded-lg mt-4 mb-4 pt-5">
                <h1 className="display-3">Crypto currency</h1>
                <p className="lead">
                  A simple web app to get the current price and some trending news of crypto world.<br/> 
                  This App is build with With <span className="text-primary">React</span> and <span className="text-primary">Coinstats API</span>.
                </p>
                <hr/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}