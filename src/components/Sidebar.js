import React, {useContext} from 'react';
import ListContext from '../utils/ListContext';

function SideBar(props) {
    const {employees, searchTerm} = useContext(ListContext).list;
    const departments = [...new Set(employees.map(item => item.department))].map((department, i) => {
        return (
            <button key={i} value={department} onClick={(e) => props.setDepartment(e.target.value)}>
                {department}
            </button>
            )
    });
    let sortOptions = [];
    if (employees.length) {
        sortOptions = Object.keys(employees[0]).map(key => {
            return (
                <option value={key} key={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}
                </option>
            )
        });
        console.log(sortOptions);
    } else {
        sortOptions = ['none'];
    }
    return (
        <aside>
            <div className="sort" onChange ={(e) => props.setSort(e.target.value)}>
                <h3>Sort By</h3>
                <select>
                    {sortOptions}
                </select>
            </div>
            <div className="search">
                <h3>Search</h3>
                <input type="search" value={props.searchTerm} onChange ={(e) => props.setSearch(e.target.value)}/>
            </div>
            <div className="departments">
                <h3>Departments</h3>
                {departments}
            </div>
            <div className="clear">
                <button className="clear-filters" onClick={props.clearFilters}>Clear Filters</button>
            </div>
        </aside>
    )
}

export default SideBar;