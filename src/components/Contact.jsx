// src/components/Contact.jsx
import React from 'react'
import { Mail, MapPin, Linkedin } from 'lucide-react'

const Contact = () => {
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('Form submitted')
	}

	return (
		<section id="contact" className="py-20 bg-background">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl font-bold text-center mb-16">Get in Touch</h2>

				<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
					{/* Form */}
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label className="block mb-2">Name</label>
							<input
								type="text"
								className="w-full px-4 py-2 rounded-lg border"
								required
							/>
						</div>
						<div>
							<label className="block mb-2">Email</label>
							<input
								type="email"
								className="w-full px-4 py-2 rounded-lg border"
								required
							/>
						</div>
						<div>
							<label className="block mb-2">Message</label>
							<textarea
								rows={4}
								className="w-full px-4 py-2 rounded-lg border"
								required
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-primary text-white px-6 py-3 rounded-lg"
						>
							Send Message
						</button>
					</form>

					{/* Contact Info */}
					<div className="space-y-8">
						<div className="flex items-start space-x-4">
							<Mail className="w-6 h-6" />
							<div>
								<h3 className="font-semibold">Email</h3>
								<a href="mailto:contact@daipu.co.in">contact@daipu.co.in</a>
							</div>
						</div>

						<div className="flex items-start space-x-4">
							<MapPin className="w-6 h-6" />
							<div>
								<h3 className="font-semibold">Address</h3>
								<p>Bengaluru, Karnataka, India</p>
							</div>
						</div>

						<div className="flex items-start space-x-4">
							<Linkedin className="w-6 h-6" />
							<div>
								<h3 className="font-semibold">LinkedIn</h3>
								<a href="#" target="_blank" rel="noopener noreferrer">
									Follow us on LinkedIn
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
