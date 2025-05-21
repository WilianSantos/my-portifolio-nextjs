import Image, { StaticImageData } from 'next/image'
import { Icon } from '@iconify/react'
import Link from 'next/link'

import { Tag } from './Tag'

type PropsProject = {
  title: string
  image: StaticImageData
  tags: string[]
  description: string
  github: string
}

export function Project({
  title,
  image,
  tags,
  description,
  github
}: PropsProject) {
  return (
    <div className="w-full h-full flex flex-col justify-between items-start gap-8">
      <div className="hover:border-green-400 border-1 border-gray-500 p-3">
        <Image
          className="w-full h-auto object-cover "
          src={image}
          alt={`Foto principal - ${title}`}
        />
      </div>
      <div className="flex items-center justify-start flex-wrap gap-2">
        {tags.map((item) => (
          <Tag key={item} name={item} />
        ))}
      </div>
      <div className="text-base text-start">
        <p>{description}</p>
      </div>
      <button className="flex items-center justify-between w-full text-xl font-extrabold">
        <span className="hover:text-green-400 w-10/12">{title}</span>
        <Link
          href={github}
          className="flex items-center justify-center h-15 w-15 ml-4 bg-gray-300 hover:bg-green-400 duration-700 ease-in-out rounded-full"
        >
          <Icon icon="mdi:github" className="w-7 h-7" />
        </Link>
      </button>
    </div>
  )
}
