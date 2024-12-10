// src/App.jsx
import React, { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

function App() {
	// Smooth scroll implementation
	useEffect(() => {
		document.querySelectorAll('a[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault()
				const href = this.getAttribute('href')
				document.querySelector(href).scrollIntoView({
					behavior: 'smooth'
				})
			})
		})
	}, [])

	return (
		<div className="min-h-screen bg-background">
			<ScrollProgress />
			<Header />
			<main>
				<AnimatePresence mode="wait">
					<Hero />
					<Services />
					<Contact />
				</AnimatePresence>
			</main>
			<Footer />
		</div>
	)
}

export default App
