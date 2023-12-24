import React from 'react'
import { Link } from 'react-router-dom'

const Guidelineslist = () => {
  return (
<div className="mt-20">
    <div className="px-4 sm:px-8 max-w-5xl m-auto">
        <h1 className="text-center font-semibold text-2xl">Volunteer Guidelines</h1>
        <p className="mt-2 text-center text-sm mb-4 text-gray-500">Follow these guidelines to make a meaningful impact as a volunteer.</p>
        <ul className="border border-gray-200 rounded overflow-hidden shadow-md text-lg list-decimals">
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                Register and Create a Profile: Set up your volunteer profile on our website by registering with essential information.
            </li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                Explore Available Tasks: Browse through the listed tasks to find opportunities that align with your skills and interests.
            </li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                Read Task Descriptions Thoroughly: Understand the requirements and expectations outlined in each task description before committing.
            </li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                Express Interest Responsibly: Once you find a suitable task, express your interest responsibly, considering your availability and commitment level.
            </li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                Complete Onboarding: Fulfill any onboarding requirements, such as training or orientation sessions, to ensure you're well-prepared.
            </li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                Communication is Key: Stay connected with the coordinator and fellow volunteers, responding promptly to messages and updates.
            </li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                Adhere to Task Deadlines: Respect task deadlines and timelines to maintain the efficiency of our disaster response efforts.
            </li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                Report Progress and Challenges: Regularly update your progress and report any challenges or issues you encounter during the task.
            </li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                Collaborate with the Team: Foster a collaborative spirit by actively engaging with the volunteer community and supporting each other.
            </li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                Provide Feedback: Share your feedback and insights to help improve our volunteer management system and enhance overall efficiency.
            </li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                Maintain Professionalism: Conduct yourself professionally in all interactions, treating fellow volunteers, coordinators, and community members with respect.
            </li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                Adaptability is Key: Be flexible and adaptive to changes, understanding that the nature of disaster response may require adjustments to plans.
            </li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                Prioritize Safety: Prioritize your safety and the safety of others during volunteer activities, following any safety guidelines provided.
            </li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                Respect Privacy and Confidentiality: Uphold the privacy and confidentiality of sensitive information related to tasks, beneficiaries, and fellow volunteers.
            </li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                Promote Inclusivity: Embrace diversity and inclusivity, creating an environment where everyone feels welcome and valued.
            </li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                Seek Help When Needed: Don't hesitate to seek assistance if you encounter challenges or need clarification on tasks. We're here to support you.
            </li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                Share Success Stories: Celebrate achievements and positive outcomes by sharing success stories, inspiring others to contribute to our mission.
            </li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                Participate in Community Events: Join community events, webinars, or meetings to foster a sense of belonging and strengthen our volunteer network.
            </li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                Encourage Others to Join: Spread the word about our volunteer opportunities, encouraging friends and family to contribute to our collective efforts.
            </li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                Stay Informed: Keep yourself informed about updates, policies, and relevant information by regularly checking our website and communication channels.
            </li>
        </ul>
        <p className='my-10'>By <Link className='link text-blue-600' to={'/login'}>logging in</Link>  you agree to all of the above guidelines.</p>
    </div>
</div>
  )
}

export default Guidelineslist