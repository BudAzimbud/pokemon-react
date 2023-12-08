import _debounce from "lodash/debounce";
import CardImage from "components/Card/CardImage";
import React, { Fragment, useEffect, useState, useRef } from "react";
import { Row, Col, Spinner } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemon } from "Redux/pokemon";
import { clearFound } from "Redux/pokemon";
import Swal from "sweetalert2";

function Home() {
  const [limit, setLimit] = useState(30);
  const [load, setLoad] = useState(true);
  const { pokemons, notFound } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const loaderRef = useRef(null);

  useEffect(() => {
    dispatch(getAllPokemon({ limit }));
  }, [limit, dispatch]);

  useEffect(() => {
    if (pokemons.length > 0) {
      setLoad(false);
    }
  }, [pokemons]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (pokemons.length >= 30 && pokemons.length % 30 === 0) {
            setLoad(true);
            setLimit((prevLimit) => prevLimit + 30);
          }
        }
      },
      {
        root: null,
        rootMargin: "20px",
        threshold: 0.1,
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [pokemons]);

  if (notFound) {
    Swal.fire("Pokemon", "Not found", "error");
    dispatch(clearFound());
  }

  return (
    <div>
      <Row className="d-flex justify-content-center">
        <Col xl={9}>
          <Row className="gap-5 p-4 mt-5">
            {pokemons?.map((pokemon, index) => {
              return (
                <Fragment key={index}>
                  <CardImage pokemon={pokemon} />
                </Fragment>
              );
            })}
          </Row>
        </Col>
      </Row>
      <div ref={loaderRef} className="d-flex justify-content-center">
        {load && <Spinner />}
      </div>
    </div>
  );
}

export default Home;
