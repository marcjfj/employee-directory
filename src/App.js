import React, {useState, useEffect, useRef} from 'react';
import Sidebar from './components/Sidebar';
import List from './components/List';
import ListContext from './utils/ListContext';
import allEmployees from './utils/MOCK_DATA.json'; 
import './App.scss'

function App() {
  const [list, setList] = useState({
    employees: [],
    
  });
  const [filter, setFilter] = useState({
    department: '',
    searchTerm: '',
    sortBy: '',
  });

  
  function getEmployees() {

    let filtered = [...allEmployees];

    if (filter.searchTerm) {
      const lower = filter.searchTerm.toLowerCase();
      filtered = filtered.filter(employee => {
        return `${employee.first_name} `.concat(employee.last_name).toLowerCase().indexOf(lower) !== -1;
      })
    }

    if (filter.department) {
      filtered = filtered.filter(employee => {
        return employee.department === filter.department;
      })
    }

    if (filter.sortBy) {
      filtered = filtered.sort((a, b) => (a[filter.sortBy] > b[filter.sortBy]) ? 1 : ((b[filter.sortBy] > a[filter.sortBy]) ? -1 : 0));
    }

    setList({...list, employees: filtered});
    
  }

  
  function setSort(key) {
    setFilter({...filter, sortBy: key})
    
  }
  function setSearch(term) {
    setFilter({...filter, searchTerm: term});
    
  }
  function setDepartment(department) {
    setFilter({...filter, department: department});
    
  }
  function clearFilters() {
    setFilter({
      ...filter,
      department: '',
      searchTerm: '',
      sortBy: ''
    })
    
  }
  

  useEffect(() => {
    getEmployees();
  }, [filter])

  return (
    <div className="App">
      <header>
        <h1>
          Acme, Inc. Directory
        </h1>
      </header>
      <div className="container">
        <ListContext.Provider value={{list}}>
          <Sidebar 
            setSearch={setSearch}
            setDepartment={setDepartment}
            setSort={setSort}
            clearFilters={clearFilters}
            searchTerm={filter.searchTerm}
          />
          <main>
              <List />
              </main>
        </ListContext.Provider>
      </div>
    </div>
  );
}

export default App;
