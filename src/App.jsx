
import './App.css'
import useFetchData from './useFetchData';

function App() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
  const { data, loading, error } = useFetchData(url);
  if (loading) {
    return <p>loading...</p>;
  }
  if(error){
    return <p>something went wrong</p>
  }
  return (
  <div>{data.map((d, i) => <div key={i} >{d.title}</div>)}</div>
  )
}

export default App
