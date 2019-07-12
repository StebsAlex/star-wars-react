import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import selectPlayer from './select-player'
import fetchPlayers from './fetch-players'
import Player from './Player';
import winner from './winner';

const Board = ({gameType}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [player1, setPlayer1] = useState();
  const [player2, setPlayer2] = useState();
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);

  useEffect(() => {
    fetchPlayers(gameType).then(res => {
      console.log(res.results)
      const player1 = selectPlayer(res.results);
      const player2 = selectPlayer(res.results, player1);
      setPlayer1(player1);
      setPlayer2(player2);
      setItems(res.results);
      setIsLoaded(true);
      const winningPlayer = winner(player1, player2, gameType);
      if (winningPlayer === player1) {
        setPlayer1Wins(player1Wins + 1);
      } else {
        setPlayer2Wins(player2Wins + 1);
      }
    });
  }, [gameType]);

  return isLoaded ? (
    <>
      <div className="row">
        <div className="col-sm-6">
          <h3>Player 1</h3>
          <Player player={player1} gameType={gameType} />
          <h4> Player 1 won {player1Wins}</h4>
        </div>
        <div className="col-sm-6">
          <h3>Player 2</h3>
          <Player player={player2} gameType={gameType} />
          <h4> Player 2 won {player2Wins}</h4>
        </div>
      </div>
    </>
  ) : (
      <div> Loading ...</div>
    );
}

Board.propTypes = {
  gameType: PropTypes.oneOf(['people', 'starships']),
};

export default Board;
