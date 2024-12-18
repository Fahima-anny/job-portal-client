import { useEffect, useState } from "react";
import HotJobsCard from "./HotJobsCard";


const HotJobs = () => {

const [jobs, setJobs] = useState([]) ;

useEffect(() => {
fetch("http://localhost:3000/jobs")
.then(res => res.json())
.then(data => setJobs(data))
}, [])
// console.log(jobs)

    return (
        <div className="py-20">
            <h1 className="text-4xl font-bold text-center">Jobs of the day</h1>
            <p className="text-gray-500 text-center py-3">Search and connect with the right candidates faster</p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {
                    jobs.map(job => <HotJobsCard key={job._id} job={job}></HotJobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;