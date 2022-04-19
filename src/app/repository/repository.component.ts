import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'
import { HttpClientModule,HTTP_INTERCEPTORS  } from "@angular/common/http";
import { RepositoryListService } from '../repository-list.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
id:any;
title:any;
description:any;
REPOSITORIES:any;
page: number = 1;
count: number = 0;
tableSize: number = 10;
isShown:any;

  constructor(private repositoryService: RepositoryListService) { }

  ngOnInit(): void {
this.fetchRepositories();
    
  }
  fetchRepositories(): void {
    this.repositoryService.getAllPosts().subscribe(
      (response) => {
        this.REPOSITORIES = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  pageChange(event: any) {
    this.page = event;
    this.fetchRepositories();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchRepositories();
  }
  showLoader(event:any){
    this.isShown = true;
    setTimeout(()=>{
      this.isShown = false;
    },500)
  }
}


