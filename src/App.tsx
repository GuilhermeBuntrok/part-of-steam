import Devour from './assets/Devour.jpg'
import Monster from './assets/Monster-Hunter.jpg'
import Fifa from './assets/fifa-23.jfif'
import Forza from './assets/forza.jpg'
import Microsoft from './assets/microsoft.jpg'
import Truck from './assets/truck.jpg'

import { BsFillCircleFill } from 'react-icons/bs'


export default function App() {

  return (
    <div className="flex flex-col items-center mt-32 " >
      <strong className=" text-left  mt-10 max-w-4xl uppercase text-sky-500 ">
        jogos com o marcador "Cooperativo on-line"
        <span className='text-white lowercase'
        > Devido ao seu tempo de jogo em outros jogos com o marcador "Cooperativo On-line"
        </span>
      </strong>


      <div className="flex items-center gap-5 mt-4 cursor-pointer">
        <div className='flex flex-col'>
          <img src={Devour} width="400" />
          <p className='flex items-start'>Devour</p>
          <span> R$139,90</span>
        </div>

        <div className='flex flex-col'>
          <img src={Monster} width="348" />
          <p>Monster Hunter Rise</p>
          <span> R$139,90</span>
        </div>
      </div>

      <div className='text-sm mt-20 mb-4'>
        <strong className="text-gray-200">
          <span className='text-sky-500' >JOGOS COM O MARCADOR "REALÍSTICO" </span>
          Devido ao seu tempo de jogo em outros jogos com o marcador "Realístico"
        </strong>
      </div>

      <div className='grid grid-cols-4 gap-3 cursor-pointer'>
        <div>
          <img src={Microsoft} width="230" />
          <p>Microsoft Flight Simulator 40th...</p>
          <span> R$249,95</span>
        </div>
        <div>
          <div>
            <img src={Fifa} width="230" />
            <div className=" flex ml-1 bg-black absolute bottom-15 top-[600px] 
            items-center gap-2 w-[100px] pl-1">
              <BsFillCircleFill color='red' />
              <span className='uppercase'>Ao vivo</span>
            </div>
          </div>

          <p className='uppercase'>EA esports™ Fifa 23</p>

          <div className='bg-slate-900' >
            <span className='bg-green-500'>
              -60%
              <span className='line-through text-md bg-slate-900  pl-2'>
                R$ 299
              </span>
              <span className='bg-slate-900 text-md text-green-500 pl-2'>R$ 119,60</span>
            </span>

          </div>
        </div>
        <div>
          <img src={Forza} width="230" />
          <p>Forza Horizon 5</p>
          <span> R$249,00</span>
        </div>

        <div>
          <img src={Truck} width="230" />
          <p>American Truck Simulator</p>
          <span> R$49,99</span>
        </div>
      </div>
    </div >
  )
}


