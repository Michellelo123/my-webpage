import React from 'react'
import styles from './Work.module.css'
import {workExp} from "./workData"
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import {FaBreadSlice, FaTooth, FaLaptopCode} from 'react-icons/fa6'
export default function Work() {
    const mappedWorkExp = workExp.map((job, index) => (
        <motion.div
            key={job.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <VerticalTimelineElement
                position={index % 2 === 0 ? 'left' : 'right'}
                date={job.date}
                iconStyle={{ background: 'rgb(119, 80, 22)', color: 'white',width: '30px',
  height: '30px', marginLeft: '-15px' }}
                contentStyle={{ background: "#84a98c", color: "white" }}
                contentArrowStyle={{ borderRight: '7px solid #84a98c' }}
            >
                <h4>{job.title}</h4>
                <p style={{fontStyle:"italic"}}>{job.company}</p>
                <p>{job.description}</p>
            </VerticalTimelineElement>
        </motion.div>
    ))

    return (
        <section id="work" className={styles.workSection}>
            <h1>Work</h1>
            {/* <hr className={styles.hr} /> */}
            <VerticalTimeline lineColor='rgb(119, 80, 22)' animate={false}>
                {mappedWorkExp}
            </VerticalTimeline>
            <div></div>
        </section>
    )
}
