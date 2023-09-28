import AccordionComponent from '../components/contentTypes/AccordionComponent/AccordionComponent'
import AirportsGrid from '../components/contentTypes/AirportsGrid/AirportsGrid'
import AwardList from '../components/contentTypes/AwardList/AwardList'
import ContentCarouselComponent from '../components/contentTypes/ContentCarouselComponent/ContentCarouselComponent'
import Cta from '../components/contentTypes/Cta/Cta'
import FourColumnText from '../components/contentTypes/FourColumnText/FourColumnText'
import GroupStylizedTextImage from '../components/contentTypes/GroupStylizedTextImage/GroupStylizedTextImage'
import GenericLandingComponent from '../components/contentTypes/GenericLandingComponent/GenericLandingComponent'
import ImageCarouselComponent from '../components/contentTypes/ImageCarouselComponent/ImageCarouselComponent'
import InlineCta from '../components/contentTypes/InlineCta/InlineCta'
import ImageVideoComponent from '../components/contentTypes/ImageVideoComponent/ImageVideoComponent'
import OfficesAccordion from '../components/contentTypes/OfficesAccoridon/OfficesAccordion'
import QuoteCarouselComponent from '../components/contentTypes/QuoteCarouselComponent/QuoteCarouselComponent'
import PeopleList from '../components/contentTypes/PeopleList/PeopleList'
import RelatedNewsAndInsights from '../components/contentTypes/RelatedNewsAndInsights/RelatedNewsAndInsights'
import RelatedProjects from '../components/contentTypes/RelatedProjects/RelatedProjects'
import Statistics from '../components/contentTypes/Statistics/Statistics'
import StylizedTextImageComponent from '../components/contentTypes/StylizedTextImageComponent/StylizedTextImageComponent'
import Text from '../components/contentTypes/Text/Text'
import SocialCta from '../components/contentTypes/SocialCta/SocialCta'
import ThreeColumnTextImageComponent from '../components/contentTypes/ThreeColumnTextImageComponent/ThreeColumnTextImageComponent'
import ThreeTextColumnComponent from '../components/contentTypes/ThreeTextColumnComponent/ThreeTextColumnComponent'
import SocialCTAComponent from '../components/contentTypes/SocialCTAComponent/SocialCTAComponent'
import VideoBackgroundBannerComponent from '../components/contentTypes/VideoBackgroundBannerComponent/VideoBackgroundBannerComponent'

export const componentsMap: any = {
  AccordionComponent: AccordionComponent,
  AirportsGridComponent: AirportsGrid,
  AwardListComponent: AwardList,
  ContentCarouselCompo: ContentCarouselComponent,
  CTAComponent: Cta,
  FourColumnTextComponent: FourColumnText,
  GenericLandingComponent: GenericLandingComponent,
  GroupStylizedTextImageComponent: GroupStylizedTextImage,
  ImageCarouselComponent: ImageCarouselComponent,
  InclineCtaComponent: InlineCta,
  ImageOrVideoComponent: ImageVideoComponent,
  NewsInsightsRelatedContent: RelatedNewsAndInsights,
  OfficesAccordionComponent: OfficesAccordion,
  QuoteCarouselComponent: QuoteCarouselComponent,
  PeopleListComponent: PeopleList,
  ProjectsRelatedContent: RelatedProjects,
  SocialCtaComponent: SocialCta,
  StatisticsComponent: Statistics,
  StylizedTextImageComponent: StylizedTextImageComponent,
  TextComponent: Text,
  ThreeTextColumnComponent: ThreeTextColumnComponent,
  ThreeColumnTextImageComponent: ThreeColumnTextImageComponent,
  SocialCTAComponent: SocialCTAComponent,
  VideoBackgroundBannerComponent: VideoBackgroundBannerComponent,
}

const renderComponents = (components: any[]) => {
  return (
    <>
      {components?.map((component, index) => {
        const id = component.__typename
        const Component = componentsMap[id]
        if (!Component) {
          //throw new Error(`invalid content type provided ${id}`)
          return
        }
        return <Component {...component} key={index} />
      })}
    </>
  )
}

export default renderComponents
