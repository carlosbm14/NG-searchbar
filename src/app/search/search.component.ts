import { Component, OnInit } from '@angular/core';
import { Person, SearchService } from '../shared';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  query: string | undefined;
  searchResults: any;

  constructor() {}

  ngOnInit(): void {}

  search() {}
}
