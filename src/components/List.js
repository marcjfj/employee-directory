import React, {useContext} from 'react';
import ListContext from '../utils/ListContext';
import Card from './Card'


function List() {
    const list = useContext(ListContext);
    if (list.list.employees.length) {
        const listItems = list.list.employees.map((employee) =>
            // <li key={employee.id}>{employee.catch_phrase}</li>
            <Card
            key = {employee.id}
            picture = {employee.picture}
            firstName = {employee.first_name}
            lastName = {employee.last_name}
            catchPhrase = {employee.catch_phrase}
            jobTitle = {employee.job_title}
            department = {employee.department}
            email = {employee.email}
            phone = {employee.phone}
            />
            
        );
        return (
            <div>
                {listItems}
            </div>
        )

    } else {
        return(
            <h2>Sorry, no results were found.</h2>
        )
    }
}

export default List;