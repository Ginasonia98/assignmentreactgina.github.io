import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { rupiahFormatter } from "../utils/formatter";
const ProductCard = ({
  name,
  description,
  image,
  price,
  handleEdit,
  handleDelete,
}) => {
  return (
    <>
      <Card>
        <Card.Img className="image" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="card-description">{description}</Card.Text>
          <Card.Text>{rupiahFormatter(price)}</Card.Text>
          <Button onClick={handleEdit} variant="primary">
            Edit
          </Button>
          <Button onClick={handleDelete} className="ms-4" variant="primary">
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
