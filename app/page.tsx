import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'

export default function Home() {
  return (
    <main>
      <Card className="mx-auto max-w-[500px] p-8">
        <section className="flex justify-center items-center flex-col gap-8 bg-card">
          <p className="text-xs sm:text-sm uppercase font-light leading-8 text-center">
            Kickstart Your Next.js 14 Project
          </p>
          <h1 className="text-5xl text-center md:text-6xl font-bold leading-[4rem] tracking-tight text-foreground">
            <span className="text-primary">Next.js</span> and{' '}
            <span className="text-primary">shadcn/ui</span> gitHub template
          </h1>
          <p className="mt-3 text-center text-sm md:text-md leading-relaxed text-muted-foreground">
            Accelerate your Next.js 14 project development with our GitHub
            template. Built with simplicity and efficiency in mind, this
            template leverages the power of Next.js and the flexibility of
            shadcn-ui to provide a solid foundation for your web application.
            Whether you&apos;re a seasoned developer or just getting started,
            our template makes it easy to scaffold a Next.js project with app
            routing support. Say goodbye to boilerplate setup and hello to rapid
            development. Get started now and bring your ideas to life faster
            than ever before.
          </p>

          <Link
            href={'https://github.com/RickBr0wn/shadcn-template'}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button className="flex w-[360px] mx-auto text-white">
              <GitHubLogoIcon className="h-5 w-5 mr-2" />
              Use Template on GitHub
            </Button>
          </Link>
        </section>
      </Card>
    </main>
  )
}

// Path: app/page.tsx
// Language: Typescript
// Framework: React/Next.js
