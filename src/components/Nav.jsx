import styled from "styled-components";
import SearchBar from "./SearchBar.jsx";
import { NavLink } from "react-router-dom";

const NavBar = styled.nav`
  background-color: rgba(0, 0, 0, 50%);
  opacity: 0.99;
  display: flex;
  padding-right: 15px;
`;

const Bar = styled.div`
  justify-content: flex-end;
`;

const Button = styled.button`
  background-color: purple;
  justify-content: flex-start;
`;

export default function Nav(props) {
  return (
    <div>
      <NavBar>
        <NavLink to={"/home"}>
          <Button>Home</Button>
        </NavLink>
        <NavLink to={"/about"}>
          <Button>About</Button>
        </NavLink>
        <Bar>
          <SearchBar onSearch={props.onSearch} />
        </Bar>
      </NavBar>
    </div>
  );
}
