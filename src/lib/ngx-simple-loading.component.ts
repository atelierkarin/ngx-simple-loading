import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-simple-loading',
  templateUrl: './ngx-simple-loading.component.html',
  styleUrls: ['./ngx-simple-loading.component.css']
})
export class NgxSimpleLoadingComponent implements OnInit {

  @Input('text') loadingText: string = "Now Loading...";

  constructor() { }

  ngOnInit() {
  }

}
