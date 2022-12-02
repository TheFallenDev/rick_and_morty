import styled from "styled-components"
import SearchBar from "./SearchBar.jsx"

const NavBar = styled.nav`
    background-color: rgba(0, 0, 0, 50%);
    opacity: 0.99;
    display: flex;
    justify-content: flex-end;
    padding-right: 15px;
`

export default function Nav(props) {
    return(
        <div>
            <NavBar>
                <SearchBar
                    onSearch={props.onSearch}
                />
            </NavBar>
        </div>
    )
}