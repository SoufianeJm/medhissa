import Image from 'next/image'
import Link from 'next/link'
import whatsappLogo from '@/public/design/whatsapp.png'
import phoneLogo from '@/public/design/phone.png'
import mailLogo from '@/public/design/mail.png'

import { Container } from '@/components/fragments/container'

export function StackCard() {
  return (
    <Container type="section" className="pb-24">
      <ul className="flex flex-col">
        <li className="flex">
          <Link
            href="https://wa.me/212669662692"
            target="_blank"
            className="flex w-full items-center gap-5 border-b border-zinc-100 p-5 hover:rounded-md hover:bg-zinc-100 dark:border-zinc-900 dark:hover:bg-zinc-900"
          >
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border-transparent bg-green-100 p-2 dark:bg-zinc-900">
              <Image
                src={whatsappLogo}
                alt="WhatsApp logo"
                width={24}
                height={24}
                placeholder="blur"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col items-start">
              <span>WhatsApp</span>
              <span className="text-sm text-tertiary-foreground">
              06 69 66 26 92
              </span>
            </div>
          </Link>
        </li>
        <li className="flex">
          <Link
            href="tel:+212770747128"
            target="_blank"
            className="flex w-full items-center gap-5 border-b border-zinc-100 p-5 hover:rounded-md hover:bg-zinc-100 dark:border-zinc-900 dark:hover:bg-zinc-900"
          >
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border-transparent bg-green-100 p-2 dark:bg-zinc-900">
              <Image
                src={phoneLogo}
                alt="Phone logo"
                width={24}
                height={24}
                placeholder="blur"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col items-start">
              <span>Téléphone</span>
              <span className="text-sm text-tertiary-foreground">
              07 70 74 71 28
              </span>
            </div>
          </Link>
        </li>
        <li className="flex">
          <Link
            href="mailto:mohamedhissawork@gmail.com"
            target="_blank"
            className="flex w-full items-center gap-5 border-b border-zinc-100 p-5 hover:rounded-md hover:bg-zinc-100 dark:border-zinc-900 dark:hover:bg-zinc-900"
          >
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border-transparent bg-green-100 p-2 dark:bg-zinc-900">
              <Image
                src={mailLogo}
                alt="mail logo"
                width={24}
                height={24}
                placeholder="blur"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col items-start">
              <span>email</span>
              <span className="text-sm text-tertiary-foreground">
              mohamedhissawork@gmail.com
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </Container>
  )
}
