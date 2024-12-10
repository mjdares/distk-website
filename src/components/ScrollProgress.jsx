// src/components/ScrollProgress.jsx - Alternative Version
import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
	const { scrollYProgress } = useScroll();

	return (
		<>
			<div className="fixed top-0 left-0 right-0 h-3 bg-gray-200/50 z-50" />
			<motion.div
				className="fixed top-0 left-0 right-0 h-3 z-50 origin-left"
				style={{
					scaleX: scrollYProgress,
					background: 'linear-gradient(to right, #1E40AF, #60A5FA)',
					boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
				}}
			/>
		</>
	);
};

export default ScrollProgress;
