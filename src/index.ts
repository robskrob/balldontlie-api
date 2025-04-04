import HttpClient from "./http-client"
import LiveSportsApi from "./live-sports-api"
import draftRoundInformation from "./draft-round-information"
import { DraftRoundInformation, Player, Team } from "./types"


// INPUT

// Today there is a business need for us to look into how many first round and second round players there are for a given team. 
// This data is important as it shows how the team has been performing with their player picks in the NBA draft. 
// So, we are looking for a consolidated data to see how many players are from round 1 and round 2.

// OUTPUT

// Team Name: Golden State Warriors
// Draft Rounds: {"1": 13, "2": 7, "null": 5}

const findTeamByName = (teamsList: Team[], teamName: string) => {
  return teamsList.find((t: any) => {
    return t.full_name.toLowerCase().includes(teamName)
  })
}

(async () => {

  console.log("process argv", process.argv.slice(2))

  const teamName = process.argv.slice(2)[0].toLowerCase()

  try {

    const httpClient = new HttpClient(process.env.API_KEY || '')
    const lsa = new LiveSportsApi(httpClient)
    const teamsList: Team[] = await lsa.fetchResource("https://api.balldontlie.io/v1/teams")

    const team: Team = findTeamByName(teamsList, teamName)

    const players: Player[] = await lsa.fetchResource(`https://api.balldontlie.io/v1/players?team_ids[]=${team.id}`)

    const result: DraftRoundInformation = draftRoundInformation(players)
    console.log("Team Name: ", team.full_name)
    console.log("Draft Rounds: ", result)


  } catch (e: any) {
    console.log("the error", e)
  } 

})()
