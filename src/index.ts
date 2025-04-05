import HttpClient from "./http-client"
import LiveSportsApi from "./live-sports-api"
import PrintTeamDraftRoundInformation from "./print-team-draft-round-information"
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
    const liveSportsApi = new LiveSportsApi(httpClient)
    const printInformation = new PrintTeamDraftRoundInformation(
      draftRoundInformation,
      liveSportsApi,
      teamName,
      "https://api.balldontlie.io/v1/teams"
    )

    printInformation.run()
  } catch (error) {
    console.log(error)
  } 

})()
