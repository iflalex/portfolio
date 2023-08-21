interface props {
  item:string,
  index:number,
  sizeContainer:number,
}

export default function ItemProjects(props:props) {
  const item:string = props.item;
  const index:number = props.index;
  const sizeContainer:number = props.sizeContainer;
  return (
    <div key={index} className={`w-[${sizeContainer}px] h-[${sizeContainer}px]`}>
      <img src={item} alt="picture project" className='w-full h-full object-cover'/>
    </div>
  )
}
