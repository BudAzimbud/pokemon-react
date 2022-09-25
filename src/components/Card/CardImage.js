import React from "react";
import {
  Col,
  Card,
  CardImg,
  CardTitle,
  CardBody,
  Badge,
} from "reactstrap";
import "./CardImage.css";
import PokemonModal from "../Modal/ModalPokemon";
function CardImage({ pokemon }) {
  const [modalLive, setModalLive] = React.useState(false);

  return (
    <Col xl={4} sm={4} md={4} className="wrapper-card font-monserrat">
      <Card onClick={(event)=>setModalLive(true)} style={{cursor:'pointer'}}>
        <CardImg
          alt="Card image cap"
          src={pokemon.sprites.front_default}
          top
          loading="lazy"
          width="100%"
        />
        <CardBody>
          <CardTitle
            tag={"h5"}
            style={{ color: "#5e5873" }}
            className="fw-bold"
          >
            {pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}
          </CardTitle>
          <div className="d-flex align-items-center">
            <div className="d-flex ">
              {pokemon.types.map((type) => (
                <Badge className="fw-bold text-secondary mr-1">
                  {type.type.name}
                </Badge>
              ))}
            </div>
        
            <PokemonModal modalLive={modalLive} pokemon={pokemon} setModalLive={setModalLive} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}

export default CardImage;
