import React from 'react'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'
import VideoOverlay from '../../molecules/VideoOverlay/VideoOverlay'

const ImageVideoComponent = (data: any) => {
  const gridLines: Grid[] = [
    {
      desktopStartColumn: 4,
      align: 'right',
      alignMobile: 'right',
    },
    {
      desktopStartColumn: 7,
      align: 'right',
      alignMobile: 'right',
    },
  ]
  return (
    <section className="border-b border-gray-light ">
      <div className="container relative pb-2 md:pb-4">
        <GridLines
          grids={gridLines}
          colour="bg-gray-light"
          endLineDesktop={true}
        />
        <div className="relative">
          <VideoOverlay
            imageAltText={data.image?.umbracoAlternateText || data.image.name}
            supportingText={data.caption}
            videoUrl={data.videoSrc!}
            image={data.image?.umbracoFile?.url}
            blurImageUrl={data.image?.blur_url}
            showPlayIcon={!!data.videoSrc}
          />
        </div>
      </div>
    </section>
  )
}

export default ImageVideoComponent
