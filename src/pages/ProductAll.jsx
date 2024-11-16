import { useEffect } from "react";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const StyledContainer = styled(Container)`
  padding: 40px 20px;
`;

const ProductGrid = styled(Row)`
  gap: 30px 0;
`;

const ProductColumn = styled(Col)`
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const EmptyResult = styled.div`
  text-align: center;
  padding: 50px 0;
  color: #666;
  font-size: 18px;
`;

const ProductAll = () => {
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    dispatch(productAction.getProduct(searchQuery));
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <StyledContainer>
      <ProductGrid>
        {productList.length > 0 ? (
          productList.map((menu, i) => (
            <ProductColumn key={i} lg={3} md={4} sm={6}>
              <ProductCard item={menu} />
            </ProductColumn>
          ))
        ) : (
          <EmptyResult>검색 결과가 없습니다.</EmptyResult>
        )}
      </ProductGrid>
    </StyledContainer>
  );
};

export default ProductAll;
