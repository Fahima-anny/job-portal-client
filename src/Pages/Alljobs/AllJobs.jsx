
import { useState } from "react";
import useJobs from "../../Hooks/useJobs";
import HotJobsCard from "../HotJobsCard";
import { FaFilter, FaSearch } from "react-icons/fa";


const AllJobs = () => {

    const [sort, setSort] = useState(false) ;
    const [search, setSearch] = useState("") ;
    const [maxSalary, setMaxSalary] = useState("") ;
    const [minSalary, setMinSalary] = useState("") ;
    const { jobs, load } = useJobs(sort, search, minSalary, maxSalary) ;

    if (load) {
        return <h3 className="py-20 text-center text-primary font-bold text-xl">Loading...</h3>
    }
    console.log(sort);
    return (
        <div>
            <h1 className="font-bold text-4xl text-center pb-5"> All jobs </h1>

            <div className="flex gap-5 items-center justify-between bg-base-200 rounded-xl p-5">
                <button
                    onClick={() => setSort(!sort)}
                    className={`btn btn-primary 
                    ${sort ? "" : 'btn-outline'
                        }
                    `}>
                    {sort
                        ? "Sorted By Salary"
                        : "Sort By Salary"
                    }
                </button>
<div className="join join-horizontal w-full">
    
<input type="text"
                placeholder="Search job by Location"
                className="input w-full join-item"
                  onKeyUp={(e) => setSearch(e.target.value)} />

<button className="btn btn-primary join-item"><FaSearch></FaSearch></button>
</div>
<input type="text" onKeyUp={(e) => setMinSalary(e.target.value)}  className="w-full input" placeholder="Min Salary" />
<input type="text" onKeyUp={(e) => setMaxSalary(e.target.value)}  className="w-full input" placeholder="Max Salary" />
<button className="btn btn-primary"><FaFilter></FaFilter></button>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {
                    jobs.map(job => <HotJobsCard key={job._id} job={job}></HotJobsCard>)
                }
            </div>

        </div>
    );
};

export default AllJobs;