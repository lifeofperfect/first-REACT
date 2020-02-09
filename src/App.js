import React, {useState} from 'react'
import Tweet from './tweet'


function App() {
  const [users, setUsers] = useState([
    {name: 'perfect', message:'first message'},
    {name:'calyster', message:'second message'},
    {name:'sally', message: 'third message'}
  ])
  return(
    <div className='app'>
      {users.map(user=> (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;