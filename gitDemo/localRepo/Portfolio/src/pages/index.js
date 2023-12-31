import Head from 'next/head'
import Navbar from '@/components/navbar.component'
import Hero from '@/components/hero.component'
import About from '@/components/about.component'
import Skills from '@/components/skills.component'
import Projects from '@/components/projects.component'
import Contact from '@/components/contact.component'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ritam's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-8 md:px-24 md:text-lg xl:px-48 snap-y snap-mandatory overflow-hidden">
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
    </>
  )
}
