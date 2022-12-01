import styled from "styled-components";

const Input = styled.input.attrs({type: 'search'})`
   background-color: white;
   height: 2.5em;
   margin: 20px;
   border-radius: 6px;
`;

const Button = styled.button`
   color: white;
   background-color: #56d356;
   height: 2.5em;
   border-color: gray;
   border-style:solid;
   font-family: system-ui;
   font-weight: bold;
`

export default function SearchBar(props) {
   const { onSearch } = props
   return (
      <div>
         <Input/>
         <Button onClick={() => onSearch('Lalala')}>Agregar</Button>
      </div>
   );
}
