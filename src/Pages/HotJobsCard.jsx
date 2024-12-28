import React from 'react';
import { IoLocation } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const HotJobsCard = ({job}) => {

const {_id, title, company, company_logo, description, location, requirements, jobType, category, applicationDeadline, salaryRange} = job ;

    return (
        <div className="card card-compact bg-base-200 hover:bg-base-100 border-2 border-base-300 hover:border-primary-content duration-300">
        <div className='flex items-center gap-2 p-3'>
        <figure>
          <img
          className='w-16'
            src={company_logo}
            alt="Shoes" />
        </figure>
        <div>
            <h3 className='font-bold text-xl'>{company}</h3>
            <p className='text-gray-500 flex items-center gap-1'><IoLocation /> {location}</p>
        </div>
        </div>
        <div className="card-body">
          <h2 className="card-title font-bold">{title}</h2>
          <p className='text-gray-500'>{description}</p>
          <div className='flex gap-2 flex-wrap py-3'>
            {
                requirements.map((skill, idx) => <span key={idx} className='text-gray-700 hover:text-primary p-2 bg-primary-content rounded-md'>{skill}</span>)
            }
          </div>
          <div className="card-actions justify-between items-center">
            <div>
                <span className='text-gray-500'>Salary:</span>
                 <span className='text-primary font-bold'> ${salaryRange.min}-{salaryRange.max}</span></div>
            <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Apply</button></Link>
          </div>
        </div>
      </div>
    );
};

export default HotJobsCard;