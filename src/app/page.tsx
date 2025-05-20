import { Footer } from '@/components/Footer'
import { Banner } from '@/components/Banner'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'

export default function Home() {
  return (
    <main className="h-screen w-full overflow-y-scroll pr-2.5 pl-2.5 pt-10 pb-10">
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </main>
  )
}
