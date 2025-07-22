import { MailingListForm } from '@/components/fragments/mailing-list-form'
import { ContentCard } from '@/components/sections/content-card'
import { Hero } from '@/components/sections/hero'
import { SocialLinks } from '@/components/sections/social-links'
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
