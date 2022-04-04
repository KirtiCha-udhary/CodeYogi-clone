import React from "react";

function Student(data) {
  return(
  
    <div className="team-card h-76 w-72  rounded-md shrink=0 self-stretch mb-6">
      <img className="mx-auto h-60 w-96 rounded-md mt-7 object-cover" src={data.photo}/>
      <div className="flex flex-col mt-4">
        <div className=" font-medium text-2xl mb-3 ">
          <h1 className="text-gray-900">{data.name}</h1>
          <h1 className="text-blue-600">{data.title}</h1>
        
        <div className="flex mt-3">
          <a href={data.twitterLink}>
            <img className="h-7 mr-4" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"/>
          </a>
          <a href={data.linkedInLink}>
            <img className="h-7" src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"/>
          </a>
        </div>
          </div>
      </div>
    </div>
   
  );
}
export default Student;