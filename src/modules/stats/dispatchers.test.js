import {
  setMessagesCount,
  fetchMessagesCount,
  fetchProblemsList
} from './dispatchers';

import Actions from './actions';
import fetchMock from 'fetch-mock';

describe('Stats action dispatchers', () => {

  afterEach(() => {
    fetchMock.restore();
  });

  it('should dispatch the set messages count action', () => {
    fetchMock.get('*', { 'messages-count': 55 });
    const action = setMessagesCount(5);
    expect(action.type).toEqual(Actions.SetMessagesCount);
    expect(action.count).toEqual(5);
  });

  it('should fetch the current messages count and trigger the set messages count action', (done) => {
    fetchMock.get('*', { 'messages-count': 55 });
    fetchMessagesCount()((action) => {
      expect(action.type).toEqual("SET_MESSAGES_COUNT");
      expect(action.count).toEqual(55);
      done();
    });
  });

  it('should fetch the problems list and trigger the set problems list action', (done) => {
    fetchMock.get('*', [{ key: 'prob1', doc_count: 1234 }]);
    fetchProblemsList()((action) => {
      expect(action.type).toEqual(Actions.SetProblemsList);
      expect(action.problems[0].key).toEqual('prob1');
      done();
    });
  });
});