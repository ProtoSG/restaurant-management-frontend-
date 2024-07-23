export interface Api {
  get(url: string): Promise<any>;
  post(url: string, data: any): Promise<any>;
  put(url: string, data: any): Promise<any>;
  delete(url: string): Promise<any>;
}

export class ApiImpl implements Api {
  private baseUrl: string = "http://localhost:8080";

  async get(url: string): Promise<any> {
    const response = await fetch(this.baseUrl + url);
    return response.json();
  }

  async post(url: string, data: any): Promise<any> {
    const response = await fetch(this.baseUrl + url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.json()
  }

  async put(url: string, data: any): Promise<any> {
    const response = await fetch(this.baseUrl + url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.json()
  }

  async delete(url: string): Promise<any> {
    const response = await fetch(this.baseUrl + url, {
      method: 'DELETE',
    })
    return response.json()
  }
}
