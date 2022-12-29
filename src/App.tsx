import Devour from './assets/Devour.jpg'
import Monster from './assets/Monster-Hunter.jpg'
import Fifa from './assets/fifa-23.jfif'
import Forza from './assets/forza.jpg'
import Microsoft from './assets/microsoft.jpg'
import Truck from './assets/truck.jpg'
import Gallery from './components/Gallery'
import Promotion from './components/Promotion'



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
        <Gallery srcImage={Microsoft} Price={249.99} Name={'Microsoft Simulator 40th...'} />

        <Promotion srcImage={Fifa} Price={299} Name={'EA SPORTS™ FIFA 23'} Percentage={60} />

        <Gallery srcImage={Forza} Name={'Forza Horizon 5'} Price={249.99} />

        <Gallery srcImage={Truck} Name={'American Truck Simulator'}
          Price={49.99} />
      </div>
    </div >
  )
}


