import bannerimage from '../images/banner1.jpg'

function Home() {
  return (
    <div className='homebanner'>
      <img src={bannerimage} className='bannerimage'/>
    </div>
  )
}

export default Home