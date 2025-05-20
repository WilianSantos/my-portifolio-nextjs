'use client'

import Image, { StaticImageData } from 'next/image'
import { Icon } from '@iconify/react'

import { Tag } from '../Tag'
import Link from 'next/link'
import { useState } from 'react'

type PropsProject = {
  title: string
  image: StaticImageData
  tags: string[]
}

export function Project({ title, image, tags }: PropsProject) {
  const [hovering, setHovering] = useState(false)
  return (
    <div className="w-full flex flex-col items-start gap-8">
      <div className="hover:border-green-400 border-1 border-gray-500 p-2">
        <Image
          className="w-full h-auto object-cover"
          src={image}
          alt={`Foto principal - ${title}`}
        />
      </div>
      <div className="flex items-center justify-start flex-wrap gap-2">
        {tags.map((item) => (
          <Tag key={item} name={item} />
        ))}
      </div>
      <button className="flex items-center text-xl font-extrabold">
        {title}
        <Link
          href="#projects"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(!hovering)}
          className="flex items-center justify-center h-15 w-15 ml-4 bg-gray-300 hover:bg-green-400 duration-700 ease-in-out rounded-full"
        >
          {hovering ? (
            <Icon icon="prime:arrow-right" className="w-7 h-7" />
          ) : (
            <Icon icon="prime:arrow-up-right" className="h-7 w-7" />
          )}
        </Link>
      </button>
    </div>
  )
}
