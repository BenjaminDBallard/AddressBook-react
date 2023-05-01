import React from 'react'
import UserCard from './components/UserCard'
import reactLogo from './assets/react.svg'
import useFetch from './hooks/useFetch'
import './App.css'

function App() {

  const {
    data,
    loading,
  } = useFetch();

  return (
    <div className='app'>
      <header>
        <div className='heading'>
        <img src={reactLogo} alt="React-Logo" />
        <h1>Address Book</h1>
        </div>
      </header>
      <div>
        {loading && <div>Loading</div>}
        {!loading && (
          <main>
            <UserCard data={data} />
          </main>
        )}
      </div>
    </div>
  )
}

export default App
