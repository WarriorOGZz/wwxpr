'use client'

import { 
FileJson,
FileCode,
Code2,
Database,
Server,
Cpu,
Bot,
Wind,
Coffee,
Triangle,
Atom
} from 'lucide-react'

const techItems = [
  { icon: FileCode, name: 'JavaScript' },
  { icon: Code2, name: 'TypeScript' },
  { icon: Server, name: 'Node.js' },
  { icon: Bot, name: 'Discord.js' },
  { icon: FileJson, name: 'Python' },
  { icon: Database, name: 'MongoDB' },
  { icon: Database, name: 'PostgreSQL' },
  { icon: Cpu, name: 'Redis' },
  { icon: Server, name: 'REST API' },
  { icon: Triangle, name: 'Next.js' },
  { icon: Atom, name: 'React' },
  { icon: Wind, name: 'TailwindCSS' },
  { icon: Coffee, name: 'Java (Lavalink)' },
]

export default function Marquee() {
  return (
    <section className="py-10 border-y border-white/[0.06] bg-[#030303] relative z-10 overflow-hidden reveal-on-scroll">
      <div className="max-w-full mx-auto mask-gradient-x">
        <div className="flex items-center gap-24 w-max animate-scroll">
          {[...techItems, ...techItems].map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="flex items-center gap-3 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium text-lg tracking-tight">
                  {item.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
