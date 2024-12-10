// src/components/DroneCursor.jsx
import React, { useEffect, useState } from 'react';
import { Drone } from 'lucide-react';
import { motion } from 'framer-motion';

const DroneCursor = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return (
		<motion.div
			className="fixed pointer-events-none z-50"
			animate={{
				x: mousePosition.x - 16,
				y: mousePosition.y - 16,
			}}
			transition={{
				type: "spring",
				damping: 10,
				stiffness: 50,
				mass: 0.1
			}}
		>
			<Drone className="text-primary/30 w-8 h-8" />
		</motion.div>
	);
};

export default DroneCursor;
