class HttpClient {
  constructor(private readonly baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get(path: string): Promise<any> {
    const res = await fetch(`${this.baseUrl}${path}`);
    return res.json();
  }
}

export default HttpClient;
