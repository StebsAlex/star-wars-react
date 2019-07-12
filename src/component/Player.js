import React from 'react';
import Card from 'react-bootstrap/Card'

function Player(props) {

  const {player, gameType} = props;
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{player.name}</Card.Title>
          <Card.Text>
            Height: {gameType === "people" ? player.height + ' cm' : player.length + ' meters'}
          </Card.Text>
          <Card.Text>
            {gameType === "people" ? 'Weight: ' + player.mass + ' kg' : 'Crew size: ' + player.crew}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
export default Player;