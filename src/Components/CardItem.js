import react from "react";

import {
  Card,
  CardBody,
  Button,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";

const CartItem = ({ product, addInCart }) => {
  return (
    <Card className="mt-2 mb-1">
      <CardImg
        top
        width="250px"
        height="250px"
        src={product.smallImage}
      ></CardImg>
      <CardBody className="text-center">
        <CardTitle>{product.productName}</CardTitle>
        <CardText>{product.productPrice}</CardText>
        <Button color="success"
        onClick={()=>addInCart(product)}
        >
Buy Now
        </Button>
      </CardBody>
    </Card>
  );
};


export default CartItem;