import CardImage from "components/Card/CardImage";
import React, { Fragment, useEffect, useState } from "react";
import { Row, Col, Spinner, Button, Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemon } from "Redux/pokemon";
import { clearFound } from "Redux/pokemon";
import Swal from "sweetalert2";
function Home() {
  const [limit, setLimit] = useState(30);
  const [load, setLoad] = useState(true);
  const { pokemons, notFound } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemon({ limit }));
  }, [limit, dispatch]);

  useEffect(() => {
    if (pokemons.length > 0) {
      setLoad(false);
    }
  }, [pokemons]);

  const loadMorepokemon = (event) => {
    setLoad(true);
    setLimit(limit + 30);
  };

  if (notFound) {
    Swal.fire("Pokemon", "Not found", "error");
    dispatch(clearFound());
  }

  return (
    <div>
      <Row className="d-flex justify-content-center">
        <Col xl={9}>
          {pokemons?.length === 0 && (
            <div className="mt-5 d-flex justify-content-center align-items-center">
              <Spinner />
            </div>
          )}
            <Row className="gap-5 p-4 mt-4">
              {pokemons?.map((pokemon, index) => {
                return (
                  <Fragment>
                    <CardImage key={index} pokemon={pokemon} />
                  </Fragment>
                );
              })}
            </Row>
        </Col>
        <Col xl={12} sm={12} md={12} classNamed="d-flex justify-content-center">
          <div className="d-flex justify-content-center ">
            <Button
              color={load ? "secondary" : "info"}
              disabled={load}
              onClick={loadMorepokemon}
            >
              Load more...
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
