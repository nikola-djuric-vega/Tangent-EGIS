import { CorePageProperties, Form, PageTypeNames } from '.'

export interface NewsletterSubscriptionPage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  url: string
  minutesRead: string
  publishedDate: string
  introText: string
  socialPlatforms: []
  components: any
  relatedContent: any
  cTAComponent: any
  ancestors: any
  text?: string
  contactLink?: { url: string; name: string }
  peopleList?: any
  checkboxText: string
  subscriptionTitle: string
  requiredFieldsText: string
  newsletterFormId: string
  newsletterForm: Form
  emailTo: string
  thankYouPageLink?: {
    name: string
    url: string
  }
}
