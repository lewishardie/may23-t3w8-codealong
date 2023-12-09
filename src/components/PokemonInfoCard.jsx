//-- Display tittle and image of Pokemon data
//-- Data comes from props

/*

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

*/

import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { PokemonTeamContext } from "../contexts/PokemonDataProvider";

export default function PokemonInfoCard(props){

    let {team, setTeam} = useContext(PokemonTeamContext);

    const deletePokemonFromTeam = (providedId) => {
        //-- find and delete Pokemon with matching ID from team context
        let teamCopy = JSON.parse(JSON.stringify(team));
        teamCopy = teamCopy.filter((obj) => {
            return obj.id !== providedId;
        });

        //-- set the updated team to context
        setTeam(teamCopy)
    }

    return(
        <Card className="pokemonInfoCard">
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Img src={props.imageUrl} alt="Default front sprite from PokeAPI"/>
                <Button onClick={(event) => deletePokemonFromTeam(props.pokemonId)} variant="outline-primary">Delete</Button>
            </Card.Body>
        </Card>
    )
}