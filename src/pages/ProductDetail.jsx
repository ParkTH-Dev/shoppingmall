import { useEffect, useState } from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  border-radius: 10px;
`;
const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 22px;
  padding: 10px;
  color: #444;
`;

const ProductTitle = styled.div`
  font-weight: 600;
`;
const ProductPrice = styled.div`
  font-size: 18px;
`;

const BtnWrap = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
`;
const Choice = styled.div``;

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const getProductDetail = async () => {
    // const url = `http://localhost:3000/products/${id}`;
    const url = `https://my-json-server.typicode.com/ParkTH-Dev/shoppingmall/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
  };
  const formattedPrice = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(product?.price);
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Img src={product && product.img} alt={product?.id} />
        </Col>
        <Col>
          <ProductDesc>
            <ProductTitle>상품명 : {product && product.title}</ProductTitle>
            <ProductPrice>상품가격 : {product && formattedPrice}</ProductPrice>
            <Choice>
              {product && product.choice ? "Conscious choice" : ""}
            </Choice>
          </ProductDesc>
          <BtnWrap>
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {product &&
                  product.size.length > 0 &&
                  product?.size.map((item, i) => (
                    <Dropdown.Item key={i} href="#/{i}">
                      {item}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="warning">장바구니</Button>
            <Button variant="dark">상품결제</Button>
          </BtnWrap>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
