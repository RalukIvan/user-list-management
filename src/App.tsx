import React, { useState } from 'react';
import './App.css';
import { UserList } from './UserList'
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

import AddIcon from '@material-ui/icons/Add';

function App() {
  const [users, setUsers] = useState([{ firstname: 'Alan', lastname: 'Michaels', email: 'alan.michaels@yopmail.com'}])
  const handleAddUser = (event: React.MouseEvent) => {
    console.log('clicked on add user')
    event.preventDefault()
    // return <Route {...rest} component={AddUser} />; 
  }
  return (
    <div className="App">
      <header className="App-header">
          Welcome to the user management platform!
      </header>
      <section>
        <Tooltip title="Add" aria-label="add">
          <Fab color="secondary" className="App-btn-add-user" data-testid="addButton">
            <AddIcon color="action" fontSize="large"/>
          </Fab>
        </Tooltip>
        <UserList users={users} />
      </section>
    </div>
  );
}

export default App;
