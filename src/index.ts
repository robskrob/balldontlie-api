import HttpClient from "./http-client"
import LiveSportsApi from "./live-sports-api"
import draftRoundInformation from "./draft-round-information"
import { DraftRoundInformation, Player, Team } from "./types"


const findTeamByName = (teamsList: Team[], teamName: string) => {
  return teamsList.find((t: any) => {
    return t.full_name.toLowerCase().includes(teamName)
  })
}

(async () => {

  const teamName = process.argv.slice(2)[0].toLowerCase()

  try {

    const httpClient = new HttpClient(process.env.API_KEY || '')
    const lsa = new LiveSportsApi(httpClient)
    const teamsList: Team[] = await lsa.fetchResource("https://api.balldontlie.io/v1/teams")

    const team: Team = findTeamByName(teamsList, teamName)
    
    if (!team) {
      throw new Error(`Can not find team, ${process.argv.slice(2)[0]}`)
    }

    const players: Player[] = await lsa.fetchResource(`https://api.balldontlie.io/v1/players?team_ids[]=${team.id}`)

    const result: DraftRoundInformation = draftRoundInformation(players)
    console.log("Team Name: ", team.full_name)
    console.log("Draft Rounds: ", result)


  } catch (error) {
    console.log(error)
  } 

})()
