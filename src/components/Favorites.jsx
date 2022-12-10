import { connect } from "react-redux";
import Card from "./Card";

function Favorites(props){
    return(
        <div>
            {props.myFavorites.map((char) => (
            <Card
               key={char.name}
               name={char.name}
               gender={char.gender}
               species={char.species}
               image={char.image}
               id={char.id}
            />
         ))}
        </div>
    )
}

export function mapStateToProps(state){
    return {
       myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites)