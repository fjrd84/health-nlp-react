import Actions from './actions';

describe('Analysis actions', () => {
  it('should contain all the actions', () => {
    expect(Actions.GetHistogramDays).toBeDefined();
    expect(Actions.GetHistogramMonths).toBeDefined();
    expect(Actions.GetHistogramWeeks).toBeDefined();
    expect(Actions.SetMessagesCount).toBeDefined();
    expect(Actions.SetMessagesList).toBeDefined();
    expect(Actions.GetProblemsList).toBeDefined();
    expect(Actions.GetProfilesList).toBeDefined();
    expect(Actions.GetQueriesList).toBeDefined();
    expect(Actions.GetSolutionsToProblem).toBeDefined();
    expect(Actions.SearchMessages).toBeDefined();
    expect(Actions.SetProblem).toBeDefined();
    expect(Actions.SetSolution).toBeDefined();
  });
});