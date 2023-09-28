import TagLine from '../components/atoms/TagLine/TagLine'

export function generateCardProps(item: any) {
  return {
    ...item,
    linkTo: item.url,
    title: item.name,
    description: item.introductionText,
    tagLine: (
      <TagLine
        time={item.minutesRead}
        additionalInfo={
          !!item.insightTag &&
          !!item.insightTag.length &&
          item?.insightTag[0]?.name
        }
      />
    ),
  }
}
