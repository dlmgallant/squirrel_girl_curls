import { useState } from 'react';
import {
  Menu,
  X,
  Dumbbell,
  MessageCircle,
  Trophy,
  BookOpen,
  Mail,
  ChevronDown,
  Star,
  Instagram,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Heart,
  Calendar,
  Lock,
  Camera,
  Quote,
  Zap,
  Award,
  Users,
} from 'lucide-react';

export default function HotGirlMacrosWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);
  const [formState, setFormState] = useState({ name: '', email: '', goal: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);

  const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '';
  const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || '#contact';
  const INSTAGRAM_HANDLE = process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || 'squirrel_girl_curls';
  const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/squirrel_girl_curls';

  const nav = ['About', 'Services', 'Results', 'Cookbook', 'Plans', 'FAQ', 'Contact'];

  const services = [
    {
      icon: Dumbbell,
      title: '1:1 Fitness Coaching',
      text: 'Custom programming built around your goals, schedule, training history, and lifestyle — not a cookie-cutter plan.',
      detail: 'Weekly check-ins · Custom workouts · Form feedback',
    },
    {
      icon: Sparkles,
      title: 'Macro Coaching',
      text: 'Learn to fuel your body with confidence. Simple, flexible nutrition guidance that actually fits into your real life.',
      detail: 'Macro targets · Meal flexibility · No food rules',
    },
    {
      icon: MessageCircle,
      title: 'Accountability & Support',
      text: 'Consistent check-ins, honest feedback, and real encouragement to keep you moving forward every single week.',
      detail: 'Direct messaging · Weekly reviews · Habit tracking',
    },
  ];

  const wins = [
    {
      initials: 'S.M.',
      name: 'Sarah M.',
      result: 'Down 18 lbs in 12 weeks',
      stat: '-18 lbs',
      text: '"I never thought tracking macros could feel this freeing. Paige made it click for me in a way no diet ever had. I finally feel in control."',
      tag: 'Macro Coaching',
    },
    {
      initials: 'J.T.',
      name: 'Jamie T.',
      result: 'First pull-up at 34 years old',
      stat: 'New PR',
      text: '"The programming was perfectly paced. I went from zero upper body strength to hitting my first pull-up in under 3 months. I actually cried."',
      tag: '1:1 Fitness',
    },
    {
      initials: 'M.L.',
      name: 'Morgan L.',
      result: 'Consistent for 6 months straight',
      stat: '6 months',
      text: '"I've tried every program out there. The difference with Paige is the support between sessions. She actually holds you accountable — in the nicest way."',
      tag: 'Accountability',
    },
  ];

  const accomplishments = [
    { icon: Award, label: 'CrossFit Competitor', sub: 'Regional & local competitions' },
    { icon: Zap, label: 'Certified Coach', sub: 'Nutrition & strength training' },
    { icon: Users, label: '50+ Clients Coached', sub: 'Women of all fitness levels' },
    { icon: Trophy, label: 'Podium Finishes', sub: 'Multiple competition placings' },
  ];

  const recipeCategories = [
    {
      name: 'High-Protein Breakfasts',
      desc: 'Start your day with meals that keep you fueled for hours.',
      count: '12 recipes',
    },
    {
      name: 'Macro-Friendly Lunches',
      desc: 'Quick, balanced midday meals that actually taste good.',
      count: '15 recipes',
    },
    {
      name: 'Easy Dinners',
      desc: 'Family-friendly dinners that hit your macros without the stress.',
      count: '18 recipes',
    },
    {
      name: 'Snacks & Treats',
      desc: 'High-protein snacks that satisfy cravings the smart way.',
      count: '10 recipes',
    },
  ];

  const plans = [
    {
      name: 'Starter',
      price: '$___',
      period: '/month',
      text: 'Perfect for women who want personalized macro targets and a solid foundation to build from.',
      featured: false,
      features: [
        'Custom macro targets',
        'Initial nutrition consult',
        'Starter workout template',
        'Email support',
        '2 check-ins/month',
      ],
    },
    {
      name: 'Signature Coaching',
      price: '$___',
      period: '/month',
      text: "Paige's full 1:1 experience — programming, nutrition, and ongoing accountability in one package.",
      featured: true,
      features: [
        'Custom training program',
        'Weekly macro adjustments',
        'Unlimited check-ins',
        'Direct messaging access',
        'Monthly progress reviews',
        'Recipe vault access',
      ],
    },
    {
      name: 'VIP',
      price: '$___',
      period: '/month',
      text: 'Maximum support, maximum results. For women who want the full-access, high-touch coaching experience.',
      featured: false,
      features: [
        'Everything in Signature',
        'Priority response time',
        'Video form reviews',
        'Meal planning add-on',
        'Quarterly strategy calls',
      ],
    },
  ];

  const faqs = [
    [
      'Who is this coaching for?',
      "Hot Girl Macros is built for women who are tired of extreme diets, confusing programs, and going it alone. Whether you're a total beginner or you've been training for years, Paige meets you where you are and builds from there.",
    ],
    [
      'What does macro coaching actually include?',
      "You'll get personalized macro targets based on your body, goals, and lifestyle — not a generic calculator result. Paige teaches you how to hit your numbers flexibly, so you can eat out, enjoy life, and still make progress.",
    ],
    [
      'Do I need any equipment or gym access?',
      'Nope! Programs can be written for home, gym, or both. During your intake, Paige will ask about what equipment you have access to and build your plan around it.',
    ],
    [
      'How long before I see results?',
      'Most clients notice changes in energy, consistency, and confidence within the first 2–3 weeks. Physical results vary by person, but clients who follow the plan and stay consistent typically see meaningful progress within 4–8 weeks.',
    ],
    [
      'How do I get started?',
      'Fill out the application form below or email Paige directly. Once she reviews your info, she'll reach out to schedule a free intro call so you can ask questions and make sure it's a good fit before committing.',
    ],
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    if (!FORMSPREE_ENDPOINT) {
      setFormStatus('preview');
      return;
    }
    setFormStatus('loading');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formState),
      });
      setFormStatus(res.ok ? 'success' : 'error');
    } catch {
      setFormStatus('error');
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 text-zinc-950">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 border-b border-pink-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black font-bold text-pink-300 shadow-sm text-sm">
              HG
            </div>
            <div>
              <div className="font-semibold leading-tight">Hot Girl Macros</div>
              <div className="text-xs text-zinc-500">Paige Rosenberg · Fitness Coach</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-zinc-700 transition hover:text-black">
                {item}
              </a>
            ))}
            <a
              href={BOOKING_URL}
              className="rounded-2xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              Apply Now
            </a>
          </nav>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-pink-200 bg-white px-6 py-4 md:hidden">
            <div className="grid gap-3">
              {nav.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="text-sm font-medium">
                  {item}
                </a>
              ))}
              <a href={BOOKING_URL} className="mt-2 rounded-2xl bg-black px-4 py-3 text-center text-sm font-medium text-white">
                Apply Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section id="top" className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-300 bg-pink-100 px-4 py-1 text-sm font-medium text-pink-700">
            <Heart size={14} /> Fitness · Macros · Confidence
          </span>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
            Hot Girl Results. <br /> Real Life Habits.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-700">
            Coaching by Paige Rosenberg — helping women build confidence, improve fitness, and master nutrition without extremes, burnout, or confusion.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={BOOKING_URL} className="rounded-2xl bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
              Start Coaching
            </a>
            <a href="#plans" className="rounded-2xl border border-pink-300 bg-white px-6 py-3 text-sm font-medium transition hover:bg-pink-100">
              View Plans
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
              Paige brings real competition experience, discipline, and a high-performance mindset into practical coaching for everyday women — wherever they're starting from.
            </p>
          </div>

          {/* Photo placeholder — replace with <Image> when ready */}
          <div className="rounded-[2rem] bg-zinc-100 ring-1 ring-pink-200 overflow-hidden flex flex-col items-center justify-center min-h-[140px] gap-3 p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-pink-200">
              <Camera size={22} className="text-pink-600" />
            </div>
            <div className="text-center">
              <div className="font-semibold text-sm">Coach photo</div>
              <p className="mt-1 text-xs text-zinc-500">Replace with Paige's brand photo</p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-pink-200 p-6 shadow-sm">
            <div className="text-sm text-pink-800">Signature Promise</div>
            <div className="mt-2 text-xl font-semibold text-pink-900">Macros made simple</div>
            <p className="mt-2 text-sm leading-6 text-pink-800">Clean structure, clear support, and coaching built for real life.</p>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 md:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-700">About Paige</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Strong coaching with a feminine, confident edge.</h2>
          <p className="mt-5 text-base leading-8 text-zinc-700">
            Hot Girl Macros is built around helping women feel stronger, more confident, and more in control of their routines. Paige combines years of competition experience with an approachable, encouraging coaching style that makes fitness and nutrition feel achievable.
          </p>
          <p className="mt-4 text-base leading-8 text-zinc-700">
            She's competed in CrossFit at a regional level, coached dozens of women across all experience levels, and built her methods around one core belief: sustainable always beats extreme.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-pink-200">
          <div className="grid gap-4 sm:grid-cols-2">
            {accomplishments.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="rounded-3xl bg-pink-50 p-5">
                <div className="mb-2 inline-flex rounded-xl bg-pink-200 p-2">
                  <Icon size={16} className="text-pink-800" />
                </div>
                <div className="text-base font-semibold">{label}</div>
                <div className="mt-1 text-xs text-zinc-500">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-700">Services</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">How clients work with Paige.</h2>
          </div>
          <a href="#plans" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-800">
            See coaching plans <ArrowRight size={16} />
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
                <div className="mt-4 rounded-xl bg-pink-50 px-4 py-2 text-xs font-medium text-pink-700">{item.detail}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── RESULTS / TESTIMONIALS ── */}
      <section id="results" className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-700">Client Wins</p>
        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Real women, real results.</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {wins.map((item) => (
            <div key={item.name} className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-pink-200 flex flex-col">
              <div className="flex items-center gap-4 mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-pink-300 text-sm font-semibold flex-shrink-0">
                  {item.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{item.name}</div>
                  <div className="text-xs text-pink-700 font-medium mt-0.5">{item.result}</div>
                </div>
                <div className="ml-auto rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-700">{item.tag}</div>
              </div>
              <Quote size={18} className="text-pink-300 mb-3" />
              <p className="text-sm leading-7 text-zinc-700 italic flex-1">{item.text}</p>
              <div className="mt-5 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-pink-400 text-pink-400" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-8 rounded-[2rem] bg-black px-8 py-8 text-white">
          <div className="grid gap-6 md:grid-cols-3 text-center">
            <div>
              <div className="text-4xl font-semibold text-pink-300">50+</div>
              <div className="mt-1 text-sm text-pink-100">Women coached</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-pink-300">4.9★</div>
              <div className="mt-1 text-sm text-pink-100">Average client rating</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-pink-300">92%</div>
              <div className="mt-1 text-sm text-pink-100">Client retention rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COOKBOOK / RECIPE VAULT ── */}
      <section id="cookbook" className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-black px-8 py-10 text-white">
            <BookOpen className="mb-5 text-pink-300" size={28} />
            <h2 className="text-3xl font-semibold md:text-4xl">Recipe Vault</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-pink-100">
              High-protein, macro-friendly recipes that actually taste amazing. No bland chicken and rice — real food that fuels performance and satisfies cravings.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-pink-100">High Protein</span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-pink-100">Macro Friendly</span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-pink-100">Quick Prep</span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-pink-100">Gluten-Free Options</span>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white">
              <Lock size={14} className="text-pink-300" /> Full access included with coaching
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {recipeCategories.map((item) => (
              <div key={item.name} className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-pink-200">
                <div className="text-base font-semibold">{item.name}</div>
                <p className="mt-2 text-xs leading-6 text-zinc-600">{item.desc}</p>
                <div className="mt-3 text-xs font-medium text-pink-600">{item.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLANS ── */}
      <section id="plans" className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-700">Offers</p>
        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Choose your coaching plan.</h2>
        <p className="mt-3 text-base text-zinc-600">All plans include a free intro call before you commit.</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] p-7 shadow-sm ring-1 flex flex-col ${plan.featured ? 'bg-black text-white ring-black' : 'bg-white text-zinc-950 ring-pink-200'}`}
            >
              {plan.featured && (
                <div className="mb-4 inline-flex w-fit rounded-full bg-pink-300 px-3 py-1 text-xs font-semibold text-black">
                  Most Popular
                </div>
              )}
              <div className="text-xl font-semibold">{plan.name}</div>
              <div className={`mt-3 flex items-end gap-1 ${plan.featured ? 'text-pink-300' : 'text-zinc-950'}`}>
                <span className="text-4xl font-semibold">{plan.price}</span>
                <span className={`text-sm mb-1 ${plan.featured ? 'text-pink-200' : 'text-zinc-500'}`}>{plan.period}</span>
              </div>
              <p className={`mt-4 text-sm leading-7 ${plan.featured ? 'text-pink-100' : 'text-zinc-600'}`}>{plan.text}</p>
              <ul className={`mt-5 space-y-2 text-sm flex-1 ${plan.featured ? 'text-pink-100' : 'text-zinc-700'}`}>
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className={plan.featured ? 'text-pink-300 flex-shrink-0' : 'text-pink-500 flex-shrink-0'} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={BOOKING_URL}
                className={`mt-6 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition ${plan.featured ? 'bg-pink-300 text-black hover:opacity-90' : 'bg-black text-white hover:opacity-90'}`}
              >
                Apply for {plan.name}
              </a>
            </div>
          ))}
        </div>

        {/* Booking + add-ons */}
        <div className="mt-8 rounded-[2rem] bg-gradient-to-r from-pink-100 via-pink-50 to-white px-8 py-8 ring-1 ring-pink-200">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-700">Not sure which plan?</p>
              <h3 className="mt-2 text-2xl font-semibold">Book a free 15-minute intro call.</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                No pressure, no commitment. Just a quick conversation to figure out if coaching is a good fit and which plan makes sense for your goals.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={BOOKING_URL}
                className="inline-flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                <Calendar size={16} /> Book Free Call
              </a>
              <div className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium shadow-sm ring-1 ring-pink-200 text-zinc-500">
                <MessageCircle size={16} /> Chat widget coming soon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-700">FAQ</p>
        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Common questions answered.</h2>
        <div className="mt-8 grid gap-3">
          {faqs.map((item, i) => (
            <button
              key={item[0]}
              onClick={() => setFaqOpen(i === faqOpen ? -1 : i)}
              className="rounded-[2rem] bg-white p-6 text-left shadow-sm ring-1 ring-pink-200 w-full"
            >
              <div className="flex items-center justify-between gap-4 font-semibold text-sm md:text-base">
                {item[0]}
                <ChevronDown size={18} className={`flex-shrink-0 transition-transform duration-200 ${faqOpen === i ? 'rotate-180' : ''}`} />
              </div>
              {faqOpen === i && <p className="mt-4 text-sm leading-7 text-zinc-600">{item[1]}</p>}
            </button>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-700">Contact</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Ready to work with Paige?</h2>
            <p className="mt-4 text-base leading-8 text-zinc-700">
              Fill out the form, or reach out directly. Paige personally reviews every application and responds within 48 hours.
            </p>

            <a href="mailto:paigemackenzzie@hotmail.com" className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium shadow-sm ring-1 ring-pink-200 transition hover:bg-pink-50">
              <Mail size={18} className="text-pink-600" /> paigemackenzzie@hotmail.com
            </a>

            <div className="mt-8 rounded-[2rem] bg-black p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <Instagram size={18} className="text-pink-300" />
                <div className="text-sm font-semibold">Follow on Instagram</div>
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-300 text-sm font-medium hover:text-pink-200 transition"
              >
                @{INSTAGRAM_HANDLE}
              </a>
              <p className="mt-3 text-xs leading-6 text-pink-100">
                Behind-the-scenes workouts, macro tips, transformation reels, and daily coaching content.
              </p>
            </div>

            <div className="mt-4 rounded-[2rem] bg-pink-50 p-6 ring-1 ring-pink-200">
              <div className="text-sm font-semibold mb-1">What happens after you apply?</div>
              <ol className="mt-3 space-y-2 text-xs text-zinc-600 leading-6">
                <li className="flex gap-2"><span className="font-bold text-pink-600 flex-shrink-0">1.</span> Paige reviews your application (within 48 hrs)</li>
                <li className="flex gap-2"><span className="font-bold text-pink-600 flex-shrink-0">2.</span> You'll get an email to book a free intro call</li>
                <li className="flex gap-2"><span className="font-bold text-pink-600 flex-shrink-0">3.</span> On the call, you'll talk goals, questions, and fit</li>
                <li className="flex gap-2"><span className="font-bold text-pink-600 flex-shrink-0">4.</span> If it's a match, you'll receive your onboarding kit</li>
              </ol>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-pink-200">
            {formStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center h-full min-h-[320px] gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
                  <CheckCircle2 size={28} className="text-pink-600" />
                </div>
                <div className="text-xl font-semibold">Application received!</div>
                <p className="text-sm text-zinc-600 max-w-xs">
                  Paige will review your info and reach out within 48 hours to schedule your free intro call.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="text-xl font-semibold">Apply for coaching</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">Takes 2 minutes. No commitment required.</p>
                </div>
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <input
                    required
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="rounded-2xl border border-pink-300 px-4 py-3 outline-none transition focus:border-black text-sm"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Your email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="rounded-2xl border border-pink-300 px-4 py-3 outline-none transition focus:border-black text-sm"
                  />
                  <input
                    placeholder="Your main goal (e.g. lose fat, build strength, feel confident)"
                    value={formState.goal}
                    onChange={(e) => setFormState({ ...formState, goal: e.target.value })}
                    className="rounded-2xl border border-pink-300 px-4 py-3 outline-none transition focus:border-black text-sm"
                  />
                  <textarea
                    rows={4}
                    placeholder="Tell Paige about yourself — your current routine, struggles, and what kind of support you're looking for"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="rounded-2xl border border-pink-300 px-4 py-3 outline-none transition focus:border-black text-sm resize-none"
                  />
                  {formStatus === 'error' && (
                    <p className="text-sm text-red-500">Something went wrong. Please email Paige directly.</p>
                  )}
                  {formStatus === 'preview' && (
                    <p className="text-xs text-zinc-500 bg-pink-50 rounded-xl px-4 py-3">
                      Form preview mode — connect a Formspree endpoint via <code>NEXT_PUBLIC_FORMSPREE_ENDPOINT</code> to enable submissions.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="rounded-2xl bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60"
                  >
                    {formStatus === 'loading' ? 'Sending...' : 'Send Application →'}
                  </button>
                  <p className="text-center text-xs text-zinc-400">Free intro call included with every application</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-pink-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-pink-300 text-xs font-bold">HG</div>
            <div className="text-sm font-semibold">Hot Girl Macros</div>
          </div>
          <div className="text-sm text-zinc-500">Fitness Coaching · Macro Coaching · Confidence</div>
          <div className="flex items-center gap-4">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-black transition">
              <Instagram size={18} />
            </a>
            <a href="mailto:paigemackenzzie@hotmail.com" className="text-zinc-400 hover:text-black transition">
              <Mail size={18} />
            </a>
          </div>
        </div>
        <div className="border-t border-pink-100 px-6 py-4 text-center text-xs text-zinc-400">
          © {new Date().getFullYear()} Hot Girl Macros · Paige Rosenberg
        </div>
      </footer>
    </div>
  );
}
