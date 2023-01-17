import DataImage from "./DataImage"
import { BiArrowToLeft,BiArrowToRight } from "react-icons/bi";
import { useState } from "react";

const ImageSlider = () => {
   const [current, setCurrent] = useState(0)
   const length = DataImage.length

   const prev=()=>{
    if(current===0)
    setCurrent(length-1)
    else{
    setCurrent(current-1)
    }
   }

//    current===0? setCurrent(length-1) : setCurrent(current-1)

   const next=()=>{
    if(current===length-1)
    setCurrent(0)
    else{
    setCurrent(current+1)
    }
   }
//    current===length-1? setCurrent(0) : setCurrent(current+1)

  return (
    <section className="slider">
        <BiArrowToLeft className="arrowleft" onClick={prev}/>
        <BiArrowToRight className="arrowright" onClick={next}/>
        {DataImage.map((data,index)=>{
            return (
                <div className={index===current? "slide active":"slide"} key={index}>
                    {index === current && (
                        <div>
                        <img src={data.image} alt={data.title} className="image"/>
                        <p>{data.title}</p>
                    </div>
                    )}
                </div>
            )
        }
        )}
    </section>
  )
}

export default ImageSlider