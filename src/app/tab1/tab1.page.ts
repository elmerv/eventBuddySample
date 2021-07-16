import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import Geohash from 'latlon-geohash';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  location;
  result;
  position;
  events;
  optionsObj ={
    slidesPerView: 3
  }
  constructor(private geolocation: Geolocation, private service: ApiService, private router: Router) {}
  getLocation() {
    let geohash;
    return this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        geohash = Geohash.encode(resp.coords.latitude, resp.coords.longitude);
        this.position = geohash;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  checker(event){
    console.log("event: " + event);
    console.log(this.events);
    console.log(this.events._embedded.events);
  }
  // eventInfo(eventId){
  //   let id = eventId
  //   this.router.navigate(['/event-info/' + id])
  // }
  ngOnInit() {
    this.getLocation();
    let observable =  this.service.retrieveEvents(this.position);
    observable.subscribe((res) => {
      this.events = res;
    });
  }
}
