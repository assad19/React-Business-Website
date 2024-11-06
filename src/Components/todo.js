import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const todo = ({todo}) => {
  return (
    <div className="col-md-4">
    <Card className='mt-4' style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary">Delete</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default todo
