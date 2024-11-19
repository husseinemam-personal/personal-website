import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/10 pt-14">
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hussein Emam
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Software Developer at MedicalDataHub
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Specializing in AWS Cloud Solutions
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <a href="#contact" className="btn">
              Get in touch
            </a>
            <a href="#about" className="text-base font-semibold leading-7 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </div>
      
      <div
        className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-accent opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
