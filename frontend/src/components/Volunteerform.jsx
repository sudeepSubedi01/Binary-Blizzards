import React, { useRef, useState } from "react";
import axios from "axios";
import Select from "react-select";
import countries from "../utils/country.json";
import province from "../utils/province.json";
import districts from "../utils/districts.json";
import municipality from "../utils/municipality.json";
import qualifications from "../utils/educationalqualifications.json";
import occupations from "../utils/occupations.json";
import trainingOptions from "../utils/trainings.json";
import { useNavigate } from "react-router-dom";
const Volunteerform = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const fileInput = useRef(null);
  const [volunteerData, setVolunteerData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePicture: "",
    about: "",
    country: "",
    province: "",
    district: "",
    municipality: "",
    trainings: [],
    qualification: "",
    occupation: "",
  });
  const removeProfile = () => {
    setVolunteerData({ ...volunteerData, profilePicture: "" });
  };
  const handleUpload = async (file) => {
    setLoading(true);
    if (file === undefined) {
      return;
    }
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png"
    ) {
      const preset_key = "aidwave";
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", preset_key);
      fetch("https://api.cloudinary.com/v1_1/dsdranyms/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          const picUrl = data?.url?.toString();
          setVolunteerData({ ...volunteerData, profilePicture: picUrl });
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          setLoading(false);
        });
    } else {
      console.log("Please select an image");
    }
    try {
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(volunteerData);
    if (volunteerData?.password !== volunteerData?.confirmPassword)
      return console.log(1);
    const emailExpression = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailExpression.test(volunteerData?.email)) return console.log(2);

    try {
      setFormLoading(true);
      const { data } = await axios.post("http://localhost:5000/api/volunteers", volunteerData);
      setVolunteerData({
        firstName: "",
        lastName: "",
        gender: "",
        dateOfBirth: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
        profilePicture: "",
        about: "",
        country: "",
        province: "",
        district: "",
        municipality: "",
        trainings: [],
        qualification: "",
        occupation: "",
      });
      setFormLoading(false);
      navigate(`/login`);
    } catch (error) {
      console.log(error.message);
    }
    setFormLoading(false);
  };

  return (
    <div className="container flex items-center justify-center content-center w-full flex-col">
      <h1 className="text-3xl text-center font-bold leading-7 text-gray-900 mt-10">
        Volunteer Form
      </h1>
      <form className="mt-5 px-5 w-3/4" onSubmit={handleSubmit}>
        <div className="space-y-12 ">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-bold leading-8 text-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      value={volunteerData?.firstName}
                      onChange={(e) =>
                        setVolunteerData({
                          ...volunteerData,
                          firstName: e.target.value,
                        })
                      }
                      required
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      value={volunteerData?.lastName}
                      onChange={(e) =>
                        setVolunteerData({
                          ...volunteerData,
                          lastName: e.target.value,
                        })
                      }
                      required
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Choose your gender:
                  </label>
                  <div className="mt-2">
                    <fieldset data-role="controlgroup">
                      <label className="mx-2" htmlFor="male">
                        Male
                      </label>
                      <input
                        value={"male"}
                        type="radio"
                        name="gender"
                        id="male"
                        defaultValue="male"
                        defaultChecked=""
                        className=""
                        onChange={(e) =>
                          setVolunteerData({
                            ...volunteerData,
                            gender: e.target.value,
                          })
                        }
                      />
                      <label className="mx-2" htmlFor="female">
                        Female
                      </label>
                      <input
                        value={"female"}
                        type="radio"
                        name="gender"
                        id="female"
                        defaultValue="female"
                        onChange={(e) =>
                          setVolunteerData({
                            ...volunteerData,
                            gender: e.target.value,
                          })
                        }
                      />
                      <label className="mx-2" htmlFor="female">
                        Other
                      </label>
                      <input
                        value={"other"}
                        type="radio"
                        name="gender"
                        id="other"
                        defaultValue="other"
                        onChange={(e) =>
                          setVolunteerData({
                            ...volunteerData,
                            gender: e.target.value,
                          })
                        }
                      />
                    </fieldset>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="dob"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Date of Birth (A.D)
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      id="dob"
                      name="dob"
                      type="date"
                      autoComplete="dob"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                      placeholder="   YY-MM-DD"
                      onChange={(e) =>
                        setVolunteerData({
                          ...volunteerData,
                          dateOfBirth: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone no.:
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      id="phone"
                      name="phone"
                      type="text"
                      autoComplete="phone"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                      maxLength={10}
                      value={volunteerData?.phoneNumber}
                      onChange={(e) =>
                        setVolunteerData({
                          ...volunteerData,
                          phoneNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                      value={volunteerData?.email}
                      onChange={(e) =>
                        setVolunteerData({
                          ...volunteerData,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                      value={volunteerData?.password}
                      onChange={(e) =>
                        setVolunteerData({
                          ...volunteerData,
                          password: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="cpassword"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm password
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      type="password"
                      name="cpassword"
                      id="cpassword"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                      value={volunteerData?.confirmPassword}
                      onChange={(e) =>
                        setVolunteerData({
                          ...volunteerData,
                          confirmPassword: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <div className="flex flex-row gap-4">
                    <label
                      htmlFor="cover-photo"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Profile Picture
                    </label>
                    <button
                      onClick={removeProfile}
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    {volunteerData?.profilePicture?.length !== 0 ? (
                      <>
                        <img src={volunteerData?.profilePicture} alt="image" />
                      </>
                    ) : (
                      <>
                        <div className="text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-300"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                              clipRule="evenodd"
                            />
                          </svg>

                          {loading ? (
                            <>
                              <span className="loading loading-spinner loading-lg"></span>
                            </>
                          ) : (
                            <>
                              <div className="mt-4 flex text-sm leading-6 text-gray-600 flex-col">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500 flex justify-center flex-col items-center"
                                >
                                  <span>Upload a file</span>
                                  <input
                                    required
                                    className="w-1/2 md:w-full"
                                    type="file"
                                    ref={fileInput}
                                    onChange={(e) =>
                                      handleUpload(e.target.files[0])
                                    }
                                  />
                                </label>
                              </div>
                            </>
                          )}
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                About yourself:
              </label>
              <div className="mt-2">
                <textarea
                  required
                  id="about"
                  name="about"
                  rows={6}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                  defaultValue={""}
                  value={volunteerData?.about}
                  onChange={(e) =>
                    setVolunteerData({
                      ...volunteerData,
                      about: e.target.value,
                    })
                  }
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a few sentences about yourself.
              </p>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900 pt-2"
              >
                Country
              </label>
              <div className="mt-2">
                <Select
                  required
                  isClearable={true}
                  isSearchable={true}
                  options={countries}
                  onChange={(selectedOption) =>
                    setVolunteerData({
                      ...volunteerData,
                      country: selectedOption?.value,
                    })
                  }
                />
              </div>
            </div>

            {volunteerData?.country === "Nepal" && (
              <>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    State / Province
                  </label>
                  <div className="mt-2">
                    <Select
                      isClearable={true}
                      isSearchable={true}
                      options={province}
                      onChange={(selectedOption) =>
                        setVolunteerData({
                          ...volunteerData,
                          province: selectedOption?.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    District
                  </label>
                  <div className="mt-2">
                    <Select
                      isClearable={true}
                      isSearchable={true}
                      options={districts}
                      onChange={(selectedOption) =>
                        setVolunteerData({
                          ...volunteerData,
                          district: selectedOption?.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Municipality/VDC
                  </label>
                  <div className="mt-2">
                    <Select
                      isClearable={true}
                      isSearchable={true}
                      options={municipality}
                      onChange={(selectedOption) =>
                        setVolunteerData({
                          ...volunteerData,
                          municipality: selectedOption?.value,
                        })
                      }
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-bold leading-7 text-gray-900">
            Education:
          </h2>
          <p className="mt-1 text-sm leading- text-gray-600">
            Drop your Qualifiaction
          </p>
          <div className="mt-10 space-y-10">
            <div className="sm:col-span-4">
              <label
                htmlFor="Training Recieved"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Training Recieved
              </label>
              <Select
                required
                isClearable={true}
                isSearchable={true}
                options={trainingOptions}
                isMulti
                onChange={(selectedOptions) => {
                  const trainingLabels = selectedOptions.map(
                    (option) => option.label
                  );
                  setVolunteerData({
                    ...volunteerData,
                    trainings: trainingLabels,
                  });
                }}
              />
            </div>
            <div className="mt-10 space-y-10">
              <div className="sm:col-span-4">
                <label
                  htmlFor="Qualificatuion"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Qualification
                </label>
                <Select
                  required
                  isClearable={true}
                  isSearchable={true}
                  options={qualifications}
                  onChange={(selectedOption) =>
                    setVolunteerData({
                      ...volunteerData,
                      qualification: selectedOption?.value,
                    })
                  }
                />
              </div>
              <div className="mt-10 space-y-10">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="occupation"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Occupation
                  </label>
                  <Select
                    required
                    isClearable={true}
                    isSearchable={true}
                    options={occupations}
                    className="capitalize"
                    onChange={(selectedOption) =>
                      setVolunteerData({
                        ...volunteerData,
                        occupation: selectedOption?.value,
                      })
                    }
                  />
                </div>
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    Terms and Conditions
                  </legend>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-everything"
                        name="push-notifications"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        required
                      />
                      <label
                        htmlFor="push-everything"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        By clicking on check box you agree to the terms and
                        conditions of Aidwave Connect.
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            {formLoading ? (
              <>
                <button
                  disabled
                  type="submit"
                  className="rounded-md bg-indigo-400 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex flex-row gap-3"
                >
                  Submit{" "}
                  <span className="loading loading-spinner loading-md"></span>
                </button>
              </>
            ) : (
              <>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Volunteerform;
