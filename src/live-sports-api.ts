export default class LiveSportsApi {
  httpClient: any;

  constructor(httpClient: any) {
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

