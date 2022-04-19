import { Component, OnInit,AfterViewInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
isShown:any;

  constructor() { }

  ngOnInit(): void {
    this.isShown = true;
    setTimeout(()=>{
      this.isShown = false;
    },3000)
  }

}
