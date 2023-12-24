import React from "react";

const Singlevolunteer = ({ details }) => {
  return (
    <>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg justify-center flex-col gap-2">
          <img
            alt="team"
            class="w-32 h-32 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src={details?.profilePicture}
          />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">
              {details?.firstName} {" "} {details?.lastName}
            </h2>
            <p class="text-gray-500">
            <span className="font-semibold mr-1 text-black">
            Country: 
            </span>
            {details?.country}
            </p>
            <p class="text-gray-500">
            <span className="font-semibold mr-1 text-black">
            Province: 
            </span>
            {details?.province || 'Unknown'}
            </p>
            <p class="text-gray-500">
            <span className="font-semibold mr-1 text-black">
            District: 
            </span>
            {details?.district || 'Unknown'}
            </p>
            <p class="text-gray-500">
            <span className="font-semibold mr-1 text-black">
            Municipality: 
            </span>
            {details?.municipality || 'Unknown'}
            </p>
            <p class="text-gray-500">
            <span className="font-semibold mr-1 text-black">
            Contact: 
            </span>
            {details?.phoneNumber}</p>
            <p class="text-gray-500">
            <span className="font-semibold mr-1 text-black">
            Email: 
            </span>
            {details?.email}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singlevolunteer;
