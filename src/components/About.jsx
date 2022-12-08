import styled from "styled-components";

const Container = styled.div`
    margin-top: 2em;
    padding: 2em;
    background-color: purple;
    border-radius: 5px;
    text-align: justify;
`

export default function About() {
    return( 
        <Container>
            <h3>About me</h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias eum facere a nostrum repellendus fugiat ea nulla ex porro adipisci veniam, dolorem, eveniet non, voluptate maxime amet pariatur! Mollitia, aliquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore modi amet deserunt quos maiores nemo assumenda magni possimus aspernatur. Repudiandae debitis ut numquam soluta deleniti sint, totam deserunt dignissimos magnam.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos obcaecati quos saepe, laborum quibusdam tempora debitis fugiat earum. Ducimus repellat ratione deserunt? Neque minus velit quos provident, reiciendis sint voluptatum?
        </Container>
)}