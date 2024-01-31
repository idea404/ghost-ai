import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is GhostAI?',
      answer:
        'GhostAI is a cutting-edge platform that uses AI to recreate gaming experiences. By analyzing on-chain historical data, we allow players to generate AI "ghosts" to simulate real-player behavior in various games.',
    },
    {
      question: 'How does GhostAI use historical data?',
      answer:
        "We analyze and process historical gaming data that's recorded on the blockchain to understand and simulate player behavior, creating a challenging and dynamic AI that mimics real opponents.",
    },
    {
      question: 'Which games are compatible with GhostAI?',
      answer:
        "Currently, GhostAI supports games that track player data on-chain. We're constantly expanding our library, so stay tuned for updates on supported games.",
    },
  ],
  [
    {
      question: 'Can I use GhostAI to improve my gaming skills?',
      answer:
        'Absolutely! GhostAI provides a unique opportunity to practice against AI simulations of top players, allowing you to learn from the best and improve your gameplay.',
    },
    {
      question: 'Is GhostAI token necessary to use the platform?',
      answer:
        'Yes, the GhostAI token is used as a utility token within our platform to create and interact with the AI ghosts, as well as access various features and services.',
    },
    {
      question: 'How do I purchase GhostAI tokens?',
      answer:
        "GhostAI tokens can be purchased on supported cryptocurrency exchanges or directly through our platform. Please ensure you're using a reputable source to buy tokens.",
    },
  ],
  [
    {
      question: 'How can I create my own AI ghost?',
      answer:
        'You can create your AI ghost by providing us with your historical gameplay data. Our algorithms will then process this data to create a ghost that plays just like you.',
    },
    {
      question: 'Is my gaming data safe with GhostAI?',
      answer:
        'We prioritize data security and privacy. Your data is encrypted and stored securely, only being used to enhance your gaming experience with GhostAI.',
    },
    {
      question: 'Can I trade or sell my AI ghost?',
      answer:
        'Yes, with GhostAI, your AI ghosts are your assets. You can trade or sell them on our platform, providing a new way for gamers to earn from their skills and strategies.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
