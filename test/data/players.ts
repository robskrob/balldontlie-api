const players = [
  {
    id: 18,
    first_name: 'OG',
    last_name: 'Anunoby',
    position: 'F',
    height: '6-7',
    weight: '240',
    jersey_number: '8',
    college: 'Indiana',
    country: 'United Kingdom',
    draft_year: 2017,
    draft_round: 1,
    draft_number: 23,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  },
  {
    id: 19,
    first_name: 'Ryan',
    last_name: 'Arcidiacono',
    position: 'G',
    height: '6-3',
    weight: '195',
    jersey_number: '51',
    college: 'Villanova',
    country: 'USA',
    draft_year: null,
    draft_round: null,
    draft_number: null,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  },
  {
    id: 25,
    first_name: 'Ron',
    last_name: 'Baker',
    position: 'G',
    height: '6-4',
    weight: '220',
    jersey_number: '31',
    college: 'Wichita State',
    country: 'USA',
    draft_year: null,
    draft_round: null,
    draft_number: null,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  },
  {
    id: 54,
    first_name: 'Bojan',
    last_name: 'Bogdanovic',
    position: 'F',
    height: '6-7',
    weight: '226',
    jersey_number: '44',
    college: 'Fenerbahce',
    country: 'Croatia',
    draft_year: 2011,
    draft_round: 2,
    draft_number: 31,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  },
  {
    id: 61,
    first_name: 'Mikal',
    last_name: 'Bridges',
    position: 'F',
    height: '6-6',
    weight: '209',
    jersey_number: '25',
    college: 'Villanova',
    country: 'USA',
    draft_year: 2018,
    draft_round: 1,
    draft_number: 10,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  },
  {
    id: 73,
    first_name: 'Jalen',
    last_name: 'Brunson',
    position: 'G',
    height: '6-2',
    weight: '190',
    jersey_number: '11',
    college: 'Villanova',
    country: 'USA',
    draft_year: 2018,
    draft_round: 2,
    draft_number: 33,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  },
  {
    id: 94,
    first_name: 'Tyson',
    last_name: 'Chandler',
    position: 'C',
    height: '7-0',
    weight: '235',
    jersey_number: '6',
    college: 'Dominguez HS (CA)',
    country: 'USA',
    draft_year: 2001,
    draft_round: 1,
    draft_number: 2,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  },
  {
    id: 134,
    first_name: 'Damyean',
    last_name: 'Dotson',
    position: 'G',
    height: '6-5',
    weight: '210',
    jersey_number: '21',
    college: 'Houston',
    country: 'USA',
    draft_year: 2017,
    draft_round: 2,
    draft_number: 44,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  },
  {
    id: 202,
    first_name: 'Josh',
    last_name: 'Hart',
    position: 'G',
    height: '6-4',
    weight: '215',
    jersey_number: '3',
    college: 'Villanova',
    country: 'USA',
    draft_year: 2017,
    draft_round: 1,
    draft_number: 30,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  },
  {
    id: 209,
    first_name: 'Isaiah',
    last_name: 'Hicks',
    position: 'F',
    height: '6-9',
    weight: '230',
    jersey_number: '4',
    college: 'North Carolina',
    country: 'USA',
    draft_year: null,
    draft_round: null,
    draft_number: null,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  },
  {
    id: 352,
    first_name: 'Kyle',
    last_name: "O'Quinn",
    position: 'C',
    height: '6-9',
    weight: '250',
    jersey_number: '9',
    college: 'Norfolk State',
    country: 'USA',
    draft_year: 2012,
    draft_round: 2,
    draft_number: 49,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  },
  {
    id: 368,
    first_name: 'Cameron',
    last_name: 'Payne',
    position: 'G',
    height: '6-3',
    weight: '183',
    jersey_number: '1',
    college: 'Murray State',
    country: 'USA',
    draft_year: 2015,
    draft_round: 1,
    draft_number: 14,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  },
  {
    id: 399,
    first_name: 'Mitchell',
    last_name: 'Robinson',
    position: 'C',
    height: '7-0',
    weight: '240',
    jersey_number: '23',
    college: 'Western Kentucky',
    country: 'USA',
    draft_year: 2018,
    draft_round: 2,
    draft_number: 36,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  },
  {
    id: 412,
    first_name: 'Wayne',
    last_name: 'Selden',
    position: 'G-F',
    height: '6-5',
    weight: '230',
    jersey_number: '14',
    college: 'Kansas',
    country: 'USA',
    draft_year: 2016,
    draft_round: null,
    draft_number: null,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  },
  {
    id: 414,
    first_name: 'Landry',
    last_name: 'Shamet',
    position: 'G',
    height: '6-4',
    weight: '190',
    jersey_number: '44',
    college: 'Wichita State',
    country: 'USA',
    draft_year: 2018,
    draft_round: 1,
    draft_number: 26,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  },
  {
    id: 415,
    first_name: 'Iman',
    last_name: 'Shumpert',
    position: 'G',
    height: '6-5',
    weight: '215',
    jersey_number: '1',
    college: 'Georgia Tech',
    country: 'USA',
    draft_year: 2011,
    draft_round: 1,
    draft_number: 17,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  },
  {
    id: 442,
    first_name: 'Lance',
    last_name: 'Thomas',
    position: 'F',
    height: '6-8',
    weight: '225',
    jersey_number: '42',
    college: 'Duke',
    country: 'USA',
    draft_year: null,
    draft_round: null,
    draft_number: null,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  },
  {
    id: 447,
    first_name: 'Karl-Anthony',
    last_name: 'Towns',
    position: 'C',
    height: '7-0',
    weight: '248',
    jersey_number: '32',
    college: 'Kentucky',
    country: 'USA',
    draft_year: 2015,
    draft_round: 1,
    draft_number: 1,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  },
  {
    id: 449,
    first_name: 'Allonzo',
    last_name: 'Trier',
    position: 'G',
    height: '6-5',
    weight: '200',
    jersey_number: '14',
    college: 'Arizona',
    country: 'USA',
    draft_year: 2018,
    draft_round: null,
    draft_number: null,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  },
  {
    id: 450,
    first_name: 'PJ',
    last_name: 'Tucker',
    position: 'F',
    height: '6-5',
    weight: '245',
    jersey_number: '',
    college: 'Texas',
    country: 'USA',
    draft_year: 2006,
    draft_round: 2,
    draft_number: 35,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  },
  {
    id: 469,
    first_name: 'T.J.',
    last_name: 'Warren',
    position: 'F',
    height: '6-8',
    weight: '220',
    jersey_number: '24',
    college: 'North Carolina State',
    country: 'USA',
    draft_year: 2014,
    draft_round: 1,
    draft_number: 14,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  },
  {
    id: 487,
    first_name: 'Delon',
    last_name: 'Wright',
    position: 'G',
    height: '6-5',
    weight: '185',
    jersey_number: '0',
    college: 'Utah',
    country: 'USA',
    draft_year: 2015,
    draft_round: 1,
    draft_number: 20,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  },
  {
    id: 655,
    first_name: 'Greg',
    last_name: 'Anthony',
    position: '',
    height: '6-1',
    weight: '180',
    jersey_number: '50',
    college: 'UNLV',
    country: 'USA',
    draft_year: 1991,
    draft_round: 1,
    draft_number: 12,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  },
  {
    id: 704,
    first_name: 'Patrick',
    last_name: 'Eddie',
    position: '',
    height: '6-11',
    weight: '240',
    jersey_number: '41',
    college: 'Mississippi',
    country: 'USA',
    draft_year: null,
    draft_round: null,
    draft_number: null,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  },
  {
    id: 757,
    first_name: 'Hubert',
    last_name: 'Davis',
    position: '',
    height: '6-5',
    weight: '183',
    jersey_number: '44',
    college: 'North Carolina',
    country: 'USA',
    draft_year: 1992,
    draft_round: 1,
    draft_number: 20,
    team: {
      id: 20,
      conference: 'East',
      division: 'Atlantic',
      city: 'New York',
      name: 'Knicks',
      full_name: 'New York Knicks',
      abbreviation: 'NYK'
    }
  }
]

export default players
