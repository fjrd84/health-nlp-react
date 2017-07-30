import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './home';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('Home component', () => {

  let _props, _spies, _wrapper;

  const analysis = {
    analysis: {
      key0: {
        analysis: {
          problem: 'some problem'
        }
      }
    }
  };

  beforeEach(() => {
    _spies = {}
    _props = {
      analysis,
      ...bindActionCreators({
        getAnalysis: (_spies.getAnalysis = sinon.spy()),
        changePage: (_spies.increment = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }
    _wrapper = shallow(<Home {..._props} />)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home {..._props} />, div);
    expect(_spies.getAnalysis.called).toBeTruthy();
  });

});
