import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section id="experience" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="heading">Work Experience</h2>
          <p className="subheading">
            Building innovative solutions in healthcare technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24"
        >
          <div className="space-y-12">
            {experiences.map((role, roleIdx) => (
              <div
                key={roleIdx}
                className="relative rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5"
              >
                <div className="flex items-center gap-x-4">
                  <img src={role.logo} alt={role.company} className="h-12 w-12 rounded-full bg-gray-50" />
                  <div>
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {role.title}
                    </h3>
                    <p className="text-base leading-7 text-gray-600">{role.company}</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  {role.date}
                </p>
                <ul className="mt-4 space-y-2">
                  {role.responsibilities.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-base leading-7 text-gray-600">
                      • {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {role.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const experiences = [
  {
    title: 'Software Developer',
    company: 'MedicalDataHub',
    logo: '/company-logo.png', // You'll need to add this image
    date: '2020 - Present',
    responsibilities: [
      'Architecting and developing cloud-native healthcare applications using AWS services',
      'Implementing HIPAA-compliant data storage and processing solutions',
      'Leading the development of microservices-based applications',
      'Collaborating with healthcare providers to understand and implement their requirements',
    ],
    technologies: [
      'AWS',
      'React',
      'Node.js',
      'Python',
      'Docker',
      'Kubernetes',
      'MongoDB',
      'PostgreSQL',
    ],
  },
  // Add more experiences as needed
]
