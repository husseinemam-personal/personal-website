import { motion } from 'framer-motion'

export default function Features() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <img
                  src={feature.image}
                  alt={feature.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-base text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    name: 'Cloud Infrastructure',
    description: 'Building scalable and reliable cloud solutions on AWS',
    image: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/aws.svg'
  },
  {
    name: 'Modern Development',
    description: 'Creating innovative solutions with cutting-edge technologies',
    image: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react.svg'
  },
  {
    name: 'Healthcare Tech',
    description: 'Transforming healthcare through technology',
    image: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/docker-icon.svg'
  }
]
