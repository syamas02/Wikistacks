const expect = require('chai');
const db = require('../models/wiki');
describe('data model', () => {
  let posts;
  beforeEach(() => {
    return db.sync().then(() => db.seed());
  });
  describe('posts', () => {
    it('there are three posts', () => {
      expect(posts.length).to.equal(3);
    });
  });
});
