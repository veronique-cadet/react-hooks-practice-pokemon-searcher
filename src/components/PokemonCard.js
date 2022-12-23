import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, sprites }) {
  const [changeImage, setChangeImage] = useState(true);
  return (
    <Card>
      <div>
        {changeImage ? (
          <div className="image">
            <img
              src={sprites.front}
              alt="oh no!"
              onClick={() => setChangeImage(!changeImage)}
            />
          </div>
        ) : (
          <div className="image">
            <img
              src={sprites.back}
              alt="oh no!"
              onClick={() => setChangeImage(!changeImage)}
            />
          </div>
        )}
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
