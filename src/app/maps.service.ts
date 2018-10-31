import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface Location {
  latitude: string;
  longitude: string;
  country_name: string;
  city: string;
}
@Injectable({
  providedIn: "root"
})
export class MapsService {
  constructor(private http: HttpClient) {}

  getLocation() {
    return this.http.get<Location>("https://ipapi.co/178.139.88.229/json/");
  }
}
