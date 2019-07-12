const selectPlayer = (players, excludePlayer) => {
  //debugger;
  let availablePlayers = players;
  if (excludePlayer) {
    const excludePlayerId = excludePlayer.url;
    availablePlayers = availablePlayers.filter(player => {
      return player.url !== excludePlayerId;
    });
  }
  const number = Math.random() * availablePlayers.length;
  const randomIndex = Math.floor(number);
  return availablePlayers[randomIndex];
}

export default selectPlayer;
