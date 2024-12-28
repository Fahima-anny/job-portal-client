import axios from "axios";
import { useEffect, useState } from "react";


const useJobs = (sort, search, minSalary, maxSalary) => {

const [jobs, setJobs] = useState([]) ;
const [load, setLoad] = useState(true) ;

useEffect(() => {
axios.get(`http://localhost:3000/jobs?sort=${sort}&search=${search}&maxSalary=${maxSalary}&minSalary=${minSalary}`)
.then(res => {
    setJobs(res.data) ;
    setLoad(false) ;
})
} ,[sort, search , minSalary, maxSalary])

    return {jobs, load} ;
};

export default useJobs;