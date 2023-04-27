import { useEffect, useState } from 'react'
import axios from 'axios'
import UserCard from './components/UserCard'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [data, setData] = useState([])

  const url = 'https://randomuser.me/api?results=25'

  useEffect(() => {
    const fetchData = () => {
      axios.get(url)
      .then((response) => {
        setData(response.data.results)
      })
      .catch(error => console.log(`Error: ${error}`))
    }
  fetchData();
}, []);

  return (
    <>
      <header>
        <img src={reactLogo} alt="React-Logo" />
        <h1>Address Book</h1>
      </header>
      <main>
        <UserCard data={data} />
      </main>
    </>
  )
}

export default App
