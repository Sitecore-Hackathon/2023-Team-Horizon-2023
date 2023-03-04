

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Header = (props) => {

  return (
    <>
      <header className="App-header" >
        <Card style={{ width: '50%' }}>
          <Card.Body className='text-center'>
            <h1>Card Title</h1>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              {props.body}
            </Card.Text>
            <Button variant="outline-light" >Go somewhere</Button>
          </Card.Body>
        </Card>
      </header>
    </>
  )
}
export default Header;
