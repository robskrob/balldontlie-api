import { expect } from "chai"
import * as sinon from "sinon";
import PrintTeamDraftRoundInformation from "../src/print-team-draft-round-information"
import HttpClient from "../src/http-client"
import LiveSportsApi from "../src/live-sports-api"
import { DraftRoundInformation, Player, Team } from "../src/types"

import players from "./data/players"
import teams from "./data/teams"

describe("PrintTeamDraftRoundInformation", () => {
  let mock;
  let draftRoundInformationStub: sinon.SinonStub
  let consoleLogStub: sinon.SinonStub
  let instance: PrintTeamDraftRoundInformation

  let liveSportsApi;
  let httpClient;

  const mockDraftResult: DraftRoundInformation = { '1': 12, '2': 6, null: 7 }

  beforeEach(() => {

    httpClient = new HttpClient("api-key")
    liveSportsApi = new LiveSportsApi(httpClient) 
    mock = sinon.mock(liveSportsApi)

    draftRoundInformationStub = sinon.stub().returns(mockDraftResult)
    instance = new PrintTeamDraftRoundInformation(
      draftRoundInformationStub,
      liveSportsApi,
      "lakers",
      "https://api.example.com"
    )
  })

  afterEach(() => {
    sinon.restore()
  })

  it("should fetch teams and players and log correct output", async () => {
    mock.expects("fetchResource").withArgs("https://api.example.com/teams").resolves(teams);
    mock.expects("fetchResource").withArgs("https://api.example.com/players?team_ids[]=14").resolves(players)

    await instance.run()

    expect(draftRoundInformationStub.calledOnceWithExactly(players)).to.be.true
    mock.verify()
  })

  it("should throw an error when team is not found", async () => {
    mock.expects("fetchResource").withArgs("https://api.example.com/teams").resolves([]);

    try {
      await instance.run()
      throw new Error("Expected error not thrown")
    } catch (err: any) {
      expect(err.message).to.include("Can not find team")
    }
  })
})
