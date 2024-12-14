import { BiCategory } from "react-icons/bi";
import { BsWatch } from "react-icons/bs";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { IoLocation, IoPersonSharp } from "react-icons/io5";
import { LiaIndustrySolid } from "react-icons/lia";
import { LuBadgeCheck } from "react-icons/lu";
import { MdOutlineAccessTime } from "react-icons/md";
import { PiBagSimpleBold } from "react-icons/pi";
import { SiCloudflareworkers } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";
import { Link, useLoaderData } from "react-router-dom";


const JobDetails = () => {

    const { _id, title, company, company_logo, description, location, requirements, jobType, category, applicationDeadline, salaryRange, hr_email, hr_name,responsibilities  } = useLoaderData();

    return (
        <div className="space-y-5">
            <img
                className="h-[70vh] w-full object-cover rounded-xl"
                src="https://i.ibb.co.com/54wp97Y/pexels-marily-torres-227778-776615.jpg" alt="" />
            <div className="flex justify-between items-center">
                <div className="flex gap-3">
                    <img className="w-16" src={company_logo} alt="" />
                    <div>
                        <h1 className="text-3xl font-bold ">{title}</h1>
                        <div className="flex gap-4 pt-2">
                            <p className="flex items-center gap-1 text-gray-500"><PiBagSimpleBold />{jobType}</p>
                            <p className="flex items-center gap-1 text-gray-500"><MdOutlineAccessTime />{applicationDeadline}</p>
                        </div>
                    </div>
                </div>
                <Link to={`/jobApply/${_id}`}>
<button className="btn btn-primary flex items-center gap-2"><LuBadgeCheck className="text-xl" />Apply Now</button>
</Link>
            </div>
            <div className="divider"></div>

            <div className="border rounded-xl p-5">
                <h1 className="text-xl font-bold">Employment Information</h1>
                <div className="divider"></div>
                <div className="grid md:grid-cols-2 gap-10 text-gray-500">
                    <div className="flex items-center gap-2"><LiaIndustrySolid className="text-xl" />Industry: <span className="text-black text-xl font-semibold">{company}</span></div>
                    <div className="flex items-center gap-2"><BiCategory className="text-xl" />Job Category: <span className="text-black text-xl font-semibold">{category}</span></div>
                </div>
                <div className="grid md:grid-cols-2 gap-10 text-gray-500 pt-5">
                    <div className="flex items-center gap-2"><SiCloudflareworkers className="text-xl" />Job Type: <span className="text-black text-xl font-semibold">{jobType}</span></div>
                    <div className="flex items-center gap-2"><IoLocation className="text-xl" />Location: <span className="text-black text-xl font-semibold">{location}</span></div>
                </div>
                <div className="grid md:grid-cols-2 gap-10 text-gray-500 pt-5">
                    <div className="flex items-center gap-2"><HiMiniCurrencyDollar className="text-xl" />Salary: <span className="text-black text-xl font-semibold"> ${salaryRange.max}-{salaryRange.min}</span></div>
                    <div className="flex items-center gap-2"><BsWatch className="text-xl" />Deadline: <span className="text-black text-xl font-semibold">{applicationDeadline}</span></div>
                </div>
                <div className="grid md:grid-cols-2 gap-10 text-gray-500 pt-5">
                    <div className="flex items-center gap-2"><IoPersonSharp className="text-xl" />HR Name: <span className="text-black text-xl font-semibold"> { hr_name}</span></div>
                    <div className="flex items-center gap-2"><TfiEmail className="text-xl" />HR Email: <span className="text-black text-xl font-semibold">{hr_email}</span></div>
                </div>
            </div>

            <h2 className="font-bold text-3xl pt-5">Description</h2>
<p className="text-gray-500">{description}</p>
<h2 className="font-bold text-3xl pt-5">Requirements
</h2>
<ul>
{
requirements.map((r,idx) => <li key={idx} className="text-gray-500 list-disc list-inside">{r}</li> )
}
</ul>

<h2 className="font-bold text-3xl pt-5">Essential Skills, and Experience
</h2>
<ul>
{
responsibilities.map((r,idx) => <li key={idx} className="text-gray-500 list-disc list-inside">{r}</li> )
}
</ul>
<div className="divider"></div>

<Link to={`/jobApply/${_id}`}>
<button className="btn btn-primary flex items-center gap-2"><LuBadgeCheck className="text-xl" />Apply Now</button>
</Link>

        </div>
    );
};

export default JobDetails;