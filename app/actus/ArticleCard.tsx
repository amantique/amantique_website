import { SplitContentCard } from "../ui/SplitContentCard"
import { Article } from "./Actus.types"

type ArticleCardProps = {
  article: Article
  design?: {
    bgColor?: string
    textColor?: string
  }
}

export const ArticleCard = ({ article, design }: ArticleCardProps) => {
  return (
    <SplitContentCard
      title={article.title}
      subtitle={article.subtitle}
      meta={article.author}
      image={article.image}
      badge={article.category}
      href={article.url}
      reverse={article.reverse}
      bgColor={design?.bgColor}
      textColor={design?.textColor}
    />
  )
}
