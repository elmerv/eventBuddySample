import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api-service.service';
@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.page.html',
  styleUrls: ['./event-info.page.scss'],
})
export class EventInfoPage implements OnInit {

  constructor(private route: ActivatedRoute, private service: ApiService) { }
  info;
  checker(){
    console.log(this.info);
  }
  ngOnInit() {
    this.getEventInfo();
  }
  getEventInfo(){
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.service.retrieveEventInfo(id).subscribe(info => this.info = info);
  }
}
