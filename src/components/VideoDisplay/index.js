import {formatDistanceToNow} from 'date-fns'
import {
  VideoContainer,
  Thumbnail,
  VideoDetails,
  ChannelProfile,
  VideoDescription,
  Title,
  Name,
  TimeAndViews,
  Views,
  Dot,
  Time,
} from './styledComponents'

const VideoDisplay = props => {
  const {videoDetails} = props
  const {
    name,
    profileImgUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoDetails
  const currentTime = formatDistanceToNow(new Date(publishedAt))
  console.log(videoDetails)
  return (
    <VideoContainer>
      <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
      <VideoDetails>
        <ChannelProfile src={profileImgUrl} alt="channel profile" />
        <VideoDescription>
          <Title>{title}</Title>
          <Name>{name}</Name>
          <TimeAndViews>
            <Views>{`${viewCount} views`}</Views>
            <Dot>.</Dot>
            <Time>{currentTime}</Time>
          </TimeAndViews>
        </VideoDescription>
      </VideoDetails>
    </VideoContainer>
  )
}

export default VideoDisplay
