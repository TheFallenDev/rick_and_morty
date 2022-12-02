import styled from 'styled-components';
import Card from './Card';

const Container = styled.div `
   width: 100%;
   max-width: 1200px;
   height: fit-content;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
   margin: auto;
`


export default function Cards(props) {
   const { characters, onClose } = props;
   return (
      <Container>
         {characters.map((char) => (
            <Card
               key={char.name}
               name={char.name}
               gender={char.gender}
               species={char.species}
               image={char.image}
               onClose={() => onClose(char.id)}
               
            />
         ))}
      </Container>
   );
}
