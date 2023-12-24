import React from "react";

const Profile = ({ details }) => {
  const dateOfBirth = new Date(details.dateOfBirth);
  const dateNow = new Date();
  const difference = dateNow - dateOfBirth;
  const age = Math.floor(difference / (1000 * 60 * 60 * 24 * 30 * 12));
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-12 py-10 flex flex-wrap rounded-md border-solid  border-indigo-600 border-y-4 content-center mx-auto justify-center items-center my-10">
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl md:text-3xl border-indigo-200 border-b-indigo-500 font-bold flext-column content-center pb-5 underline underline-offset-4">
              Volunteer Profile
            </h1>
              <img
                className="object-cover object-center w-50 h-50"
                src={details?.profilePicture}
                alt="stats"
              />
          </div>
          <div className="w-full sm:p-4 px-4 mb-6 flex justify-center items-center">
            <div className="leading-relaxed">
            <div className="flex items-center justify-center h-full">
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 3xl:grid-cols-3 font-bold max-w-screen-xl">
    <li className="py-2 my-2">First Name: {details?.firstName} </li>
    <li className="py-2 my-2">Last Name: {details?.lastName}</li>
    <li className="py-2 my-2">Status: Active</li>
    <li className="py-2 my-2">Gender: {details?.gender}</li>
    <li className="py-2 my-2">Age: {age}</li>
    <li className="py-2 my-2">Phone no.: {details?.phoneNumber}</li>
    <li className="py-2 my-2">Email: {details?.email}</li>
    <li className="py-2 my-2">Country: {details?.country}</li>
    <li className="py-2 my-2">Province: {details?.province || "Unknown"}</li>
    <li className="py-2 my-2">District: {details?.district || "Unknown"}</li>
    <li className="py-2 my-2">Municipality: {details?.municipality || "Unknown"}</li>
    <li className="py-2 my-2">Training & Skill: {details?.training}</li>
    <li className="py-2 my-2">Qualification: {details?.qualification}</li>
    <li className="py-2 my-2">Occupation: {details?.occupation}</li>
    <li className="py-2 my-2 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-3 3xl:col-span-3">
      About: {details?.about}
    </li>
  </ul>
</div>

            </div>
          </div>
          <div className="flex justify-center items-center w-full">
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 content-center">
            <h2 className="title-font font-medium text-3xl text-gray-900">2</h2>
            <p className="leading-relaxed">Project Completion</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">
              10
            </h2>
            <p className="leading-relaxed">Task Completions</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">
              35
            </h2>
            <p className="leading-relaxed">Social Engagement</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
            <p className="leading-relaxed">Awards</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
