import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage {
  people = [
    {
      name: 'Ryan',
      summary: 'Last hung out yesterday',
      photo:
          'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
    },
    {
      name: 'Greg',
      summary: 'Last hung out Saturday',
      photo:
          'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
    },
    {
      name: 'Justin',
      summary: 'Last hung out Feb 12',
      photo:
          'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
    }
  ];

  constructor() {}
}
