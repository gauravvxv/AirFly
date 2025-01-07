import {FaStar , FaStarHalfAlt , FaRegStar } from 'react-icons/fa';

const Star = ({rating}) => {
    const fullStar = Math.floor(rating);
    const halfStar = rating % 1 !==0 ? <FaStarHalfAlt color='gold'/> : null;
    const emptyStar = 5 - Math.ceil(rating);
  return (
    < div className='flex space-x-1'>
      {Array(fullStar).fill().map(( i) => <FaStar key={i} color='gold'/> )}
      {halfStar && <FaStarHalfAlt key={fullStar}/>}
      {Array(emptyStar).fill().map((i)=> <FaRegStar key={i+ fullStar + (halfStar ?1:0)} color='gold'/>)}
    </div>
  )
}

export default Star
