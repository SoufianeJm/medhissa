import { Container } from '@/components/fragments/container'
import { StackCard } from '@/components/sections/stack-card'
import { StackIntro } from '@/components/sections/stack-intro'

export function ContentCard() {
  return (
    <Container type="section" className="pb-12">
      <div className="rounded-xl">
        <div className="grid auto-rows-auto gap-12">
          <div className="grid grid-cols-1 gap-2">
            <p className="text-tertiary-foreground">Address</p>
            <p>
            35, Boulevard Moulouya<br/>
            Immeuble Jad Office, 4ᵉ étage, Bureau n°21<br/>
            Oulfa, Casablanca
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
