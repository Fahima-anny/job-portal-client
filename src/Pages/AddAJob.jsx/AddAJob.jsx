import Swal from "sweetalert2";
import useAuth from "../../context/useAuth";
import { useNavigate } from "react-router-dom";


const AddAJob = () => {

    const { user } = useAuth();
    const navigate = useNavigate() ;

    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        // console.log(initialData);
        const { min, max, currency, ...newJob } = initialData;
        newJob.salaryRange = { min, max, currency };
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n');
        console.log(newJob);

        fetch(`https://job-portal-server-lime-six.vercel.app/jobs`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Job Added!",
                        text: "A new job post has been added",
                        icon: "success"
                    });
                    navigate("/myPostedJobs")
                }
            })
    }

    return (
        <div>
            <h1 className='text-3xl text-center font-bold'>Add a New Job </h1>

            <form className="card-body" onSubmit={handleAddJob}>

                {/* job title  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name="title" placeholder="job title" className="input input-bordered" required />
                </div>

                {/* job location  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input type="text" name="location" placeholder="job location" className="input input-bordered" required />
                </div>

                {/* job type  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select name="jobType" defaultValue='Select a job type' className="select select-bordered w-full">
                        <option disabled >Select a job type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Remote">Remote</option>
                        <option value="Intern">Intern</option>
                    </select>
                </div>

                {/* job Field  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Field</span>
                    </label>
                    <select defaultValue='Select a job field' name="category" className="select select-bordered w-full">
                        <option disabled >Select a job field</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Finance">Finance</option>
                        <option value="Teaching">Teaching</option>
                    </select>
                </div>

                {/* job salary  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Salary</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input type="text" name="min" placeholder="Min" className="input input-bordered" required />
                        <input type="text" name="max" placeholder="Max" className="input input-bordered" required />
                        <select defaultValue='Currency' name="currency" className="select select-bordered w-full ">
                            <option disabled >Currency</option>
                            <option value="USD">USD</option>
                            <option value="BDT">BDT</option>
                            <option value="INR">INR</option>
                            <option value="PKR">PKR</option>
                        </select>
                    </div>
                </div>

                {/* job description  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea type='text' name="description" placeholder="Write here" className="textarea textarea-bordered" required></textarea>
                </div>

                {/* company name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" name="company" placeholder="Company name" className="input input-bordered" required />
                </div>

                {/* job Requirements  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Requirements</span>
                    </label>
                    <textarea type='text' name="requirements" placeholder="Write each requirements in a new line" className="textarea textarea-bordered" required></textarea>
                </div>

                {/* job responsibilities  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Responsibilities</span>
                    </label>
                    <textarea type='text' name="responsibilities" placeholder="Write each responsibilities in a new line" className="textarea textarea-bordered" required></textarea>
                </div>

                {/* hr name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input type="text" name="hr_name" defaultValue={user?.displayName} placeholder="HR Name" className="input input-bordered" required />
                </div>

                {/* deadline */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <input type="date" name="applicationDeadline" placeholder="Deadline" className="input input-bordered" required />
                </div>

                {/* hr email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input type="email" name="hr_email" defaultValue={user?.email} placeholder="HR Email" className="input input-bordered" required />
                </div>

                {/* company logo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Logo URL</span>
                    </label>
                    <input type="text" name="company_logo" placeholder="Company Logo url" className="input input-bordered" required />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Job</button>
                </div>
            </form>

        </div>
    );
};

export default AddAJob;