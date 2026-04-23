'use client';

import { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Dumbbell,
  Heart,
  Instagram,
  Lock,
  Mail,
  Menu,
  MessageCircle,
  Sparkles,
  Star,
  Trophy,
  X,
} from 'lucide-react';

const nav = ['About', 'Services', 'Results', 'Cookbook', 'Plans', 'FAQ', 'Contact'];

const services = [
  {
    icon: Dumbbell,
    title: '1:1 Fitness Coaching',
    text: 'Custom coaching built around each client’s goals, training level, schedule, and real life.',
  },
  {
    icon: Sparkles,
    title: 'Macro Coaching',
    text: 'Practical nutrition guidance that helps clients feel confident, flexible, and consistent.',
  },
  {
    icon: MessageCircle,
    title: 'Accountability Support',
    text: 'Regular check-ins, momentum, encouragement, and structure to keep clients moving forward.',
  },
];

const wins = [
  {
    title: 'Transformation Placeholder #1',
    stat: 'Before / after story',
    text: 'Add a real client transformation here with a short story, progress metric, and optional photo.',
  },
  {
    title: 'Transformation Placeholder #2',
    stat: 'Confidence + consistency win',
    text: 'This card can later highlight body composition progress, strength gains, or healthier routines.',
  },
  {
    title: 'Transformation Placeholder #3',
    stat: 'Performance + lifestyle win',
    text: 'Show how Paige helps clients build sustainable systems that work in real life.',
  },
];

const testimonials = [
  'Paige helped me feel more confident, more consistent, and more in control of my goals.',
  'The support and accountability made it easier to actually stick with the plan.',
  'I finally found an approach that felt motivating, realistic, and sustainable.',
];

const recipeCategories = [
  'High-Protein Breakfasts',
  'Macro-Friendly Lunches',
  'Easy Dinners',
  'Snacks & Treats',
];

const plans = [
  {
    name: 'Starter',
    price: '$___',
    text: 'Perfect placeholder for an entry-level macro setup or coaching offer.',
    featured: false,
  },
  {
    name: 'Signature Coaching',
    price: '$___',
    text: 'Use this as the featured offer for Paige’s main 1:1 coaching experience.',
    featured: true,
  },
  {
    name: 'VIP',
    price: '$___',
    text: 'Great spot for a premium high-touch coaching tier with extra support and access.',
    featured: false,
  },
];

const faqs = [
  {
    question: 'Who is coaching for?',
    answer:
      'Women who want real results, better habits, confidence, structure, and a more sustainable approach to fitness and nutrition.',
  },
  {
    question: 'What does macro coaching include?',
    answer:
      'This section can explain how Paige teaches clients to understand food, hit goals, and stay flexible without feeling restricted.',
  },
  {
    question: 'Is this beginner friendly?',
    answer:
      'Yes. The site is structured to support all experience levels, from total beginners to more advanced clients.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Use the contact form, email Paige directly, or plug in a consultation booking link for a smoother onboarding flow.',
  },
];

const formAction = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '';
const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || '#contact';
const instagramHandle = process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || '@handleplaceholder';
const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 text-zinc-950">
      <header className="sticky top-0 z-50 border-b border-pink-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black font-bold text-pink-300 shadow-sm">
              HG
            </div>
            <div>
              <div className="font-semibold">Hot Girl Macros</div>
              <div className="text-xs text-zinc-500">Paige Rosenberg • Fitness Coach</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-zinc-700 transition hover:text-black">
                {item}
              </a>
            ))}
            <a href={bookingUrl} className="rounded-2xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">
              Apply Now
            </a>
          </nav>

          <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-pink-200 bg-white px-6 py-4 md:hidden">
            <div className="grid gap-3">
              {nav.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium" onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              ))}
              <a href={bookingUrl} className="mt-2 rounded-2xl bg-black px-4 py-3 text-center text-sm font-medium text-white">
                Apply Now
              </a>
            </div>
          </div>
        )}
      </header>

      <section id="top" className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-300 bg-pink-100 px-4 py-1 text-sm font-medium text-pink-700">
            <Heart size={14} /> Fitness • Macros • Confidence
          </span>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
            Hot Girl Results.
            <br />
            Real Life Habits.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-700">
            Coaching by Paige Rosenberg designed to help women build confidence, improve fitness, and master nutrition without extremes, burnout, or confusion.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={bookingUrl} className="rounded-2xl bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
              Start Coaching
            </a>
            <a href="#plans" className="rounded-2xl border border-pink-300 bg-white px-6 py-3 text-sm font-medium transition hover:bg-pink-100">
              View Offers
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-zinc-600">
            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-pink-600" /> Sustainable coaching</div>
            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-pink-600" /> Real accountability</div>
            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-pink-600" /> Personalized support</div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[2rem] bg-black p-8 text-white shadow-sm md:col-span-2">
            <div className="text-sm text-pink-300">Coach Spotlight</div>
            <div className="mt-3 text-3xl font-semibold">Competitive CrossFit Athlete</div>
            <p className="mt-3 text-sm leading-6 text-pink-100">
              Paige brings discipline, competition experience, and a high-performance mindset into practical coaching for everyday women.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-pink-200">
            <div className="text-sm text-zinc-500">Photo Area</div>
            <div className="mt-2 text-xl font-semibold">Brand / coach image</div>
            <p className="mt-2 text-sm leading-6 text-zinc-700">Replace this card with a professional lifestyle or fitness image of Paige.</p>
          </div>

          <div className="rounded-[2rem] bg-pink-200 p-6 shadow-sm">
            <div className="text-sm text-zinc-700">Signature Promise</div>
            <div className="mt-2 text-xl font-semibold">Macros made simple</div>
            <p className="mt-2 text-sm leading-6 text-zinc-800">Clean structure, clear support, and coaching built for real life.</p>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 md:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-700">About Paige</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Strong coaching with a feminine, confident edge.</h2>
          <p className="mt-5 text-base leading-8 text-zinc-700">
            Hot Girl Macros is built around helping women feel stronger, more confident, and more in control of their routines. Paige combines performance experience with an encouraging coaching style that makes fitness and nutrition feel realistic.
          </p>
          <p className="mt-4 text-base leading-8 text-zinc-700">
            You can later expand this section with competition accomplishments, certifications, media features, and her coaching philosophy.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-pink-200">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['1:1', 'Personalized support'],
              ['CrossFit', 'Athlete mindset'],
              ['Macros', 'Practical nutrition'],
              ['Habits', 'Built for real life'],
            ].map(([headline, text]) => (
              <div key={headline} className="rounded-3xl bg-pink-50 p-5">
                <div className="text-2xl font-semibold">{headline}</div>
                <div className="mt-1 text-sm text-zinc-600">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-700">Services</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">How clients work with Paige.</h2>
          </div>
          <a href="#plans" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-800">
            See coaching offers <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-pink-200">
                <div className="mb-5 inline-flex rounded-2xl bg-pink-100 p-3 text-pink-700">
                  <Icon size={22} />
                </div>
                <div className="text-xl font-semibold">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-zinc-700">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="results" className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-700">Client Wins</p>
        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Real transformation stories belong here.</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {wins.map((item) => (
            <div key={item.title} className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-pink-200">
              <div className="mb-5 inline-flex rounded-2xl bg-black p-3 text-pink-300">
                <Star size={20} />
              </div>
              <div className="text-lg font-semibold">{item.title}</div>
              <div className="mt-2 text-sm font-medium text-pink-700">{item.stat}</div>
              <p className="mt-4 text-sm leading-7 text-zinc-700">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] bg-black px-8 py-8 text-white">
          <div className="text-sm text-pink-300">Testimonial Preview</div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {testimonials.map((quote) => (
              <div key={quote} className="rounded-3xl bg-white/10 p-5 text-sm leading-7 text-pink-50">
                “{quote}”
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cookbook" className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-black px-8 py-10 text-white">
            <BookOpen className="mb-5 text-pink-300" />
            <h2 className="text-3xl font-semibold md:text-4xl">Recipe Vault</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-pink-100">
              This section can become a free recipe hub, a premium cookbook, or a client-only content area with meal plans and downloadable guides.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['High Protein', 'Macro Friendly', 'Quick Prep'].map((tag) => (
                <span key={tag} className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-pink-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {recipeCategories.map((item) => (
              <div key={item} className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-pink-200">
                <div className="text-lg font-semibold">{item}</div>
                <p className="mt-2 text-sm leading-6 text-zinc-700">Placeholder for recipes, downloads, or subscriber-only content.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-700">Offers</p>
        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Coaching plans ready for launch.</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] p-7 shadow-sm ring-1 ${plan.featured ? 'bg-black text-white ring-black' : 'bg-white text-zinc-950 ring-pink-200'}`}
            >
              {plan.featured && (
                <div className="mb-4 inline-flex rounded-full bg-pink-300 px-3 py-1 text-xs font-semibold text-black">
                  Most Popular
                </div>
              )}
              <div className="text-xl font-semibold">{plan.name}</div>
              <div className={`mt-3 text-4xl font-semibold ${plan.featured ? 'text-pink-300' : 'text-zinc-950'}`}>{plan.price}</div>
              <p className={`mt-4 text-sm leading-7 ${plan.featured ? 'text-pink-50' : 'text-zinc-700'}`}>{plan.text}</p>
              <ul className={`mt-5 space-y-3 text-sm ${plan.featured ? 'text-pink-100' : 'text-zinc-700'}`}>
                <li>• Placeholder feature one</li>
                <li>• Placeholder feature two</li>
                <li>• Placeholder feature three</li>
              </ul>
              <a
                href={bookingUrl}
                className={`mt-6 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition ${plan.featured ? 'bg-pink-300 text-black hover:opacity-90' : 'bg-black text-white hover:opacity-90'}`}
              >
                Apply for {plan.name}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <div className="rounded-[2rem] bg-gradient-to-r from-pink-200 via-pink-100 to-white px-8 py-10 ring-1 ring-pink-200">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-700">Optional Add-Ons</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Booking, chat, and premium access can plug in here.</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-700">
                This site is already structured for a booking system, client chat tool, paid products, and even a locked members-only cookbook area.
              </p>
            </div>
            <div className="grid gap-3">
              <div className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium shadow-sm ring-1 ring-pink-200"><Calendar size={16} /> Booking link placeholder</div>
              <div className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium shadow-sm ring-1 ring-pink-200"><MessageCircle size={16} /> Chat widget placeholder</div>
              <div className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium shadow-sm ring-1 ring-pink-200"><Lock size={16} /> Members area placeholder</div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-700">FAQ</p>
        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Frequently asked questions</h2>
        <div className="mt-8 grid gap-4">
          {faqs.map((item, i) => (
            <button
              key={item.question}
              onClick={() => setFaqOpen(i === faqOpen ? null : i)}
              className="rounded-[2rem] bg-white p-6 text-left shadow-sm ring-1 ring-pink-200"
            >
              <div className="flex items-center justify-between gap-4 font-semibold">
                {item.question}
                <ChevronDown size={18} className={`${faqOpen === i ? 'rotate-180' : ''} transition`} />
              </div>
              {faqOpen === i && <p className="mt-4 text-sm leading-7 text-zinc-700">{item.answer}</p>}
            </button>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-700">Contact</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Ready to work with Paige?</h2>
            <p className="mt-4 text-base leading-8 text-zinc-700">
              Reach out using the form, email Paige directly, or connect a consultation booking link for a smoother onboarding experience.
            </p>

            <a href="mailto:paigemackenzzie@hotmail.com" className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium shadow-sm ring-1 ring-pink-200">
              <Mail size={18} /> paigemackenzzie@hotmail.com
            </a>

            <div className="mt-8 rounded-[2rem] bg-black p-6 text-white">
              <div className="text-sm text-pink-300">Social Placeholder</div>
              <div className="mt-3 text-lg font-semibold">Instagram-ready brand section</div>
              <p className="mt-3 text-sm leading-7 text-pink-100">
                Add her Instagram handle, transformation reels, or embedded social proof here.
              </p>
              <a href={instagramUrl} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-pink-200">
                <Instagram size={16} /> {instagramHandle}
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-pink-200">
            <div className="mb-6">
              <div className="text-xl font-semibold">Apply for coaching</div>
              <p className="mt-2 text-sm leading-6 text-zinc-700">
                This form is ready to connect to Formspark, Formspree, or your own backend. Add NEXT_PUBLIC_FORMSPREE_ENDPOINT to enable a real POST target.
              </p>
            </div>
            <form action={formAction || undefined} method="POST" className="grid gap-4">
              <input name="name" placeholder="Your name" className="rounded-2xl border border-pink-300 px-4 py-3 outline-none transition focus:border-black" />
              <input type="email" name="email" placeholder="Your email" className="rounded-2xl border border-pink-300 px-4 py-3 outline-none transition focus:border-black" />
              <input name="goal" placeholder="Your main goal" className="rounded-2xl border border-pink-300 px-4 py-3 outline-none transition focus:border-black" />
              <textarea name="message" rows={5} placeholder="Tell Paige about your goals, struggles, and what kind of support you’re looking for" className="rounded-2xl border border-pink-300 px-4 py-3 outline-none transition focus:border-black" />
              <button type="submit" className="rounded-2xl bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
                Send Application
              </button>
              {!formAction && (
                <p className="text-xs text-zinc-500">
                  Form endpoint not configured yet. The site will deploy fine now, and you can connect the form later.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-pink-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between md:px-10">
          <div>Hot Girl Macros</div>
          <div>Fitness Coaching • Macro Coaching • Confidence</div>
        </div>
      </footer>
    </div>
  );
}
