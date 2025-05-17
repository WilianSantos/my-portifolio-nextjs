import { StaticImageData } from 'next/image'
import { Icon } from '@iconify/react'

import { Tag } from '../Tag'
import { NavigationWrapper } from './NavigationWrapper'
import Link from 'next/link'

type PropsProject = {
  title: string
  images: StaticImageData[]
  children: React.ReactNode
  tags: string[]
  githubLink: string
}

export function Project({
  title,
  children,
  githubLink,
  images,
  tags
}: PropsProject) {
  return (
    <div className="w-full border-gray-300 border-2 p-4 flex flex-col items-center justify-center gap-5">
      <h4 className="text-2xl">{title}</h4>
      <div className="w-full">
        <NavigationWrapper images={images.map((item) => item)} />
      </div>
      <div className="p-6 text-sm text-gray-950">{children}</div>
      <div className="flex items-center justify-start flex-flex-wrap gap-1">
        {tags.map((item) => (
          <Tag key={item} name={item} />
        ))}
      </div>
      <div className="flex items-center">
        <Link
          href={githubLink}
          className="flex items-center gap-2 hover:underline hover:text-blue-400"
        >
          GitHub
          <Icon icon="logos:github-icon" width={20} height={20} />
        </Link>
      </div>
    </div>
  )
}
