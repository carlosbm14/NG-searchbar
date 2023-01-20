import { Component, OnInit } from '@angular/core';
import { Person, SearchService } from '../shared';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  query: string | undefined;
  searchResults: Person[] = [];

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  search(): void {
    this.searchService.getAll().subscribe({
      next: (data: Person[]) => {
        this.searchResults = data;
      },
      error: (e) => console.log(e),
    });
  }
}
