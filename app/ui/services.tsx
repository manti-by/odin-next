"use client"

import Link from "next/link"
import Image from "next/image"

interface ServiceProps {
  link: URL,
  image: string,
  alt: string
}

export function Service(props: ServiceProps) {
  return (
    <Link
      href={props.link}
      className="flex items-center gap-5 self-start rounded-lg px-6 py-3 transition-colors hover:bg-gray-400"
    >
      <Image src={props.image} alt={props.alt} width="200" height="300" priority={false} />
    </Link>
  )
}

export default function Services() {
  return (
    <>
      <Service link={new URL("https://www.odin.local")} image="/img/pinata.png" alt="Pinata" />
      <Service link={new URL("https://deluge.odin.local")} image="/img/deluge.png" alt="Deluge" />
      <Service link={new URL("https://mail.odin.local")} image="/img/mailhog.png" alt="Mailhog" />
      <Service link={new URL("https://es.odin.local")} image="/img/elasticsearch.png" alt="Elastic Search" />
    </>
  )
}
