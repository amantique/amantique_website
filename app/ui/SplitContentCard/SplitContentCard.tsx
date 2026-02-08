"use client"

import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"
import { SplitContentCardProps } from "./SplitContentCard.types"

export const SplitContentCard = ({
  title,
  subtitle,
  meta,
  image,
  badge,
  href,
  reverse = false,
  bgColor = "#FFFFF",
  textColor = "#000000",
}: SplitContentCardProps) => {
  const Wrapper: any = href ? Link : "div"

  return (
    <Wrapper href={href ?? ""} className="block">
      <div
        className={clsx(
          "flex flex-col md:flex-row overflow-hidden transition-transform hover:scale-105",
          reverse && "md:flex-row-reverse",
          "text-white"
        )}
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {/* TEXTE */}
        <div
          className={clsx(
            "p-4 md:w-2/5",
            "text-right md:text-left"
          )}
        >
          <h3 className="text-6xl md:text-6xl font-bold">{title}</h3>
          {subtitle && <p className="text-4xl md:text-4xl">{subtitle}</p>}
          {meta && <p className="text-xl md:text-2xl">{meta}</p>}
        </div>

        {/* IMAGE */}
        <div className="relative w-full md:w-3/5 h-[300px]">
          <Image src={image} alt={title} fill className="object-cover" />
          {badge && (
            <div className="absolute bottom-2 right-2 text-5xl px-3 py-1 rounded-lg">
              {badge}
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  )
}
