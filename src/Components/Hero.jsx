import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall } from 'react-icons/di';
import { FaBootstrap } from 'react-icons/fa';
import { SiMysql, SiPostgresql, SiMongodb, SiTailwindcss, SiGraphql, SiExpress } from 'react-icons/si';
import image5 from "../assets/image5.gif";

const Hero = () => {
  return (
    <div className='mt-24 max-w-[1200px] mx-auto relative'>
      <div className='grid md:grid-cols-2 place-items-center gap-8'>
        {/* Animated Intro */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={['Fullstack Dev', 1000, 'Webdesigner', 1000, 'Consultant', 1000]}
            speed={50}
            repeat={Infinity}
            className='font-bold text-gray-400 text-xl md:text-5xl italic mb-4'
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className='text-gray-200 md:text-5xl text-2xl tracking-tight mb-4'
          >
            HEY, I AM <br />
            <span className='text-purple-500'>Sunil Kannaujiya</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className='text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6'
          >
            I am a passionate fullstack developer
          </motion.p>

          {/* Buttons and Icons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className='flex flex-row items-center gap-6 my-4 md:mb-0'
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.3)' }}
              className='z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                     border-purple-400 rounded-xl'
            >
              <a href="https://drive.google.com/file/d/1Vk3x4DWSOeVNJZ9NjhKz_SH6dAeWhZ3L/view?usp=drive_link">Download resume</a>
            </motion.button>

            <div className='flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20'>
              <motion.a whileHover={{ scale: 1.2 }} href='https://github.com/kannaujiya360' target='_blank'>
                <AiOutlineGithub />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href='https://www.linkedin.com/in/sunil-kannaujiya-77925524a/' target='_blank'>
                <AiOutlineLinkedin />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href='https://www.instagram.com/web_sunil/' target='_blank'>
                <AiOutlineInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img 
                src={image5}
                className="w-[300px] md:w-[450px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
      </div>

      {/* Tech Stack Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
      >
        

        {/* Tech Icons with Hover Effects */}
        <motion.div
          whileHover={{
            scale: 1.2,
            x: [0, 100, -100, 0],  // Horizontal movement effect (left-right)
            y: [0, 100, -100, 0],  // Vertical movement effect (top-bottom)
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="mx-2 relative"
        >
          <DiHtml5 className="text-orange-600" />
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.2,
            x: [0, 100, -100, 0],
            y: [0, 100, -100, 0],
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="mx-2 relative"
        >
          <DiCss3 className="text-blue-600" />
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.2,
            x: [0, 100, -100, 0],
            y: [0, 100, -100, 0],
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="mx-2 relative"
        >
          <DiJavascript1 className="text-yellow-500" />
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.2,
            x: [0, 100, -100, 0],
            y: [0, 100, -100, 0],
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="mx-2 relative"
        >
          <DiReact className="text-blue-500" />
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.2,
            x: [0, 100, -100, 0],
            y: [0, 100, -100, 0],
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="mx-2 relative"
        >
          <DiNodejsSmall className="text-green-500" />
        </motion.div>

        {/* Additional Tech Stack Icons */}
        <motion.div
          whileHover={{
            scale: 1.2,
            x: [0, 100, -100, 0],
            y: [0, 100, -100, 0],
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="mx-2 relative"
        >
          <FaBootstrap className="text-purple-600" />
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.2,
            x: [0, 100, -100, 0],
            y: [0, 100, -100, 0],
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="mx-2 relative"
        >
          <SiMysql className="text-blue-800" />
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.2,
            x: [0, 100, -100, 0],
            y: [0, 100, -100, 0],
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="mx-2 relative"
        >
          <SiPostgresql className="text-blue-600" />
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.2,
            x: [0, 100, -100, 0],
            y: [0, 100, -100, 0],
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="mx-2 relative"
        >
          <SiMongodb className="text-green-600" />
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.2,
            x: [0, 100, -100, 0],
            y: [0, 100, -100, 0],
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="mx-2 relative"
        >
          <SiTailwindcss className="text-blue-400" />
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.2,
            x: [0, 100, -100, 0],
            y: [0, 100, -100, 0],
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="mx-2 relative"
        >
          <SiGraphql className="text-purple-500" />
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.2,
            x: [0, 100, -100, 0],
            y: [0, 100, -100, 0],
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="mx-2 relative"
        >
          <SiExpress className="text-green-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
