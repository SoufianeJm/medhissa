import { Container } from '@/components/fragments/container'

export function StackIntro() {
  return (
    <Container type="section" className="pb-4">
      <div className="rounded-xl">
        <div className="grid auto-rows-auto gap-12">
          <div className="grid grid-cols-1 gap-2">
            <p className="text-tertiary-foreground">
              Pour RDV et renseignements
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
