import Image from 'next/image'
import slide1 from "../../../../images/slide1.jpg"
import slide2 from "../../../../images/slide2.jpg"
import slide3 from "../../../../images/slide3.jpg"
import slide4 from "../../../../images/slide4.jpg"
import slide5 from "../../../../images/slide5.jpg"
import Star from "../Star"

const Features = () => {
  return (
    <div className="pb-20">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-semibold">Features Products</h1>
        <p className="text-xl text-gray-500 font-serif">The new modern design summer collection</p>
      </div>

<div>

<div className="shadow-[rgba(0,0,0,0.24)_0px_3px_8px] p-4 bg-white rounded-lg w-[300px]">
    <Image src={slide1} width={300} className='rounded-xl h-60' alt='Image'/>
    <div className='pl-2'>
    <h1 className='font-semibold text-2xl'>Nike</h1>
    <p className='text-gray-500'>Air Jordan Max Pro 1</p>
    <Star rating={5}/>
    </div>
    </div>

    <div>

    </div>
    <div>

    </div>
</div>
  
    </div>
  )
}

export default Features;
