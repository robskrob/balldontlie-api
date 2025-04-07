import HttpClient from "./http-client"
import LiveSportsApi from "./live-sports-api"
import PrintTeamDraftRoundInformation from "./print-team-draft-round-information"
import draftRoundInformation from "./draft-round-information"
import { DraftRoundInformation, Player, Team } from "./types"


(async () => {

  const teamName = process.argv.slice(2)[0].toLowerCase()

  try {

    const httpClient = new HttpClient(process.env.API_KEY || '')
    const liveSportsApi = new LiveSportsApi(httpClient)
    const printInformation = new PrintTeamDraftRoundInformation(
      draftRoundInformation,
      liveSportsApi,
      teamName,
      "https://api.balldontlie.io/v1"
    )

    printInformation.run()
  } catch (error) {
    console.log(error)
  } 

})()
