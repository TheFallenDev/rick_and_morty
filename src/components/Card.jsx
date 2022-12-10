import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addFavorite, removeFavorite } from "../redux/actions";

const DivStyle = styled.div`
   background-color: white;
   width: 100%;
   max-width: 15em;
   height: fit-content;
   border-radius: 5px;
   margin: 20px;
   transition: all 0.25s;
   &:hover,
   &:focus {
      transform: translateY(-15px);
      box-shadow: 0 12px 16px rgba(0,0,0, 0.2);
   }
`

const ButtonStyle = styled.button `
   background-color: red;
   color: white;
   border-color: grey;
   border-radius: 4px;
   border-style: solid;
   margin: 3px;
   cursor: pointer;
   position: relative;
   left: 100px;
`

const ImgStyle = styled.img `
   display: flex;
   width: 100%;
   height: 250px;
   margin-bottom: -60px;
`

const NameStyle = styled.h2 `
   color: white;
   margin-left: 8px;
   background-color: rgba(0, 0, 0, 50%);
   opacity: 0.99;
   width: fit-content;
   display: flex;
`

const H2Style = styled.h2 `
   margin-top: -10px;
   display: inline-flex;
   padding: 5px;
   font-size: 20px;
   font-weight: normal;
`

function Card(props, myFavorites, {addFavorite, removeFavorite}) {

   const [isFav, setIsFav] = useState(false);
   const handleFavorite = ()=>{
      if(isFav) {
         setIsFav(false);
         removeFavorite(props.id)
      } else {
         setIsFav(true);
         addFavorite(props)
      }
   }

   useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
   }, [myFavorites]);

   return (
     <DivStyle>
       {isFav ? (
         <ButtonStyle onClick={handleFavorite}>❤️</ButtonStyle>
       ) : (
         <ButtonStyle onClick={handleFavorite}>🤍</ButtonStyle>
       )}
       <ButtonStyle onClick={props.onClose}>X</ButtonStyle>
       <ImgStyle src={props.image} alt="" />
       <Link to={`/detail/${props.id}`}>
         <NameStyle>{props.name}</NameStyle>
       </Link>
       <H2Style>{props.gender}</H2Style>
       <H2Style>{props.species}</H2Style>
     </DivStyle>
   );
}

export function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites
   }
}

function mapDispatchToProps(dispatch){
   return {
      addFavorite: function(props){
         dispatch(addFavorite(props))
      },
      removeFavorite: function(id){
         dispatch(removeFavorite(id))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);