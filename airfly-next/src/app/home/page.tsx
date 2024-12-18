import jordan from '../../../images/jordan-home.png'
import Image from 'next/image'
const Home = () => {
  return (
    <section className='bg-[#f8ecde] relative min-h-screen'>

        <div >
    <div>
    <h1  
    style={{
        fontSize: 'clamp(50px, 12vw, 100vw)', 
        WebkitTextStroke: '3px rgb(33, 37, 41)', 
        color: 'transparent', 
        position: 'absolute',
        left: '70px',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        top: '-40px',
        fontWeight: 'bolder'
    }}
    >
         THE NEW 2025
  </h1>
    </div>

    <div>
        <h1      
        style={{
            fontSize: 'clamp(50px , 13vw , 100vw)',
            color: '#212529',
            zIndex: '1',
            position: 'absolute',
            top: '3vw',
            right:'12vw',
        fontFamily: 'sans-serif',
            fontWeight: 'bolder'
        }}
        >AIR JORDAN</h1>
    </div>

    <div>
<Image
src={jordan}
alt='Jordan Picture'
width={700}
style={{
  position: 'absolute',
  left: '120px',
  bottom:'-140px',
  zIndex: '99'
}}
/>


    </div>


        </div>
    </section>
  )
}

export default Home
