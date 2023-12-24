import React, { useEffect, useState } from "react";
import Select from "react-select";
import disasters from "../../utils/disasterlist.json";
import districts from "../../utils/districts.json";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Taskform = () => {
    const navigate = useNavigate()
  const [search, setSearch] = useState("");
  const [volunteerResults, setVolunteerResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [task, setTask] = useState({
    volunteers: [],
    disasterType: "",
    location: "",
    description: "",
  });
  useEffect(() => {
    if (!search) return;
    const id = setTimeout(() => {
      searchFunc();
    }, 1000);

    const searchFunc = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `http://localhost:5000/api/volunteers?search=${search}`
        );
        setLoading(false);
        setVolunteerResults(data);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    };

    return () => clearTimeout(id);
  }, [search]);

  const handleVolunteerClick = (data) => {
    if (!task.volunteers.includes(data)) {
      setTask((prevTask) => ({
        ...prevTask,
        volunteers: [...prevTask.volunteers, data],
      }));
    }
  };
  const removeVolunteer = (volunteerToRemove) => {
    console.log(volunteerToRemove);
    setTask((prevTask) => ({
      ...prevTask,
      volunteers: prevTask.volunteers.filter(
        (volunteer) => volunteer !== volunteerToRemove
      ),
    }));
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      setFormLoading(true)
        const {data} = await axios.post('http://localhost:5000/api/tasks', task)
        if(data){
          setFormLoading(false)
            navigate('/dashboard/activities')
        }
    } catch (error) {
      setFormLoading(false)
        console.log(error.message)
    }
  }
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Create a Task
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Sincerely, create your task for asssign.
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Disaster/Calamities Type:
            </label>
            <div className="mt-2.5">
              <Select
                options={disasters}
                isSearchable
                onChange={(selectedOption) =>
                  setTask({
                    ...task,
                    disasterType: selectedOption?.value,
                  })
                }
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Location:
            </label>
            <div className="mt-2.5">
              <Select options={districts} isSearchable onChange={(selectedOption) =>
                  setTask({
                    ...task,
                    location: selectedOption?.value,
                  })
                } />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="flex gap-2">
              {task.volunteers.map((selected) => {
                return (
                  <>
                    <span
                      onClick={() => removeVolunteer(selected)}
                      className="px-2 py-1 bg-blue-700 text-white"
                    >
                      {selected.firstName} {selected.lastName} <span>X</span>
                    </span>
                  </>
                );
              })}
            </div>
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Volunteers :
            </label>
            <div className="mt-2.5">
              <input
                value={search || ""}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {volunteerResults.map((volunteer) => {
              return (
                <>
                  {loading ? (
                    <>
                      <div className="skeleton w-full h-20 my-1"></div>
                      <div className="skeleton w-full h-20 my-1"></div>
                      <div className="skeleton w-full h-20 my-1"></div>
                    </>
                  ) : (
                    <>
                      <div
                        onClick={() => handleVolunteerClick(volunteer)}
                        className="flex flex-row gap-3 bg-blue-500 p-2 my-2 text-white justify-start items-center cursor-pointer"
                      >
                        <div>
                          <img
                            className="w-16 h-16 rounded-full"
                            src={volunteer?.profilePicture}
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center text-sm">
                          <p>
                            Full Name: {volunteer?.firstName}
                            {volunteer?.lastName}
                          </p>
                          <p>Country: {volunteer?.country}</p>
                          <p>District:{volunteer?.district} </p>
                          <p>City: {volunteer?.municipality}</p>
                        </div>
                      </div>
                    </>
                  )}
                </>
              );
            })}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Brief description
            </label>
            <div className="mt-2.5">
              <textarea
              value={task.description || ""}
              onChange={(e)=>setTask({...task, description: e.target.value})}
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <div className="mt-10">
              {formLoading? <>
                <button
                disabled
                  type="button"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Creating. . . . .
                </button>
              </>:<>
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Let's create a task.
                </button>
              </>}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Taskform;
