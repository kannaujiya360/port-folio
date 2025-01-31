import React from 'react'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import Reveal from './Reveal'

const Contect = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
    <Reveal>
    <div className="grid md:grid-cols-2 place-items-center">
        <div>
            <div className="text-gray-300 my-3">
                <h3 className="text-4xl font-semibold mb-5">About <span>Me</span></h3>
                <p className="text-justify leading-7 w-11/12 mx-auto">
                Hello! I'm Sunil Kannaujiya, a passionate,dedicated and budding software developer excited to dive into the world of tech. I'm new to the industry but have been passionately learning and working with Frontend/Backend.

I am  skilled Full Stack Developer proficient in JavaScript, React, Node.js, Express.js, and MongoDB. With a keen eye for detail and a passion for crafting seamless user experiences, I specialize in utilizing Tailwind CSS to create visually stunning and responsive web applications. My goal is to deliver high-quality solutions that not only meet client needs but also elevate their online presence and drive growth.
                </p>
            </div>

            


        </div>

        <form
           
           
           
            action="https://getform.io/f/axoompnb"
            method="POST"
            className=" max-w-xl p-1 md:p-10 "
            id="form"
        >
        <p className="text-gray-100 font-bold text-xl mb-2">
          Let´s connect!
        </p>
        <input
            type="text"
            id="name"
            placeholder="Your Name ..."
            name="name"
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 bg-white"
        />
        <input
          type="email"
          id="email"
          placeholder="Your Email ..."
          name="email"
          className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 bg-white"
        />
        <textarea
          name="textarea"
          id="textarea"
          cols="30"
          rows="4"
          placeholder="Your Message ..."
          className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 bg-white"
        />
        <button
          type="submit"
          className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
        >
          Send Message
        </button>
        
      </form>

    </div>
    
    </Reveal>
</div>
  )
}

export default Contect
