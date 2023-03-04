

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Header = (props) => {

  return (
    <>
      <header className="App-header" >
        <Card style={{ width: '100%' }}>
          <Card.Body className='text-center'>
            <h1>Team Horizon 2023</h1>
            <Card.Title>Sitecore Hackathon 2023</Card.Title>
            <Card.Text>
              {props.body}
            </Card.Text>
            <Button variant="outline-light" href='/work-orders'>Work orders</Button>
              &nbsp;&nbsp;
            <Button variant="outline-light" href='/reports'>Reports</Button>
          </Card.Body>
        </Card>
      </header>
    </>
  )
}
export default Header;
