import { expect } from 'chai';
import players from "./data/players"

import draftRoundInformation from "../src/draft-round-information"

describe('draftRoundInformation', function () {
  it('it takes player data and returns an object with draft round pick information', async function () {
    expect(draftRoundInformation(players)).to.deep.equal({ '1': 12, '2': 6, null: 7 })
  });
});
