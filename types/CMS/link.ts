export enum LinkType {
  CONTENT,
  EXTERNAL,
  MEDIA,
}

export interface Link {
  name: string
  linkType: LinkType
  target?: string
  udi?: string
  url?: string
}
