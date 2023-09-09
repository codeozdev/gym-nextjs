import PostOne from '@/components/post/post-one'
import PostVideo from '@/components/post/post-video'
import PostTwo from '@/components/post/post-two'
import PostThree from '@/components/post/post-three'

export default function Home() {
  return (
    <main className=''>
      <PostOne />
      <PostVideo />
      <PostTwo />
      <PostThree />
    </main>
  )
}

/*
controls ile video oynatma kontrollerini gösterir.
autoplay ile video otomatik olarak başlar.
muted ile video başladığında sesi kapatır.
 */
