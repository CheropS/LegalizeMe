"use client"

import { FingerPrintIcon, ChatBubbleLeftIcon, PaperAirplaneIcon, EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const features = [
  {
      name: 'AI That Thinks Like a Legal Mind',
      description:
          'LegalizeMe isn’t just about speed — it’s about precision. We connect you to authoritative legal sources like Kenya Law and layer that with cutting-edge AI to distill insight, draft legal documents, and surface case law in seconds. No clutter. No confusion. Just clarity — when it matters most.',
      icon: ChatBubbleLeftIcon,
  },
  {
      name: '"Counsel" Your Personal Legal Assistant',
      description:
          '"Counsel" isn\'t just a chatbot—it\'s your real-time document generator. From contracts to agreements, "Counsel" delivers. Fast, accurate, and as easy as a conversation, "Counsel" puts legal support at your fingertips.',
      icon: PaperAirplaneIcon,
  },
  {
      name: 'Security You Can Trust',
      description:
          'At LegalizeMe, your privacy is paramount. We utilize the latest security protocols and industry-leading best practices to safeguard your data, ensuring that your information is always protected. With us, you can approach your legal work with confidence, knowing your data is in safe hands.',
      icon: FingerPrintIcon,
  },
  {
      name: 'Coming Soon: A Glimpse into the Future',
      description: 'We\'re just getting started. Soon, you\'ll have access to cutting-edge features like advanced contract analysis to identify risks and optimize terms—plus much more. Stay tuned.',
    icon: EllipsisHorizontalCircleIcon,
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <span className="mb-2 block text-lg font-semibold text-purple-600">
            Get your cases solved faster
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            LegalizeMe: Fast, Efficient, Reliable and Accessible
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            We leverage cutting-edge AI technology to simplify legal services and streamline your workflow.
            From lightning-fast research to automated document generation, we empower you to focus on what matters.
            With smart recommendations and robust security, the future of legal services is just a click away.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group relative pl-16"
              >
                <dt className="text-xl font-bold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                    <div className="relative text-white transition-all duration-300 group-hover:text-blue-400">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-lg leading-relaxed text-gray-300">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
} 