import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({
  pokemonName,
  setPokemonName,
  hp,
  setHp,
  frontImage,
  setFrontImage,
  backImage,
  setBackImage,
  handleSubmit,
}) {
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitting form...");
          handleSubmit();
          setPokemonName("");
          setFrontImage("");
          setBackImage("");
          setHp("");
        }}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontImage}
            onChange={(e) => setFrontImage(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backImage}
            onChange={(e) => setBackImage(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
