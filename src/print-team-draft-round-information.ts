import { DraftRoundInformation, Player, Team } from "./types"

export default class PrintTeamDraftRoundInformation {
  draftRoundInformation: any;;
  liveSportsApi: any;
  teamName: string;
  teamsUrl: string;

  constructor(draftRoundInformation: any, liveSportsApi: any, teamName: string, teamsUrl: string) {
    this.draftRoundInformation = draftRoundInformation
    this.liveSportsApi = liveSportsApi
    this.teamName = teamName || ''
    this.teamsUrl = teamsUrl || ''
  }

  async run() {
    const teamsList: Team[] = await this.liveSportsApi.fetchResource(this.teamsUrl)

    const team: Team = this.findTeamByName(teamsList, this.teamName)
    
    if (!team) {
      throw new Error(`Can not find team, ${process.argv.slice(2)[0]}`)
    }

    const players: Player[] = await this.liveSportsApi.fetchResource(`https://api.balldontlie.io/v1/players?team_ids[]=${team.id}`)

    const result: DraftRoundInformation = this.draftRoundInformation(players)
    console.log("Team Name: ", team.full_name)
    console.log("Draft Rounds: ", result)

  }

  private findTeamByName(teamsList: any, teamName: any) {
    return teamsList.find((t: any) => {
      return t.full_name.toLowerCase().includes(teamName)
    })

  }
}
