import { motion } from 'framer-motion'
import { Plane } from 'lucide-react'

const Hero = () => {
	return (
		<section id="hero" className="relative min-h-screen pt-20 bg-stars">
			{/* Animated Background Stars */}
			<div className="absolute inset-0 bg-stars opacity-50">
				{[...Array(20)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute w-1 h-1 bg-primary rounded-full"
						initial={{ opacity: 0.1 }}
						animate={{
							opacity: [0.1, 0.5, 0.1],
							y: ["0%", "100%"],
						}}
						transition={{
							duration: Math.random() * 3 + 2,
							repeat: Infinity,
							delay: Math.random() * 2,
						}}
						style={{
							left: `${Math.random() * 100}%`,
							top: `-${Math.random() * 20}%`,
						}}
					/>
				))}
			</div>

			<div className="container mx-auto px-6 py-32">
				<div className="flex flex-col items-center text-center">
					{/* Rotating Drone Icon */}
					<motion.div
						className="mb-8"
						animate={{ rotate: 360 }}
						transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
					>
						<Plane size={64} className="text-primary" />
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-4xl md:text-6xl font-bold text-text mb-6"
					>
						Advanced Drone Solutions
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-lg md:text-xl text-text/80 max-w-2xl mb-8"
					>
						Innovating and developing cutting-edge drone technology that enhances
						security, defense capabilities, and civilian applications across Bharat.
					</motion.p>

					<motion.a
						href="#contact"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
					>
						Get Started
					</motion.a>
				</div>
			</div>
		</section>
	)
}

export default Hero
