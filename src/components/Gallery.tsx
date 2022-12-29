
interface GalleryProps {
  srcImage: string;
  Name: string;
  Price: number;
}


export default function Gallery({ srcImage, Name, Price }: GalleryProps) {
  return (
    <div>
      <img src={srcImage} width="230" />
      <p>{Name}</p>
      <span>{`R$ ${Price}`}</span>
    </div>
  )
}

//microsoft
//Microsoft Flight Simulator 40th...
//R$249,95
