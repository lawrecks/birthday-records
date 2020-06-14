import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Radio extends Component {
	constructor(props) {
        super(props)
		this.state = {
			radioClick: "name"
    };
    this.selectedOption = '';
	}

	onChange(type) {
    this.selectedOption = type;
    const { sortBy } = this.props;
    sortBy(type);
		// on radio state change handler
	}

	render() {
		return (
  <div className='radioButtons'>
    <form>
      <div className='left'>
        <input id='sortName' type='radio' onChange={() => { this.onChange('name')}} checked={this.selectedOption === 'name'}/>
        <label htmlFor="sortName">&nbsp;&nbsp;Sort by name</label>
      </div>
      <div className='right'>
        <input id="sortAge" type='radio' onChange={() => { this.onChange('age')}} checked={this.selectedOption === 'age'}/>
        <label htmlFor="sortAge">&nbsp;&nbsp;Sort by age</label>
      </div>
    </form>
  </div>
);

	}
}


Radio.propTypes = {
	sortBy: PropTypes.func
}

export default Radio;
