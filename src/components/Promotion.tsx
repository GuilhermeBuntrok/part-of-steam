import { BsFillCircleFill } from "react-icons/bs";

interface gamesPromotionProps {
  srcImage: string;
  Name: string;
  Price: number;
  Percentage: number;
}



export default function Promotion({ srcImage, Name, Price, Percentage }: gamesPromotionProps) {

  function total(Price: number, percentage: number) {
    return Price - (Price * Percentage) / 100
  }

  return (
    <>
      <div>
        <img src={srcImage} width="230" />
        <div className=" flex ml-1 bg-black absolute bottom-15 top-[600px] 
        items-center gap-2 w-[100px] pl-1">
          <BsFillCircleFill color='red' />
          <span className='uppercase'>Ao vivo</span>
        </div>
        <p className='uppercase'>{Name}</p>
        <div className='bg-slate-900' >
          <span className='bg-green-500'>
            {`-${Percentage}%`}
            <span className='line-through text-md bg-slate-900  pl-2'>
              R$ {`${Price}`}
            </span>
            <span className='bg-slate-900 text-md text-green-500 pl-2'>
              R$ {total(Price, Percentage).toFixed(2)}
            </span>
          </span>

        </div>
      </div>
    </>
  )
}
