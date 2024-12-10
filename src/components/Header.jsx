import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	const navItems = [
		{ name: 'Home', href: '#hero' },
		{ name: 'Services', href: '#services' },
		{ name: 'Contact', href: '#contact' },
	]

	return (
		<header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md">
			<nav className="container mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<a href="#" className="text-2xl font-bold text-primary">
							Daipu
						</a>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-text hover:text-primary transition-colors"
							>
								{item.name}
							</a>
						))}
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-text hover:text-primary"
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="md:hidden pt-4"
					>
						<div className="flex flex-col space-y-4">
							{navItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="text-text hover:text-primary transition-colors"
									onClick={() => setIsOpen(false)}
								>
									{item.name}
								</a>
							))}
						</div>
					</motion.div>
				)}
			</nav>
		</header>
	)
}

export default Header
