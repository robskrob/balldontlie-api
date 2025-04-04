import * as sinon from "sinon";

import HttpClient from "../src/http-client"
import LiveSportsApi from "../src/live-sports-api"

describe('LiveSportsApi', function () {
  describe('#fetchResource()', function () {
    it('delegates fetch to its HTTP client to get the resouce', async function () {
      const httpClient = new HttpClient("123")
      const mock = sinon.mock(httpClient)

      const lsa = new LiveSportsApi(httpClient)
      mock.expects("retrieve").once().resolves({
        json: async () => ({data: []})
      });

      await lsa.fetchResource("")

      mock.verify()

    });
  });
});
