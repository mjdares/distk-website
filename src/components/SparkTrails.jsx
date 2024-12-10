// src/components/SparkTrails.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SparkTrails = () => {
	return (
		<div className="fixed inset-0 pointer-events-none">
			{[...Array(20)].map((_, i) => (
				<motion.div
					key={i}
					className="absolute w-1 h-1 bg-primary/20 rounded-full"
					initial={{ opacity: 0, x: '50vw' }}
					animate={{
						opacity: [0, 1, 0],
						y: [0, window.innerHeight],
						x: ['50vw', `${Math.random() * 100}vw`],
					}}
					transition={{
						duration: Math.random() * 2 + 1,
						repeat: Infinity,
						delay: Math.random() * 2,
					}}
				/>
			))}
		</div>
	);
};

export default SparkTrails;
