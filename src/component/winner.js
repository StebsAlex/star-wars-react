
const winner = (player1, player2, gameType) => {
  let player1Score;
  let player2Score;

  const prop = gameType === 'people' ? 'mass' : 'crew';
  player1Score = player1[prop];
  player2Score = player2[prop];

  return player1Score > player2Score ? player1 : player2;
}

export default winner;