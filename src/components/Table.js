import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Table extends Component {
	constructor(props) {
        super(props)
		this.people = [
			{
				name: "John Sina",
				birth: "11/30/2011"
			}, {
				name: "Barcy Washington",
				birth: "09/16/1992"
			}, {
				name: "Peter Parker",
				birth: "01/16/1992"
			}, {
				name: "Jimmy Shergil",
				birth: "12/12/2001"
			}, {
				name: "Alexander Alfred",
				birth: "02/09/1891"
			}, {
				name: "Krishna Gupta",
				birth: "12/01/1982"
			}, {
				name: "Sania Mirza",
				birth: "11/30/2011"
			}, {
				name: "Lata Pathak",
				birth: "10/31/1999"
			}
		];

		this.compareDates = this.compareDates.bind(this);
		this.compareNames = this.compareNames.bind(this);
	}
	compareDates(person1, person2) {
		return new Date(person1.birth) - new Date(person2.birth);
		// complete this date comparator which enables sort by age
	}

	compareNames(person1, person2) {
		return (person1.name > person2.name)  - (person1.name < person2.name);
		// complete this string comparator with enables sort by name
	}

	render() {
		const { sortParameter } = this.props;
		let newPeople = this.people;
		
		if(sortParameter == 'age') {
			newPeople = this.people.sort(this.compareDates);
		}
		else if(sortParameter == 'name') {
			newPeople = this.people.sort(this.compareNames);
		}
		
		return (
		<div className='table-div'>
			<table className='table table-striped table-bordered table-hover full-width'>
			<thead>
				<tr>
				<th className='course-name'>Person Name</th>
				<th className='duration'>Date of Birth</th>
				</tr>
			</thead>
			<tbody>
			{
				newPeople.map((person) => {
					return (
						<tr key={person.name}>
								<td>{person.name}</td>
								<td>{person.birth}</td>
						</tr>
					)
				})
			}
			
			</tbody>
		</table>
	</div>
);

	}
}

// Uncomment the snippet below
Table.propTypes = {
	sortParameter: PropTypes.string
}

export default Table;
