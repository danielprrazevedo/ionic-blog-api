import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export abstract class BaseRequest<T> {
  private baseUrl: string = environment.serverUrl;
  protected path: string;
  protected http: HttpClient;

  private criarUrl(idOuQuery?: any): string {
    let url = `${this.baseUrl}/${this.path}`;
    if (!idOuQuery) {
      return url;
    }
    if (typeof idOuQuery === 'number' || typeof idOuQuery === 'string') {
      url += `/${idOuQuery}`;
    } else {
      const queryString = Object.keys(idOuQuery)
        .map((key) => `${key}=${idOuQuery[key]}`)
        .join('&');
      url += `?${queryString}`;
    }
    return url;
  }

  private criarRequisicao(
    url: string,
    type: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: any | Partial<T>
  ): Observable<any> {
    const token = localStorage.getItem('token');
    const options: any = {};

    if (token) {
      options.headers = { Authorization: `Bearer ${token}` };
    }

    if (body) {
      options.body = body;
    }

    return this.http.request(type, url, options);
  }

  get(id: string): Observable<T>;
  get(query?: any): Observable<T[]>;

  get(idOuQuery?: any): Observable<T | T[]> {
    return this.criarRequisicao(this.criarUrl(idOuQuery), 'GET');
  }
  post(model: Partial<T>): Observable<T> {
    return this.criarRequisicao(this.criarUrl(), 'POST', model);
  }
  put(id: string, model: Partial<T>): Observable<T> {
    return this.criarRequisicao(this.criarUrl(id), 'PUT', model);
  }
  delete(id: string): Observable<T> {
    return this.criarRequisicao(this.criarUrl(id), 'DELETE');
  }
}
