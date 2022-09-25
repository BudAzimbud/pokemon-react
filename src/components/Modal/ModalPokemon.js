import React from "react";
import { Modal } from "reactstrap";
import { Progress } from "reactstrap";
export default function PokemonModal({ setModalLive, modalLive, pokemon }) {
  return (
    <>
      <Modal toggle={() => setModalLive(false)} isOpen={modalLive}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLiveLabel">
            Detail Pokemon
          </h5>
          <button
            aria-label="Close"
            className="close"
            type="button"
            onClick={() => setModalLive(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className=" text-center">
          <img
            src={pokemon.sprites.front_default}
            className="rounded-circle border"
            width={200}
            alt="pokemon"
            height={200}
          />
          <div className="p-3 ">
            <h3 className="fw-bold text-dark">
              Name : {pokemon.name} , Base Experience :{" "}
              {pokemon.base_experience}{" "}
            </h3>
            <span>Ability : </span>
            { 
                pokemon.abilities.map(({ability})=> (
                  <span key={ability.name} className='p-1 bg-warning text-light rounded mr-1'>{ability.name}</span>
                ))
              }
            {pokemon.stats.map((stat, index) => (
              <div className="text-left" key={index}>
                <span>{stat.stat.name}</span>
                <Progress color="primary" max="100" value={stat.base_stat}>
                  <span className="progress-value">{stat.base_stat}</span>
                </Progress>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
}
