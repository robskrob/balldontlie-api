import { DraftRoundInformation, Player } from "./types"


const draftRoundInformation = (players: Player[]) => {
  return players.reduce((acc: DraftRoundInformation, player: Player) => {

    if (acc.hasOwnProperty(player.draft_round)) {
      acc[player.draft_round] ++
    } else {
      acc["null"] ++
    }

    return acc;
  }, {"1": 0, "2": 0, "null": 0})
}

export default draftRoundInformation; 
