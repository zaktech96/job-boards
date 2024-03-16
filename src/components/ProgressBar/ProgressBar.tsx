'use client'
import React from 'react'
import Styles from './ProgressBar.module.css'
import { motion, useScroll } from 'framer-motion'

const ProgressBar = () => {
    const { scrollYProgress } = useScroll()
    return (
        <motion.div
            className={Styles.loadingBar}
            style={{
                scaleX: scrollYProgress,
            }}
        ></motion.div>
    )
}

export { ProgressBar as default }
