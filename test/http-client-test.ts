import * as sinon from "sinon";

import HttpClient from "../src/http-client"

describe('HttpClient', function () {
  describe('#retrieve()', function () {
    it('delegates to its client to make GET request', async function () {
      const stubbedFetch = sinon.stub().resolves({
        json: async () => ({})
      });


      const client = new HttpClient("my-api-key", { client: stubbedFetch });

      await client.retrieve("https://example.com");

      sinon.assert.calledOnce(stubbedFetch);
      sinon.assert.calledWith(stubbedFetch, "https://example.com", sinon.match({
        method: "GET",
        headers: {
          'Authorization': 'my-api-key',
          'Content-Type': 'application/json'
        }
      }));

    });
  });
});
