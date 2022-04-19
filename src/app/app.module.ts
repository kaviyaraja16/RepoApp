import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS  } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoryComponent } from './repository/repository.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, UrlSegment } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    NavbarComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
