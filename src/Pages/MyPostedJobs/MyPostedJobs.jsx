import { useEffect, useState } from "react";
import useAuth from "../../context/useAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:3000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])
console.log(jobs);
    return (
        <div>
            my posted jobs : {jobs.length}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Deadline</th>
                            <th>Applicant</th>
                            <th>Applications</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            jobs.map((job,idx) =>
                                <tr key={job._id}>
                                    <th>{idx+1}</th>
                                    <td>{job.title}</td>
                                    <td>{job.applicationDeadline}</td>
                                    <td>{job?.applicationCount}</td>
                                    <td><Link to={`/viewJobApplication/${job._id}`} className="btn">View Applications</Link></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>




        </div>
    );
};

export default MyPostedJobs;