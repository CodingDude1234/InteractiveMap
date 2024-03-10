import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { __classPrivateFieldGet } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class ApiInfoService {

  constructor(private http: HttpClient) {}
  private apiUrl = 'https://api.worldbank.org/v2/countries?format=json';

  // Update api url with the right country
  countryChange(idAttribute: String): void {
    this.apiUrl = `https://api.worldbank.org/v2/country/${idAttribute}?format=json`;
  }

  // Api call
  getCountries(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  
}
