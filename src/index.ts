import HttpClient from "./http-client"
import LiveSportsApi from "./live-sports-api"

// async function fetchResource(url: string): Promise<any> {
//   const response =  await fetch(url, {
//     method: "GET",
//     headers: {
//       'Authorization': process.env.API_KEY || '', // Use "Bearer" or "Basic" as needed
//       'Content-Type': 'application/json'
//     }
//   })

//   const jsonResponse = await response.json();

//   if (jsonResponse) {
//     return jsonResponse.data
//   } else {
//     return []
//   }
// }



// INPUT

// Today there is a business need for us to look into how many first round and second round players there are for a given team. 
// This data is important as it shows how the team has been performing with their player picks in the NBA draft. 
// So, we are looking for a consolidated data to see how many players are from round 1 and round 2.

// OUTPUT

// Team Name: Golden State Warriors
// Draft Rounds: {"1": 13, "2": 7, "null": 5}

const draftRoundInformation = (players: any) => {
  return players.reduce((acc: any, player: any) => {

    if (acc.hasOwnProperty(player.draft_round)) {
      acc[player.draft_round] ++
    } else {
      acc["null"] ++
    }

    return acc;
  }, {"1": 0, "2": 0, "null": 0})
}

(async () => {

  console.log("process argv", process.argv.slice(2))

  const teamName = process.argv.slice(2)[0].toLowerCase()

  try {
    // const teamsList: any = await fetchResource("https://api.balldontlie.io/v1/teams")

    const httpClient = new HttpClient(process.env.API_KEY || '')
    const lsa = new LiveSportsApi(httpClient)
    const teamsList = await lsa.fetchResource("https://api.balldontlie.io/v1/teams")

    const team: any = teamsList.find((t: any) => {
      return t.full_name.toLowerCase().includes(teamName)
    })


    // const players: any = await fetchResource(`https://api.balldontlie.io/v1/players?team_ids[]=${team.id}`)
    const players = await lsa.fetchResource(`https://api.balldontlie.io/v1/players?team_ids[]=${team.id}`)


    const result: any = draftRoundInformation(players)
    console.log("Team Name: ", team.full_name)
    console.log("Draft Rounds: ", result)


  } catch (e: any) {
    console.log("the error", e)
  } 

})()
