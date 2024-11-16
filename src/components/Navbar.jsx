import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
  margin-bottom: 30px;
`;

const HeaderTop = styled.div`
  height: 30px;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  margin-bottom: 30px;
  margin-right: 50px;
`;
const SearchBox = styled.div`
  position: relative;
  input {
    padding: 10px 40px;
    border: none;
    border-radius: 20px;
    background: #f8f9fa;
    width: 250px;
    transition: all 0.3s ease;

    &:focus {
      width: 300px;
      background: #fff;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    }
  }
  svg {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const LoginAuth = styled.div`
  cursor: pointer;
  display: flex;
  gap: 10px;
`;

const Logo = styled.div`
  width: 200px;
  margin-bottom: 20px;
  position: relative;

  a {
    text-decoration: none;
    font-family: "Playfair Display", serif;
    font-size: 28px;
    font-weight: 700;
    color: #1a1a1a;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    display: inline-block;

    span {
      color: #007bff;
      transition: all 0.3s ease;
    }

    &:hover {
      transform: translateY(-2px);
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

      span {
        color: #0056b3;
      }

      &:after {
        width: 100%;
        left: 0;
      }
    }

    &:after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 50%;
      width: 0;
      height: 2px;
      background: linear-gradient(to right, #1a1a1a, #007bff);
      transition: all 0.3s ease;
    }
  }
`;

const MenuArr = styled.div`
  & > ul {
    display: flex;
    gap: 40px;

    li {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background: #000;
        transition: width 0.3s ease;
      }

      &:hover:after {
        width: 100%;
      }
    }
  }
`;

const menuList = [
  "여성",
  "남성",
  "추천",
  "브랜드",
  "발매",
  "랭킹",
  "세일",
  "슈퍼세일",
];

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const onChackEnter = (e) => {
    if (e.key === "Enter") navigate(`?q=${e.target.value}`);
  };
  return (
    <Wrapper>
      <HeaderTop>
        <SearchBox>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="제품 검색" onKeyUp={onChackEnter} />
        </SearchBox>
        {authenticate ? (
          <LoginAuth onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그아웃</span>
          </LoginAuth>
        ) : (
          <LoginAuth onClick={() => navigate("/login")}>
            <span>로그인</span>
          </LoginAuth>
        )}
      </HeaderTop>
      <Logo>
        <Link to={"/"}>
          LUXE<span>WEAR</span>
        </Link>
      </Logo>
      <MenuArr>
        <ul>
          {menuList.map((menu, i) => (
            <li key={i}>
              <a href="#">{menu}</a>
            </li>
          ))}
        </ul>
      </MenuArr>
    </Wrapper>
  );
};

export default Navbar;
