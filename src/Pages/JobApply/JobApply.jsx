import { useParams } from "react-router-dom";
import useAuth from "../../context/useAuth";
import { link } from "motion/react-client";


const JobApply = () => {

const {id} = useParams() ;
const {user} = useAuth() ;
console.log(id, user);

const handleApply = e => {
    e.preventDefault() ;
    const form = e.target ;
    const linkedIn = form.linkedIn.value ;
    const github = form.github.value ;
    const resume = form.resume.value ;
    console.log(linkedIn, github, resume);

const jobApplication = {
    jobId : id,
    applicantEmail : user.email,
    linkedIn,
    github,
    resume
}

fetch("http://localhost:3000/job-application",{
    method: 'POST',
    headers: {
        "content-type": "application/json"
    },
body: JSON.stringify(jobApplication)  
})
.then(res => res.json())
.then(data => {
    console.log(data);
    if(insertedId>0){
        
    }
})
}

    return (
         
          <div className="card w-full">
          <h1 className="text-5xl font-bold text-center">Apply for Job!</h1>
            <form onSubmit={handleApply} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">LinkedIn URL</span>
                </label>
                <input type="url" placeholder="linkedIn url" name='linkedIn' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Github URL</span>
                </label>
                <input type="url" name='github' placeholder="github url" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Resume URL</span>
                </label>
                <input type="url" name='resume' placeholder="resume url" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Apply</button>
              </div>
            </form>
          </div>
    );
};

export default JobApply;