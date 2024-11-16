import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 15px;
  cursor: pointer;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;
const Img = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px;

  .title {
    font-weight: 600;
    font-size: 16px;
  }

  .price {
    color: #2c3e50;
    font-size: 18px;
    font-weight: 700;
  }

  .tag {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 12px;
    background: #f8f9fa;
    color: #666;
  }
`;

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const formattedPrice = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(item.price);
  const showDetail = () => {
    navigate(`products/${item.id}`);
  };
  return (
    <Wrapper onClick={showDetail}>
      <Img src={item.img} />
      <Info>
        <div className="title">{item && item?.title}</div>
        <div className="price">{formattedPrice}</div>
        <div className="tag">{item?.new === true ? "신제품" : "이벤트"}</div>
        <div>{item?.size}</div>
      </Info>
    </Wrapper>
  );
};

export default ProductCard;
