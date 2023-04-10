import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ImageCard({ image }) {
  return (
    <Card style={{ width: '18rem' , margin: "60px" }}>
      <Card.Img variant="top" src={image.image_url} alt={image.name} />
      <Card.Body>
        <Card.Text>
          <h2>{image.name}</h2>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}


export default ImageCard;