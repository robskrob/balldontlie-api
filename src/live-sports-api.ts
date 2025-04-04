import HttpClient from "./http-client"

export default class LiveSportsApi {
  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  async fetchResource(url: string) {
    const response = await this.httpClient.retrieve(url)
    const jsonResponse = await response.json()

    if (jsonResponse) {
      return jsonResponse.data
    } else {
      return []
    }
  }
}

