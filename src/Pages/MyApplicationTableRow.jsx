import { RiDeleteBin6Line } from "react-icons/ri";
import useAuth from "../context/useAuth";
import Swal from "sweetalert2";


const MyApplicationTableRow = ({job, jobs, setJobs}) => {

    const {user} = useAuth() ;
const {_id, title, company, company_logo, location, category, salaryRange} = job ;

const handleDelete = () => {
console.log("delete", _id);

Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
        fetch(`http://localhost:3000/job-application/${_id}`, {
            method: 'DELETE',
          })
          .then(res => res.json()) 
          .then(res => {
            console.log(res)
            if(res.deletedCount>0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  const remaining = jobs.filter(j => j._id !== _id )
                  setJobs(remaining)
            }
        })
    }
  });

}

    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={company_logo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{company}</div>
              <div className="text-sm opacity-50">{location}</div>
            </div>
          </div>
        </td>
        <td>
       <h2 className="text-xl font-bold">  {title}</h2>
          <br />
          <span className="">{category}</span>
        </td>
        <td className="font-bold">${salaryRange.min}-{salaryRange.max}</td>
        <th>
          <button onClick={handleDelete} className="text-2xl text-red-500 hover:text-red-700"><RiDeleteBin6Line className="" /></button>
        </th>
      </tr>
    );
};

export default MyApplicationTableRow;