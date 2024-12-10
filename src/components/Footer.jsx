
import React from 'react'
import { Mail, MapPin, Linkedin } from 'lucide-react'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="bg-secondary text-white">
			<div className="container mx-auto px-6 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{/* Company Info */}
					<div>
						<h3 className="text-xl font-bold mb-4">Daipu</h3>
						<p className="text-gray-300">
							Innovating drone technology for a better tomorrow.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-xl font-bold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<a href="#hero" className="text-gray-300 hover:text-white">
									Home
								</a>
							</li>
							<li>
								<a href="#services" className="text-gray-300 hover:text-white">
									Services
								</a>
							</li>
							<li>
								<a href="#contact" className="text-gray-300 hover:text-white">
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-xl font-bold mb-4">Contact</h3>
						<ul className="space-y-2">
							<li className="flex items-center space-x-2">
								<Mail size={16} />
								<a
									href="mailto:contact@daipu.co.in"
									className="text-gray-300 hover:text-white"
								>
									contact@daipu.co.in
								</a>
							</li>
							<li className="flex items-center space-x-2">
								<MapPin size={16} />
								<span className="text-gray-300">
									Bengaluru, Karnataka, India
								</span>
							</li>
							<li className="flex items-center space-x-2">
								<Linkedin size={16} />
								<a href="#" className="text-gray-300 hover:text-white">
									LinkedIn
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-700 mt-8 pt-8 text-center">
					<p className="text-gray-300">
						© {currentYear} Daipu. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
