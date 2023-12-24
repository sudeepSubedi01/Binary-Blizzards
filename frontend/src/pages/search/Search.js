import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Singlevolunteer from '../../components/Singlevolunteer'
import axios from 'axios'

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])

  useEffect(() => {
    const timeout = setTimeout(async() => {
        if(!searchParams.get('q')) return
        try {
            setLoading(true)
            const {data} = await axios.get(`http://localhost:5000/api/volunteers?search=${searchParams.get("q")}`)
            setLoading(false)
            setResults(data)
        } catch (error) {
            setLoading(false)
            console.log(error.message)
        }
    }, 1000);
    return ()=> clearTimeout(timeout)
  }, [searchParams])
  
  searchParams.get("search");
  return (
    <>
        <Navbar/>
        <div className="flex flex-col-reverse md:flex-row md:justify-between p-10 bg-gray-100 gap-4 justify-center items-center">
            <h1 className="font-bold text-2xl">Search Results</h1>
            <input value={searchParams.get('q')} onChange={(e)=> setSearchParams({q: e.target.value})} type="search" placeholder="Search Volunteers" className="input input-bordered input-primary w-full max-w-xs" />
        </div>
        <div className="flex basis-3 flex-wrap">
        {loading ? <>{
            <div className="w-screen h-[50vh] flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
            </div>
        }</>:<>
        {results.map(volunteer => <Singlevolunteer key={volunteer._id} details={volunteer}/>)}
        {results.length  === 0 && <>
            <div className="w-screen h-[50vh] flex justify-center items-center">
                <p className="text-xl">No results found. . . . . . . .</p>
            </div>
        </>}
        </>}
        </div>
        
        <Footer/>
    </>
  )
};

export default Search;
