import { useEffect, useState } from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Img = styled.img`
  width: 80%;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;
const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  font-size: 20px;
  padding: 20px;
  color: #2c3e50;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 20px;
`;

const ProductTitle = styled.div`
  font-weight: 700;
  font-size: 28px;
  color: #1a1a1a;
  border-bottom: 2px solid #e9ecef;
  padding-bottom: 15px;
`;
const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #e67e22;
`;

const BtnWrap = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Choice = styled.div`
  background-color: ${(props) =>
    props.choice === "true" ? "#27ae60" : "transparent"};
  color: ${(props) => (props.choice === "true" ? "white" : "#666")};
  padding: 8px 15px;
  border-radius: 20px;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
`;

const StyledDropdown = styled(Dropdown)`
  .dropdown-toggle {
    width: 100%;
    padding: 12px;
    font-weight: 500;

    &:hover {
      background-color: #343a40;
      color: white;
    }
  }

  .dropdown-menu {
    width: 100%;
  }
`;

const StyledButton = styled(Button)`
  padding: 12px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Description = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 15px;
    border-bottom: 1px solid #eee;
    padding-bottom: 8px;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 20px;

    li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 12px;
      color: #666;
      font-size: 14px;
      line-height: 1.6;

      &:before {
        content: "•";
        position: absolute;
        left: 0;
        color: #007bff;
      }
    }
  }

  .material {
    font-size: 14px;
    color: #666;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
    margin-bottom: 20px;
    border: 1px solid #e9ecef;
  }
`;

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const getProductDetail = async () => {
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
          <Img src={product?.img} alt={product?.title} />
        </Col>
        <Col>
          <ProductDesc>
            <ProductTitle>{product?.title}</ProductTitle>
            <ProductPrice>{formattedPrice}</ProductPrice>
            <Choice choice={product?.choice?.toString()}>
              {product?.choice ? "Conscious choice" : ""}
            </Choice>
          </ProductDesc>
          <BtnWrap>
            <StyledDropdown>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {product?.size?.map((item, i) => (
                  <Dropdown.Item key={i} href="#/{i}">
                    {item}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </StyledDropdown>
            <StyledButton variant="warning">장바구니</StyledButton>
            <StyledButton variant="dark">상품결제</StyledButton>
          </BtnWrap>
          <Description>
            <h3>제품 특징</h3>
            <ul>
              {product?.description?.mainFeatures?.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <div className="material">
              <h3>소재 정보</h3>
              <p>{product?.description?.material}</p>
            </div>
            <div className="material">
              <h3>취급 주의사항</h3>
              <ul>
                {product?.description?.care?.map((care, i) => (
                  <li key={i}>{care}</li>
                ))}
              </ul>
            </div>
          </Description>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
