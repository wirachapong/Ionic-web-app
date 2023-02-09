import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Temp } from '../../src/models/temp.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherProviderService {
  constructor(public http: HttpClient) { }

  getTemp(dis: String, subdis: String) {
    return this.http.get<Temp>("http://781b-35-188-149-138.ngrok.io/getweather?district=" + dis + "&subdistrict=" + subdis);
  }
}
