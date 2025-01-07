import Image from 'next/image'
import slide1 from "../../../../images/slide1.jpg"
import slide2 from "../../../../images/slide2.jpg"
import slide3 from "../../../../images/slide3.jpg"
import slide4 from "../../../../images/slide4.jpg"
import slide5 from "../../../../images/slide5.jpg"

const ImageEffect = () => {
  return (
    <div className="flex flex-col items-center pb-20">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-semibold">New Arrivals</h1>
        <p className="text-xl text-gray-500 font-serif">summer collection new modern design</p>
      </div>

      <div className="w-[1040px] overflow-hidden">
        <ul className="flex justify-center items-center">
          <li className="hover:scale-110 transition-transform duration-300">
            <a href="">
              <Image src={slide1} alt="Image" width={300} height={400} />
            </a>
          </li>
          <li className="hover:scale-110 transition-transform duration-300">
            <a href="">
              <Image src={slide2} alt="Image" width={300} height={400} />
            </a>
          </li>
          <li className="hover:scale-110 transition-transform duration-300">
            <a href="">
              <Image src={slide3} alt="Image" width={300} height={400} />
            </a>
          </li>
          <li className="hover:scale-110 transition-transform duration-300">
            <a href="">
              <Image src={slide4} alt="Image" width={300} height={400} />
            </a>
          </li>
          <li className="hover:scale-110 transition-transform duration-300">
            <a href="">
              <Image src={slide5} alt="Image" width={300} height={400} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ImageEffect;
