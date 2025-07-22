import { ContentCard } from '@/components/sections/content-card'
import { Hero } from '@/components/sections/hero'
import { StackIntro } from '@/components/sections/stack-intro'
import { StackCard } from '@/components/sections/stack-card'

export default function Home() {
  return (
    <>
      <Hero title={'Mohamed Psychomotricien'} includeImage />
      <ContentCard />
      <StackIntro />
      <StackCard />
    </>
  )
}
