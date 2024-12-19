import { useEffect, useState } from "react";
import useAuth from "../context/useAuth";
import MyApplicationTableRow from "./MyApplicationTableRow";
import axios from "axios";


const MyApplications = () => {

const {user} = useAuth() ;
const [jobs, setJobs] = useState([]) ;
useEffect( () => {

    // fetch(`http://localhost:3000/job-application?email=${user.email}`)
    // .then(res => res.json())
    // .then(data => {
    //     setJobs(data) ;
    // })
    
    axios.get(`http://localhost:3000/job-application?email=${user.email}`, {withCredentials: true})
    .then(res => setJobs(res.data))
} , [])
// console.log(jobs);

    return (
        <div>
            <h1>my apps: {jobs.length}</h1>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Company</th>
        <th>Job Details</th>
        <th>Salary</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

{
    jobs.map(job => <MyApplicationTableRow
     key={job._id}
      job={job}
      jobs={jobs}
      setJobs={setJobs}
      ></MyApplicationTableRow>)
}  

    </tbody>
  </table>
</div>

        </div>
    );
};

export default MyApplications;