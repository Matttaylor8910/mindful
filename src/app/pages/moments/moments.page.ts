import {Component} from '@angular/core';

@Component({
  selector: 'app-moments',
  templateUrl: './moments.page.html',
  styleUrls: ['./moments.page.scss'],
})
export class MomentsPage {
  days = [
    {
      title: 'Today',
      moments:
          [
            {
              sections: [{
                type: 'text',
                text: 'Example thing I did today, wow so cool!',
              }]
            },
            {
              sections: [{
                type: 'text',
                text:
                    'Something else I did wow so cool! Played some foosball, hung out with Mike, yeah!',
              }]
            },
          ],
    },
    {
      title: 'Yesterday',
      moments:
          [
            {
              sections: [{
                type: 'text',
                text: 'One more thing I did today, wow so cool!',
              }]
            },
            {
              sections: [{
                type: 'text',
                text:
                    'Something else I did wow so cool! Played some basketball, hung out with Greg, yeah!',
              }]
            },
          ],
    },
  ];

  constructor() {}
}
