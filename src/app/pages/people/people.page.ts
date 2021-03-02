import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage {
  people = [
    {
      name: 'Jen',
      summary: 'Had a moment yesterday',
      photo: 'https://ca.slack-edge.com/T1KAG2BV5-U6TTUFNMS-d1d06567fce7-72',
    },
    {
      name: 'Greg',
      summary: 'Had a moment Saturday',
      photo: 'https://ca.slack-edge.com/T1KAG2BV5-U6742QJNB-837adc701198-48',
    },
    {
      name: 'Mike',
      summary: 'Had a moment Saturday',
      photo: 'https://ca.slack-edge.com/T1KAG2BV5-U6742JEP9-e80927d6b182-72',
    },
    {
      name: 'Justin',
      summary: 'Last moment about a month ago',
      photo: 'https://i.imgur.com/i6UCS1c.png',
    },
    {
      name: 'Brik',
      summary: 'Last moment about a year ago',
      photo:
          'https://pbs.twimg.com/profile_images/522547950644256768/z7DojeXg.jpeg',
    },
  ];

  constructor() {}
}
