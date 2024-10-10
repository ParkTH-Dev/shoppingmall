import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 0;
  cursor: pointer;
`;
const Img = styled.img`
  width: 300px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
        <div>Conscious Choice</div>
        <div>{item && item?.title}</div>
        <div>{formattedPrice}</div>
        <div>{item?.new === true ? "신제품" : "이벤트"}</div>
        <div>{item?.size}</div>
      </Info>
    </Wrapper>
  );
};

export default ProductCard;
