import Image from "next/image"
import men from "../../../../images/men.png"
import women from "../../../../images/women.jpg"
import kid from "../../../../images/kid.png"

const Home1 = () => {
  return (
    <div className="pt-10">

        <div className="flex justify-center">
            <h1 className="text-3xl font-bold">Who You Are Shopping For?</h1>
        </div>

        <div className="flex justify-evenly p-10">

          <div>
            <Image src={men} alt="Men Image" width={300}/>
          </div>

          
          <div>
            <Image src={women} alt="women Image" width={300}/>
          </div>

          
          <div>
            <Image src={kid} alt="kid Image" width={300}/>
          </div>

        </div>

<div>

</div>
        
      
    </div>
  )
}

export default Home1
