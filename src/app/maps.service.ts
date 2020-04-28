import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface Location {
  latitude: string;
  longitude: string;
  country_name: string;
  country_calling_code: string;
  city: string;
  ip: 0;
}
@Injectable({
  providedIn: "root",
})
export class MapsService {
  constructor(private http: HttpClient) {}

  getLocation() {
    return this.http.get<Location>("https://ipapi.co/json/");
  }
}
