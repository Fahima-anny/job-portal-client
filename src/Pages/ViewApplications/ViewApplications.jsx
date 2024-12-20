import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ViewApplications = () => {

const applications = useLoaderData() ;
console.log(applications);

const handleUpdateStatus = (e,id) => {
    // console.log(e.target.value , id);
const data = {
    status: e.target.value
}
fetch(`https://job-portal-server-lime-six.vercel.app/job-application/${id}`,{
    method: 'PATCH',
    headers: {
        "content-type" : "application/json"
    },
body: JSON.stringify(data)
})
.then(res => res.json())
.then(data => {
    // console.log(data);
     if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: "status updated!",
                            text: "Applicant status updated",
                            icon: "success"
                        });
                    }
                })
}

    return (
        <div>
           <h1 className="text-3xl font-bold text-center"> Applications for this Job : {applications.length}</h1> 


           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Status</th>
        <th>Update Status</th>
      </tr>
    </thead>
    <tbody>
     {
        applications?.map((app,i) =>    
           <tr key={i} className="hover">
            <th>{i+1}</th>
            <td>{app.applicantEmail}</td>
            <td>Desktop Support Technician</td>
            <td><select
            onChange={(e) => handleUpdateStatus(e,app._id)}
            defaultValue={app?.status || "Change Status"} className="select select-bordered w-full max-w-xs">
  <option disabled >Change Status</option>
  <option>Hired</option>
  <option>Rejected</option>
  <option>Under Review</option>
  <option>Set Interview</option>
</select></td>
          </tr>)
     }
    </tbody>
  </table>
</div>


        </div>
    );
};

export default ViewApplications;