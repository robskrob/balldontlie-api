export default class HttpClient {
  apiKey: string
  client: any;

  constructor(apiKey: string, options: any = {}) {
    this.client = options.client || fetch
    this.apiKey = apiKey || ''
  }

  async retrieve(url: string) {
    return await this.client(url, {
      method: "GET",
      headers: {
        'Authorization': this.apiKey || '', // Use "Bearer" or "Basic" as needed
        'Content-Type': 'application/json'
      }
    })
  }
}


