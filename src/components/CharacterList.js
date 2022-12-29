import React, { useCallback } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const CharacterCard = ({ name, species, location, image }) => {
  return (
    <Card style={{ minWidth: "200px" }}>
      <CardImg top src={image} alt="character" />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <hr />
        <CardText>Species: {species}</CardText>
        <CardText>Location: {location.name}</CardText>
      </CardBody>
    </Card>
  );
};

const CharacterList = ({ characters }) => {
  const renderCharacters = useCallback(() => {
    return characters.map((item, index) => (
      <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
        <CharacterCard
          name={item.name}
          species={item.species}
          location={item.location}
          image={item.image}
        />
      </div>
    ));
  }, [characters]);

  return (
    <div className="container">
      <div className="row">{renderCharacters()}</div>
    </div>
  );
};

export default CharacterList;
