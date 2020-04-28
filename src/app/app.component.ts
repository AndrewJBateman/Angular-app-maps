import { Component } from "@angular/core";
import { MapsService } from "./maps.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  lat = "";
  lng = "";
  country = "";
  calling_code = "";
  city = "";
  ip = 0;
  location: Object;

  constructor(private map: MapsService) {}

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.map.getLocation().subscribe((data) => {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
      this.country = data.country_name;
      this.calling_code = data.country_calling_code;
      this.city = data.city;
      this.ip = data.ip;
    });
  }
}
