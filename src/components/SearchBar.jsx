import styled from "styled-components";
import { useState } from "react";

const Input = styled.input.attrs({type: 'search'})`
   color: white;
   background-color: #671079;
   height: 2.5em;
   margin: 20px;
   border-radius: 6px;
`;

const Button = styled.button`
   color: white;
   background-color: #7e0f8d;
   height: 2.5em;
   font-family: system-ui;
   font-weight: bold;
`

export default function SearchBar(props) {

   const [id, setId] = useState('');

   const handleInputChange = (event)=>{
      setId(event.target.value)
   };
   return (
      <div>
         <Input type='search' value={id} onChange={handleInputChange}/>
         <Button onClick={()=>props.onSearch(id)}>Agregar</Button>
      </div>
   );
}
