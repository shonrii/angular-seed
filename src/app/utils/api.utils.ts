import {
  Headers,
  RequestOptions,
  URLSearchParams
} from '@angular/http';

export class ApiUtils {
  static generateOptions(requestType: string, searchParams?: URLSearchParams): RequestOptions {
    const headers = new Headers();
    if (requestType === 'PUT' || requestType === 'POST') {
      headers.append('Content-Type', 'application/json');
    }

    const options = new RequestOptions({ headers: headers });
    if (searchParams) {
      options.search = searchParams;
    }
    return options;
  }
}
