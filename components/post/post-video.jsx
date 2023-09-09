export default function PostVideo() {
  return (
    <div>
      <video
        src='/phonevideo.mp4'
        autoPlay
        loop
        controls
        muted
        playsInline
        className='object-cover w-full h-full sm:hidden'
      />
      <video
        src='/video.mp4'
        autoPlay
        loop
        controls
        muted
        playsInline
        className='object-cover w-full h-full hidden sm:block'
      />
    </div>
  )
}
