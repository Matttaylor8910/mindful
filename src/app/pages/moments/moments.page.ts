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
      people: [{
        photo: 'https://ca.slack-edge.com/T1KAG2BV5-U6742JEP9-e80927d6b182-72',
      }],
      moments:
          [
            {
              sections: [{
                type: 'text',
                text:
                    `Played some codenames with Tyler Rencher's parents, Lance and Laura. Armin and his girlfriend Ciarra jumped in too and it was just a blast. His parents are too fun!`,
              }]
            },
            {
              sections: [{
                type: 'text',
                text:
                    `Merritt's with Stephen. The strawberry topped scone with powdered sugar and the breakfast bowl with sausage and scrambled eggs is so freaking good!`,
              }]
            },
          ],
    },
    {
      title: 'Yesterday',
      people:
          [
            {
              photo:
                  'https://ca.slack-edge.com/T1KAG2BV5-U6742QJNB-837adc701198-48',
            },
            {
              photo:
                  'https://pbs.twimg.com/profile_images/522547950644256768/z7DojeXg.jpeg',
            }
          ],
      moments:
          [
            {
              sections: [{
                type: 'text',
                text:
                    'IHOP with Josh and Gunnar. Josh trying to max again soon. Current is 195. Talks about video games being a waste. Josh’s breakfast bowl sucked. Maybe going to hit up Merritts sometime',
              }]
            },
            {
              sections: [{
                type: 'text',
                text:
                    `Ziplines were so much better than I thought they’d be. Getting the double sayulita (crazy spin) was super fun and nauseating. Did a front flip and some bounces too. Great time.`,
              }]
            },
          ],
    },
  ];

  constructor() {}
}
