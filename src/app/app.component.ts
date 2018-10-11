import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'easy-musique';
  objetTest = {
    resultsPage: {
      status: 'ok',
      results: {
        event: [
          {
            id: 33830809,
            displayName:
              "KIKESA and 13 Block at L'Autre Canal (October 12, 2018)",
            type: 'Concert',
            uri:
              'http://www.songkick.com/concerts/33830809-kikesa-at-lautre-canal?utm_source=51137&utm_medium=partner',
            status: 'ok',
            popularity: 0.000177,
            start: {
              date: '2018-10-12',
              datetime: '2018-10-12T20:00:00+0200',
              time: '20:00:00'
            },
            performance: [
              {
                id: 66213729,
                displayName: 'KIKESA',
                billing: 'headline',
                billingIndex: 1,
                artist: {
                  id: 9590564,
                  displayName: 'KIKESA',
                  uri:
                    'http://www.songkick.com/artists/9590564-kikesa?utm_source=51137&utm_medium=partner',
                  identifier: [
                    {
                      mbid: '96b9f840-2129-4a04-8a83-91f62d8ecd5b',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:96b9f840-2129-4a04-8a83-91f62d8ecd5b.json'
                    }
                  ]
                }
              },
              {
                id: 68105284,
                displayName: '13 Block',
                billing: 'headline',
                billingIndex: 2,
                artist: {
                  id: 9552549,
                  displayName: '13 Block',
                  uri:
                    'http://www.songkick.com/artists/9552549-13-block?utm_source=51137&utm_medium=partner',
                  identifier: [
                    {
                      mbid: 'ee281c14-5420-478c-899e-52beed04ae8a',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:ee281c14-5420-478c-899e-52beed04ae8a.json'
                    }
                  ]
                }
              }
            ],
            ageRestriction: null,
            flaggedAsEnded: false,
            venue: {
              id: 69254,
              displayName: "L'Autre Canal",
              uri:
                'http://www.songkick.com/venues/69254-lautre-canal?utm_source=51137&utm_medium=partner',
              metroArea: {
                displayName: 'Nancy',
                country: { displayName: 'France' },
                id: 28899,
                uri:
                  'http://www.songkick.com/metro_areas/28899-france-nancy?utm_source=51137&utm_medium=partner'
              },
              lat: 48.69302,
              lng: 6.20144
            },
            location: { city: 'Nancy, France', lat: 48.69302, lng: 6.20144 }
          },
          {
            id: 34195034,
            displayName:
              'Lorenzo and KIKESA at La Boîte à Musiques (BAM) (October 13, 2018)',
            type: 'Concert',
            uri:
              'http://www.songkick.com/concerts/34195034-lorenzo-at-la-boite-a-musiques?utm_source=51137&utm_medium=partner',
            status: 'ok',
            popularity: 0.002051,
            start: {
              date: '2018-10-13',
              datetime: '2018-10-13T20:30:00+0200',
              time: '20:30:00'
            },
            performance: [
              {
                id: 65651924,
                displayName: 'Lorenzo',
                billing: 'headline',
                billingIndex: 1,
                artist: {
                  id: 250359,
                  displayName: 'Lorenzo',
                  uri:
                    'http://www.songkick.com/artists/250359-lorenzo?utm_source=51137&utm_medium=partner',
                  identifier: [
                    {
                      mbid: 'a0fc7a10-ddbe-4371-91cf-604bc448e123',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:a0fc7a10-ddbe-4371-91cf-604bc448e123.json'
                    },
                    {
                      mbid: '12fb2839-52b8-47e8-8265-886b5b613763',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:12fb2839-52b8-47e8-8265-886b5b613763.json'
                    },
                    {
                      mbid: 'b9c7eca2-3c76-4edd-aa4c-08fad75a4fb7',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:b9c7eca2-3c76-4edd-aa4c-08fad75a4fb7.json'
                    },
                    {
                      mbid: 'd90a6c75-62a2-42f2-8d65-99e8576a6f8c',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:d90a6c75-62a2-42f2-8d65-99e8576a6f8c.json'
                    },
                    {
                      mbid: '4819f102-edb0-46d4-a7b5-e3ee9e9576ed',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:4819f102-edb0-46d4-a7b5-e3ee9e9576ed.json'
                    }
                  ]
                }
              },
              {
                id: 67299269,
                displayName: 'KIKESA',
                billing: 'headline',
                billingIndex: 2,
                artist: {
                  id: 9590564,
                  displayName: 'KIKESA',
                  uri:
                    'http://www.songkick.com/artists/9590564-kikesa?utm_source=51137&utm_medium=partner',
                  identifier: [
                    {
                      mbid: '96b9f840-2129-4a04-8a83-91f62d8ecd5b',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:96b9f840-2129-4a04-8a83-91f62d8ecd5b.json'
                    }
                  ]
                }
              }
            ],
            ageRestriction: null,
            flaggedAsEnded: false,
            venue: {
              id: 2608668,
              displayName: 'La Boîte à Musiques (BAM)',
              uri:
                'http://www.songkick.com/venues/2608668-la-boite-a-musiques?utm_source=51137&utm_medium=partner',
              metroArea: {
                displayName: 'Metz',
                country: { displayName: 'France' },
                id: 28894,
                uri:
                  'http://www.songkick.com/metro_areas/28894-france-metz?utm_source=51137&utm_medium=partner'
              },
              lat: 49.11598,
              lng: 6.22694
            },
            location: { city: 'Metz, France', lat: 49.11598, lng: 6.22694 }
          },
          {
            id: 34260849,
            displayName:
              "Orelsan and KIKESA at Zénith d'Orléans (October 17, 2018)",
            type: 'Concert',
            uri:
              'http://www.songkick.com/concerts/34260849-orelsan-at-zenith-dorleans?utm_source=51137&utm_medium=partner',
            status: 'ok',
            popularity: 0.010787,
            start: {
              date: '2018-10-17',
              datetime: '2018-10-17T20:00:00+0200',
              time: '20:00:00'
            },
            performance: [
              {
                id: 65766939,
                displayName: 'Orelsan',
                billing: 'headline',
                billingIndex: 1,
                artist: {
                  id: 976593,
                  displayName: 'Orelsan',
                  uri:
                    'http://www.songkick.com/artists/976593-orelsan?utm_source=51137&utm_medium=partner',
                  identifier: [
                    {
                      mbid: '6cad3ce5-6380-4594-a8da-ae7d273b683d',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:6cad3ce5-6380-4594-a8da-ae7d273b683d.json'
                    }
                  ]
                }
              },
              {
                id: 68044224,
                displayName: 'KIKESA',
                billing: 'headline',
                billingIndex: 2,
                artist: {
                  id: 9590564,
                  displayName: 'KIKESA',
                  uri:
                    'http://www.songkick.com/artists/9590564-kikesa?utm_source=51137&utm_medium=partner',
                  identifier: [
                    {
                      mbid: '96b9f840-2129-4a04-8a83-91f62d8ecd5b',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:96b9f840-2129-4a04-8a83-91f62d8ecd5b.json'
                    }
                  ]
                }
              }
            ],
            ageRestriction: null,
            flaggedAsEnded: false,
            venue: {
              id: 123981,
              displayName: "Zénith d'Orléans",
              uri:
                'http://www.songkick.com/venues/123981-zenith-dorleans?utm_source=51137&utm_medium=partner',
              metroArea: {
                displayName: 'Orléans',
                country: { displayName: 'France' },
                id: 104996,
                uri:
                  'http://www.songkick.com/metro_areas/104996-france-orleans?utm_source=51137&utm_medium=partner'
              },
              lat: 47.87154,
              lng: 1.91272
            },
            location: { city: 'Orléans, France', lat: 47.87154, lng: 1.91272 }
          },
          {
            id: 34622694,
            displayName:
              "Di-meh with Gracy Hopkins and KIKESA at L'affranchi (October 19, 2018)",
            type: 'Concert',
            uri:
              'http://www.songkick.com/concerts/34622694-dimeh-at-laffranchi?utm_source=51137&utm_medium=partner',
            status: 'ok',
            popularity: 0.000332,
            start: {
              date: '2018-10-19',
              datetime: '2018-10-19T20:30:00+0200',
              time: '20:30:00'
            },
            performance: [
              {
                id: 66401984,
                displayName: 'Di-meh',
                billing: 'headline',
                billingIndex: 1,
                artist: {
                  id: 8926794,
                  displayName: 'Di-meh',
                  uri:
                    'http://www.songkick.com/artists/8926794-dimeh?utm_source=51137&utm_medium=partner',
                  identifier: [
                    {
                      mbid: 'eb1d279d-a204-4611-830f-746d398b7ac0',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:eb1d279d-a204-4611-830f-746d398b7ac0.json'
                    }
                  ]
                }
              },
              {
                id: 66400594,
                displayName: 'Gracy Hopkins',
                billing: 'support',
                billingIndex: 2,
                artist: {
                  id: 8628709,
                  displayName: 'Gracy Hopkins',
                  uri:
                    'http://www.songkick.com/artists/8628709-gracy-hopkins?utm_source=51137&utm_medium=partner',
                  identifier: [
                    {
                      mbid: 'f566f68f-1086-4367-bdbe-3abdde204bc9',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:f566f68f-1086-4367-bdbe-3abdde204bc9.json'
                    }
                  ]
                }
              },
              {
                id: 67795239,
                displayName: 'KIKESA',
                billing: 'support',
                billingIndex: 3,
                artist: {
                  id: 9590564,
                  displayName: 'KIKESA',
                  uri:
                    'http://www.songkick.com/artists/9590564-kikesa?utm_source=51137&utm_medium=partner',
                  identifier: [
                    {
                      mbid: '96b9f840-2129-4a04-8a83-91f62d8ecd5b',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:96b9f840-2129-4a04-8a83-91f62d8ecd5b.json'
                    }
                  ]
                }
              }
            ],
            ageRestriction: null,
            flaggedAsEnded: false,
            venue: {
              id: 591521,
              displayName: "L'affranchi",
              uri:
                'http://www.songkick.com/venues/591521-laffranchi?utm_source=51137&utm_medium=partner',
              metroArea: {
                displayName: 'Marseille',
                country: { displayName: 'France' },
                id: 156979,
                uri:
                  'http://www.songkick.com/metro_areas/156979-france-marseille?utm_source=51137&utm_medium=partner'
              },
              lat: 43.28659,
              lng: 5.46761
            },
            location: { city: 'Marseille, France', lat: 43.28659, lng: 5.46761 }
          },
          {
            id: 35256654,
            displayName: 'KIKESA at La Boule Noire (October 24, 2018)',
            type: 'Concert',
            uri:
              'http://www.songkick.com/concerts/35256654-kikesa-at-la-boule-noire?utm_source=51137&utm_medium=partner',
            status: 'ok',
            popularity: 5.7e-5,
            start: {
              date: '2018-10-24',
              datetime: '2018-10-24T20:00:00+0200',
              time: '20:00:00'
            },
            performance: [
              {
                id: 67500384,
                displayName: 'KIKESA',
                billing: 'headline',
                billingIndex: 1,
                artist: {
                  id: 9590564,
                  displayName: 'KIKESA',
                  uri:
                    'http://www.songkick.com/artists/9590564-kikesa?utm_source=51137&utm_medium=partner',
                  identifier: [
                    {
                      mbid: '96b9f840-2129-4a04-8a83-91f62d8ecd5b',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:96b9f840-2129-4a04-8a83-91f62d8ecd5b.json'
                    }
                  ]
                }
              }
            ],
            ageRestriction: null,
            flaggedAsEnded: false,
            venue: {
              id: 46999,
              displayName: 'La Boule Noire',
              uri:
                'http://www.songkick.com/venues/46999-la-boule-noire?utm_source=51137&utm_medium=partner',
              metroArea: {
                displayName: 'Paris',
                country: { displayName: 'France' },
                id: 28909,
                uri:
                  'http://www.songkick.com/metro_areas/28909-france-paris?utm_source=51137&utm_medium=partner'
              },
              lat: 48.8822,
              lng: 2.34014
            },
            location: { city: 'Paris, France', lat: 48.8822, lng: 2.34014 }
          },
          {
            id: 35512549,
            displayName: 'KIKESA at Rock School Barbey (October 25, 2018)',
            type: 'Concert',
            uri:
              'http://www.songkick.com/concerts/35512549-kikesa-at-rock-school-barbey?utm_source=51137&utm_medium=partner',
            status: 'ok',
            popularity: 9.7e-5,
            start: {
              date: '2018-10-25',
              datetime: '2018-10-25T20:30:00+0200',
              time: '20:30:00'
            },
            performance: [
              {
                id: 67932819,
                displayName: 'KIKESA',
                billing: 'headline',
                billingIndex: 1,
                artist: {
                  id: 9590564,
                  displayName: 'KIKESA',
                  uri:
                    'http://www.songkick.com/artists/9590564-kikesa?utm_source=51137&utm_medium=partner',
                  identifier: [
                    {
                      mbid: '96b9f840-2129-4a04-8a83-91f62d8ecd5b',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:96b9f840-2129-4a04-8a83-91f62d8ecd5b.json'
                    }
                  ]
                }
              }
            ],
            ageRestriction: null,
            flaggedAsEnded: false,
            venue: {
              id: 70007,
              displayName: 'Rock School Barbey',
              uri:
                'http://www.songkick.com/venues/70007-rock-school-barbey?utm_source=51137&utm_medium=partner',
              metroArea: {
                displayName: 'Bordeaux',
                country: { displayName: 'France' },
                id: 28851,
                uri:
                  'http://www.songkick.com/metro_areas/28851-france-bordeaux?utm_source=51137&utm_medium=partner'
              },
              lat: 44.82693,
              lng: -0.56356
            },
            location: { city: 'Bordeaux, France', lat: 44.82693, lng: -0.56356 }
          },
          {
            id: 35314679,
            displayName:
              'KIKESA at Mpt Penhars-salle Du Terrain Blanc (November 3, 2018)',
            type: 'Concert',
            uri:
              'http://www.songkick.com/concerts/35314679-kikesa-at-mpt-penharssalle-du-terrain-blanc?utm_source=51137&utm_medium=partner',
            status: 'ok',
            popularity: 5.7e-5,
            start: {
              date: '2018-11-03',
              datetime: '2018-11-03T20:30:00+0100',
              time: '20:30:00'
            },
            performance: [
              {
                id: 67601194,
                displayName: 'KIKESA',
                billing: 'headline',
                billingIndex: 1,
                artist: {
                  id: 9590564,
                  displayName: 'KIKESA',
                  uri:
                    'http://www.songkick.com/artists/9590564-kikesa?utm_source=51137&utm_medium=partner',
                  identifier: [
                    {
                      mbid: '96b9f840-2129-4a04-8a83-91f62d8ecd5b',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:96b9f840-2129-4a04-8a83-91f62d8ecd5b.json'
                    }
                  ]
                }
              }
            ],
            ageRestriction: null,
            flaggedAsEnded: false,
            venue: {
              id: 4035014,
              displayName: 'Mpt Penhars-salle Du Terrain Blanc',
              uri:
                'http://www.songkick.com/venues/4035014-mpt-penharssalle-du-terrain-blanc?utm_source=51137&utm_medium=partner',
              metroArea: {
                displayName: 'Quimper',
                country: { displayName: 'France' },
                id: 28914,
                uri:
                  'http://www.songkick.com/metro_areas/28914-france-quimper?utm_source=51137&utm_medium=partner'
              },
              lat: 47.98704,
              lng: -4.12636
            },
            location: { city: 'Quimper, France', lat: 47.98704, lng: -4.12636 }
          },
          {
            id: 34248914,
            displayName:
              'Lorenzo and KIKESA at Big Band Café (BBC) (November 9, 2018)',
            type: 'Concert',
            uri:
              'http://www.songkick.com/concerts/34248914-lorenzo-at-big-band-cafe?utm_source=51137&utm_medium=partner',
            status: 'ok',
            popularity: 0.002051,
            start: {
              date: '2018-11-09',
              datetime: '2018-11-09T20:00:00+0100',
              time: '20:00:00'
            },
            performance: [
              {
                id: 65747884,
                displayName: 'Lorenzo',
                billing: 'headline',
                billingIndex: 1,
                artist: {
                  id: 250359,
                  displayName: 'Lorenzo',
                  uri:
                    'http://www.songkick.com/artists/250359-lorenzo?utm_source=51137&utm_medium=partner',
                  identifier: [
                    {
                      mbid: 'a0fc7a10-ddbe-4371-91cf-604bc448e123',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:a0fc7a10-ddbe-4371-91cf-604bc448e123.json'
                    },
                    {
                      mbid: '12fb2839-52b8-47e8-8265-886b5b613763',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:12fb2839-52b8-47e8-8265-886b5b613763.json'
                    },
                    {
                      mbid: 'b9c7eca2-3c76-4edd-aa4c-08fad75a4fb7',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:b9c7eca2-3c76-4edd-aa4c-08fad75a4fb7.json'
                    },
                    {
                      mbid: 'd90a6c75-62a2-42f2-8d65-99e8576a6f8c',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:d90a6c75-62a2-42f2-8d65-99e8576a6f8c.json'
                    },
                    {
                      mbid: '4819f102-edb0-46d4-a7b5-e3ee9e9576ed',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:4819f102-edb0-46d4-a7b5-e3ee9e9576ed.json'
                    }
                  ]
                }
              },
              {
                id: 67299289,
                displayName: 'KIKESA',
                billing: 'headline',
                billingIndex: 2,
                artist: {
                  id: 9590564,
                  displayName: 'KIKESA',
                  uri:
                    'http://www.songkick.com/artists/9590564-kikesa?utm_source=51137&utm_medium=partner',
                  identifier: [
                    {
                      mbid: '96b9f840-2129-4a04-8a83-91f62d8ecd5b',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:96b9f840-2129-4a04-8a83-91f62d8ecd5b.json'
                    }
                  ]
                }
              }
            ],
            ageRestriction: null,
            flaggedAsEnded: false,
            venue: {
              id: 59226,
              displayName: 'Big Band Café (BBC)',
              uri:
                'http://www.songkick.com/venues/59226-big-band-cafe?utm_source=51137&utm_medium=partner',
              metroArea: {
                displayName: 'Caen',
                country: { displayName: 'France' },
                id: 28855,
                uri:
                  'http://www.songkick.com/metro_areas/28855-france-caen?utm_source=51137&utm_medium=partner'
              },
              lat: 49.21098,
              lng: -0.33619
            },
            location: {
              city: 'Hérouville Saint-Clair, France',
              lat: 49.21098,
              lng: -0.33619
            }
          },
          {
            id: 34623709,
            displayName: 'KIKESA and Yaro at Le Plan Club (November 10, 2018)',
            type: 'Concert',
            uri:
              'http://www.songkick.com/concerts/34623709-kikesa-at-le-plan-club?utm_source=51137&utm_medium=partner',
            status: 'ok',
            popularity: 0.000206,
            start: {
              date: '2018-11-10',
              datetime: '2018-11-10T20:00:00+0100',
              time: '20:00:00'
            },
            performance: [
              {
                id: 66402109,
                displayName: 'KIKESA',
                billing: 'headline',
                billingIndex: 1,
                artist: {
                  id: 9590564,
                  displayName: 'KIKESA',
                  uri:
                    'http://www.songkick.com/artists/9590564-kikesa?utm_source=51137&utm_medium=partner',
                  identifier: [
                    {
                      mbid: '96b9f840-2129-4a04-8a83-91f62d8ecd5b',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:96b9f840-2129-4a04-8a83-91f62d8ecd5b.json'
                    }
                  ]
                }
              },
              {
                id: 68024924,
                displayName: 'Yaro',
                billing: 'headline',
                billingIndex: 2,
                artist: {
                  id: 444869,
                  displayName: 'Yaro',
                  uri:
                    'http://www.songkick.com/artists/444869-yaro?utm_source=51137&utm_medium=partner',
                  identifier: [
                    {
                      mbid: 'a8428c59-15b2-40c6-83f8-47bf7d835b8e',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:a8428c59-15b2-40c6-83f8-47bf7d835b8e.json'
                    }
                  ]
                }
              }
            ],
            ageRestriction: null,
            flaggedAsEnded: false,
            venue: {
              id: 2716528,
              displayName: 'Le Plan Club',
              uri:
                'http://www.songkick.com/venues/2716528-le-plan-club?utm_source=51137&utm_medium=partner',
              metroArea: {
                displayName: 'Paris',
                country: { displayName: 'France' },
                id: 28909,
                uri:
                  'http://www.songkick.com/metro_areas/28909-france-paris?utm_source=51137&utm_medium=partner'
              },
              lat: 48.63798,
              lng: 2.40404
            },
            location: {
              city: 'Ris Orangis, France',
              lat: 48.63798,
              lng: 2.40404
            }
          },
          {
            id: 35386494,
            displayName: 'KIKESA at La Boule Noire (November 21, 2018)',
            type: 'Concert',
            uri:
              'http://www.songkick.com/concerts/35386494-kikesa-at-la-boule-noire?utm_source=51137&utm_medium=partner',
            status: 'ok',
            popularity: 6.2e-5,
            start: {
              date: '2018-11-21',
              datetime: '2018-11-21T20:00:00+0100',
              time: '20:00:00'
            },
            performance: [
              {
                id: 67722024,
                displayName: 'KIKESA',
                billing: 'headline',
                billingIndex: 1,
                artist: {
                  id: 9590564,
                  displayName: 'KIKESA',
                  uri:
                    'http://www.songkick.com/artists/9590564-kikesa?utm_source=51137&utm_medium=partner',
                  identifier: [
                    {
                      mbid: '96b9f840-2129-4a04-8a83-91f62d8ecd5b',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:96b9f840-2129-4a04-8a83-91f62d8ecd5b.json'
                    }
                  ]
                }
              }
            ],
            ageRestriction: null,
            flaggedAsEnded: false,
            venue: {
              id: 46999,
              displayName: 'La Boule Noire',
              uri:
                'http://www.songkick.com/venues/46999-la-boule-noire?utm_source=51137&utm_medium=partner',
              metroArea: {
                displayName: 'Paris',
                country: { displayName: 'France' },
                id: 28909,
                uri:
                  'http://www.songkick.com/metro_areas/28909-france-paris?utm_source=51137&utm_medium=partner'
              },
              lat: 48.8822,
              lng: 2.34014
            },
            location: { city: 'Paris, France', lat: 48.8822, lng: 2.34014 }
          },
          {
            id: 33035164,
            displayName:
              "Moha La Squale, KIKESA, and Eden Dillinger at L'Aéronef (November 23, 2018)",
            type: 'Concert',
            uri:
              'http://www.songkick.com/concerts/33035164-moha-la-squale-at-laeronef?utm_source=51137&utm_medium=partner',
            status: 'ok',
            popularity: 0.000544,
            start: {
              date: '2018-11-23',
              datetime: '2018-11-23T20:00:00+0100',
              time: '20:00:00'
            },
            performance: [
              {
                id: 63545044,
                displayName: 'Moha La Squale',
                billing: 'headline',
                billingIndex: 1,
                artist: {
                  id: 9424189,
                  displayName: 'Moha La Squale',
                  uri:
                    'http://www.songkick.com/artists/9424189-moha-la-squale?utm_source=51137&utm_medium=partner',
                  identifier: [
                    {
                      mbid: '2efd739f-b833-44b7-9228-b2c200ac1afa',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:2efd739f-b833-44b7-9228-b2c200ac1afa.json'
                    }
                  ]
                }
              },
              {
                id: 67293159,
                displayName: 'KIKESA',
                billing: 'headline',
                billingIndex: 2,
                artist: {
                  id: 9590564,
                  displayName: 'KIKESA',
                  uri:
                    'http://www.songkick.com/artists/9590564-kikesa?utm_source=51137&utm_medium=partner',
                  identifier: [
                    {
                      mbid: '96b9f840-2129-4a04-8a83-91f62d8ecd5b',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:96b9f840-2129-4a04-8a83-91f62d8ecd5b.json'
                    }
                  ]
                }
              },
              {
                id: 67454469,
                displayName: 'Eden Dillinger',
                billing: 'headline',
                billingIndex: 3,
                artist: {
                  id: 9279754,
                  displayName: 'Eden Dillinger',
                  uri:
                    'http://www.songkick.com/artists/9279754-eden-dillinger?utm_source=51137&utm_medium=partner',
                  identifier: []
                }
              }
            ],
            ageRestriction: null,
            flaggedAsEnded: false,
            venue: {
              id: 98792,
              displayName: "L'Aéronef",
              uri:
                'http://www.songkick.com/venues/98792-laeronef?utm_source=51137&utm_medium=partner',
              metroArea: {
                displayName: 'Lille',
                country: { displayName: 'France' },
                id: 28886,
                uri:
                  'http://www.songkick.com/metro_areas/28886-france-lille?utm_source=51137&utm_medium=partner'
              },
              lat: 50.63687,
              lng: 3.07348
            },
            location: { city: 'Lille, France', lat: 50.63687, lng: 3.07348 }
          },
          {
            id: 33969299,
            displayName: 'YL and KIKESA at Cargo De Nuit (December 8, 2018)',
            type: 'Concert',
            uri:
              'http://www.songkick.com/concerts/33969299-yl-at-cargo-de-nuit?utm_source=51137&utm_medium=partner',
            status: 'ok',
            popularity: 0.000187,
            start: {
              date: '2018-12-08',
              datetime: '2018-12-08T21:30:00+0100',
              time: '21:30:00'
            },
            performance: [
              {
                id: 65261629,
                displayName: 'YL',
                billing: 'headline',
                billingIndex: 1,
                artist: {
                  id: 9463534,
                  displayName: 'YL',
                  uri:
                    'http://www.songkick.com/artists/9463534-yl?utm_source=51137&utm_medium=partner',
                  identifier: [
                    {
                      mbid: 'a1ff4906-e5a1-4afc-bc05-525f03529d97',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:a1ff4906-e5a1-4afc-bc05-525f03529d97.json'
                    }
                  ]
                }
              },
              {
                id: 67606384,
                displayName: 'KIKESA',
                billing: 'headline',
                billingIndex: 2,
                artist: {
                  id: 9590564,
                  displayName: 'KIKESA',
                  uri:
                    'http://www.songkick.com/artists/9590564-kikesa?utm_source=51137&utm_medium=partner',
                  identifier: [
                    {
                      mbid: '96b9f840-2129-4a04-8a83-91f62d8ecd5b',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:96b9f840-2129-4a04-8a83-91f62d8ecd5b.json'
                    }
                  ]
                }
              }
            ],
            ageRestriction: null,
            flaggedAsEnded: false,
            venue: {
              id: 124000,
              displayName: 'Cargo De Nuit',
              uri:
                'http://www.songkick.com/venues/124000-cargo-de-nuit?utm_source=51137&utm_medium=partner',
              metroArea: {
                displayName: 'Arles',
                country: { displayName: 'France' },
                id: 56282,
                uri:
                  'http://www.songkick.com/metro_areas/56282-france-arles?utm_source=51137&utm_medium=partner'
              },
              lat: 43.6739,
              lng: 4.62359
            },
            location: { city: 'Arles, France', lat: 43.6739, lng: 4.62359 }
          },
          {
            id: 35512709,
            displayName: 'KIKESA at La Maroquinerie (December 19, 2018)',
            type: 'Concert',
            uri:
              'http://www.songkick.com/concerts/35512709-kikesa-at-la-maroquinerie?utm_source=51137&utm_medium=partner',
            status: 'ok',
            popularity: 7.9e-5,
            start: {
              date: '2018-12-19',
              datetime: '2018-12-19T20:00:00+0100',
              time: '20:00:00'
            },
            performance: [
              {
                id: 67933054,
                displayName: 'KIKESA',
                billing: 'headline',
                billingIndex: 1,
                artist: {
                  id: 9590564,
                  displayName: 'KIKESA',
                  uri:
                    'http://www.songkick.com/artists/9590564-kikesa?utm_source=51137&utm_medium=partner',
                  identifier: [
                    {
                      mbid: '96b9f840-2129-4a04-8a83-91f62d8ecd5b',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:96b9f840-2129-4a04-8a83-91f62d8ecd5b.json'
                    }
                  ]
                }
              }
            ],
            ageRestriction: null,
            flaggedAsEnded: false,
            venue: {
              id: 31720,
              displayName: 'La Maroquinerie',
              uri:
                'http://www.songkick.com/venues/31720-la-maroquinerie?utm_source=51137&utm_medium=partner',
              metroArea: {
                displayName: 'Paris',
                country: { displayName: 'France' },
                id: 28909,
                uri:
                  'http://www.songkick.com/metro_areas/28909-france-paris?utm_source=51137&utm_medium=partner'
              },
              lat: 48.86868,
              lng: 2.39215
            },
            location: { city: 'Paris, France', lat: 48.86868, lng: 2.39215 }
          },
          {
            id: 35592529,
            displayName:
              'KIKESA at Centre Culturel John Lennon (February 9, 2019)',
            type: 'Concert',
            uri:
              'http://www.songkick.com/concerts/35592529-kikesa-at-centre-culturel-john-lennon?utm_source=51137&utm_medium=partner',
            status: 'ok',
            popularity: 9.1e-5,
            start: {
              date: '2019-02-09',
              datetime: '2019-02-09T20:30:00+0100',
              time: '20:30:00'
            },
            performance: [
              {
                id: 68065949,
                displayName: 'KIKESA',
                billing: 'headline',
                billingIndex: 1,
                artist: {
                  id: 9590564,
                  displayName: 'KIKESA',
                  uri:
                    'http://www.songkick.com/artists/9590564-kikesa?utm_source=51137&utm_medium=partner',
                  identifier: [
                    {
                      mbid: '96b9f840-2129-4a04-8a83-91f62d8ecd5b',
                      href:
                        'http://api.songkick.com/api/3.0/artists/mbid:96b9f840-2129-4a04-8a83-91f62d8ecd5b.json'
                    }
                  ]
                }
              }
            ],
            ageRestriction: null,
            flaggedAsEnded: false,
            venue: {
              id: 69705,
              displayName: 'Centre Culturel John Lennon',
              uri:
                'http://www.songkick.com/venues/69705-centre-culturel-john-lennon?utm_source=51137&utm_medium=partner',
              metroArea: {
                displayName: 'Limoges',
                country: { displayName: 'France' },
                id: 28887,
                uri:
                  'http://www.songkick.com/metro_areas/28887-france-limoges?utm_source=51137&utm_medium=partner'
              },
              lat: 45.82291,
              lng: 1.28113
            },
            location: { city: 'Limoges, France', lat: 45.82291, lng: 1.28113 }
          }
        ]
      },
      perPage: 50,
      page: 1,
      totalEntries: 14
    }
  };
}
