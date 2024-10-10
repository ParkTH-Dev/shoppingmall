import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-bottom: 30px;
  /* justify-content: space-around; */
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
`;
const SearchBox = styled.div`
  input {
    padding: 7px 20px;
    border: none;
    border-bottom: 1px solid #000;
    text-align: center;
    &::placeholder {
      opacity: 1;
      transition: opacity 0.3s;
    }
    &:focus {
      outline: none;
      &::placeholder {
        opacity: 0;
      }
    }
  }
  svg {
    position: absolute;
    left: 2px;
    bottom: 7px;
  }
`;

const LoginAuth = styled.div`
  cursor: pointer;
  display: flex;
  gap: 10px;
`;

const Logo = styled.div`
  width: 300px;
  height: 50px;
  margin-bottom: 20px;
  & a > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MenuArr = styled.div`
  & > ul {
    display: flex;
    gap: 30px;
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
  "무텐 슈퍼세일",
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
          <img
            src="https://menu.mt.co.kr/moneyweek/thumb/2020/08/21/06/2020082114368021238_2.jpg"
            alt="logo"
          />
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
