import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persondetail',
  templateUrl: './persondetail.component.html',
  styleUrls: ['./persondetail.component.css']
})
export class PersondetailComponent implements OnInit {

  constructor(private route:ActivatedRoute) { 
    this.route.params.subscribe(params => {
      console.log(params['id']);
      
    });
  }

  ngOnInit() {
  }

}
