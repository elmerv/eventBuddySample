import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private http: HttpClient) { }

  retrieveEvents(location: any){
    let params = new HttpParams().set("geoPoint",location).set("radius", "5"); //Create new HttpParams
    return this.http.get("https://app.ticketmaster.com/discovery/v2/events.json?apikey=5A8Ua0tmga0cBA0yLNnIdpCTkqbVPV8R");
  }
  retrieveEventInfo(id){
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin','*');

    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=5A8Ua0tmga0cBA0yLNnIdpCTkqbVPV8R`);
  }
}
