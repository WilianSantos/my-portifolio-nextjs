import { Footer } from '@/components/Footer'
import { Banner } from '@/components/Banner'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'

export default function Home() {
  return (
    <main className="h-screen mt-20 lg:mt-0 w-full overflow-y-scroll pr-2.5 pl-2.5 pt-10 pb-10">
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </main>
  )
}
