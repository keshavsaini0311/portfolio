/* eslint-disable no-unused-vars */
import React from 'react'

export default function Contact() {
  return (
    <div  className='bg-gradient-to-r from-zinc-800 to-neutral-950'>

    <section id="contact" className="container mx-auto p-6 text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-white">Name</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow p-3" />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Email</label>
          <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow p-3" />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Message</label>
          <textarea className="mt-1 block w-full border border-gray-300 rounded-md shadow p-3" rows="5"></textarea>
        </div>
        <div>
          <button type="submit" className="mt-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg shadow">Submit</button>
        </div>
      </form>
    </section>

    </div>
  )
}
