import { Component ,EventEmitter, OnInit, Output} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'
import { HttpClientModule,HTTP_INTERCEPTORS  } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'repository';
}
