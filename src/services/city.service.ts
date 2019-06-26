import {Injectable} from '@angular/core';
import {City} from '../model/city.model';
import {Observable} from 'rxjs';

import {HttpClient} from '@angular/common/http';


@Injectable({
    // we declare that this service should be created
    // by the root application injector.
    providedIn: 'root',
  })
export class CityService {

    private apiUrl = 'http://localhost:8080/dataview';

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<City[]> {
        return this.http
          .get<City[]>(this.apiUrl)
      }
}

