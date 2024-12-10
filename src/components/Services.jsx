
import React from 'react'
import { motion } from 'framer-motion'
import {
	Plane,        // Changed from Crop
	Laptop,       // Changed from Drone
	Building,     // Changed from Building2
	Shield,       // Changed from ShieldAlert
	LayoutGrid    // Changed from City
} from 'lucide-react'

const services = [
	{
		icon: <Plane className="w-12 h-12" />,
		title: 'Agriculture',
		description: 'Advanced drone solutions for modern farming and agricultural optimization.',
	},
	{
		icon: <Laptop className="w-12 h-12" />,
		title: 'Drone Tech',
		description: 'Cutting-edge civilian & defense drone technology development.',
	},
	{
		icon: <Building className="w-12 h-12" />,
		title: 'Infrastructure Development',
		description: 'Comprehensive drone-based inspection and monitoring solutions.',
	},
	{
		icon: <Shield className="w-12 h-12" />,
		title: 'Risk & Resilience',
		description: 'Advanced risk assessment and management solutions.',
	},
	{
		icon: <LayoutGrid className="w-12 h-12" />,
		title: 'Urban Planning & Design',
		description: 'Innovative solutions for modern urban development and planning.',
	},
]

const Services = () => {
	return (
		<section id="services" className="py-20 bg-white">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
						Our Services
					</h2>
					<p className="text-text/80 max-w-2xl mx-auto">
						Comprehensive drone solutions for various sectors
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: index * 0.1 }}
							whileHover={{ scale: 1.05 }}
							className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-all"
						>
							<div className="text-primary mb-4">{service.icon}</div>
							<h3 className="text-xl font-semibold text-text mb-2">
								{service.title}
							</h3>
							<p className="text-text/80">{service.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Services
