import React,{useState} from 'react';
import './App.css';
import useFetchJobs from './useFetchJobs'
import {Container} from 'react-bootstrap'
import Job from './job'

const App= () => {
  /* Custom Hooks */
  const [params, setParams]= useState({})
  /*sets to page 1 by default */
  const [page,setPage]= useState(1)
  const { jobs, loading, error }= useFetchJobs(params,page)

  return (
    <Container>
    {loading && <h1>Loading</h1>}
      {error && <h1>Error try refereshing</h1>}
      <h1>{jobs.map(job => {
        return <Job key={job.id} job={job}> </Job>
      })}</h1>
    </Container>
  );
}

export default App;
