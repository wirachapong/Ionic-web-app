import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Temp } from '../../models/temp.model';
import { WeatherProviderService } from '../weather-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public info$: Observable<Temp>;
  inputDistrict: string;
  inputSubdistrict: string;
  district: string;
  subdistrict: string;
  constructor(private tempProvider : WeatherProviderService) {}
  onSubmit() {
    this.district = this.inputDistrict;
    this.subdistrict = this.inputSubdistrict;
    this.info$ = this.tempProvider.getTemp(this.district, this.subdistrict);
  }
}