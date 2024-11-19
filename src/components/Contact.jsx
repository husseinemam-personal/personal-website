import { motion } from 'framer-motion'
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="heading">Get in Touch</h2>
          <p className="subheading">
            Let's discuss how we can work together
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex items-center gap-x-3">
                <EnvelopeIcon className="h-6 w-6 text-primary" />
                <h3 className="text-base font-semibold text-gray-900">Email</h3>
              </div>
              <p className="mt-3 text-base text-gray-600">
                <a
                  href="mailto:contact@youremail.com"
                  className="hover:text-primary"
                >
                  contact@youremail.com
                </a>
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex items-center gap-x-3">
                <MapPinIcon className="h-6 w-6 text-primary" />
                <h3 className="text-base font-semibold text-gray-900">Location</h3>
              </div>
              <p className="mt-3 text-base text-gray-600">
                San Francisco Bay Area
              </p>
            </div>
          </div>

          <form className="mt-12 rounded-lg bg-white p-8 shadow-sm ring-1 ring-gray-900/5">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="Your message"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="btn w-full justify-center"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
