export default class HttpClient {
  apiKey: string
  client: typeof fetch;

  constructor(apiKey: string, options: any = {}) {
    this.client = options.client || fetch
    this.apiKey = apiKey || ''
  }

  async retrieve(url: string) {
    return await this.client(url, {
      method: "GET",
      headers: {
        'Authorization': this.apiKey || '',
        'Content-Type': 'application/json'
      }
    })
  }
}


