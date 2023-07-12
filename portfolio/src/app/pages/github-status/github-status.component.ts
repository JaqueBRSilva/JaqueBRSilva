import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-status',
  templateUrl: './github-status.component.html',
  styleUrls: ['./github-status.component.sass']
})
export class GithubStatusComponent implements OnInit {

  githubStatusTheme: string = 'react'
  interfaceLanguage: string = 'pt-br'

  constructor() { }

  ngOnInit(): void {
  }

}
