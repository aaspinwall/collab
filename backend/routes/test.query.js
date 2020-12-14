const TestQuery = {
  test() {
    return 'cool beans!';
  },
  reverse(_, args) {
    return args.word.split('').reverse().join('');
  },
};

module.exports = TestQuery;
