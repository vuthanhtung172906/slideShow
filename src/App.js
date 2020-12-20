import React,{useState, useEffect} from "react"
import Card from "./Component/Card";
import Nav from "./Component/Nav";
function App(){
  const [image, setImg] = useState({
    dataImage: [

    ]
  })
  const myRef = React.createRef(); 
  const getData = async()=>{
    const res = await fetch("data.json");
    const data = await res.json(); 
    setImg({
      dataImage: data
    })
  };
  useEffect(()=>{
    console.log("Component did mount")
    getData();
  },[]);
  const data = image.dataImage;
  const clickPrev = ()=>{
    const slide = myRef.current;
    slide.scrollLeft -= slide.offsetWidth;
    if(slide.scrollLeft <= 0){
      slide.scrollLeft = slide.scrollWidth;
    }
  }
  const clickNext = ()=>{
    const slide = myRef.current;
    slide.scrollLeft += slide.offsetWidth;
    if(slide.scrollLeft >= (slide.scrollWidth - slide.offsetWidth )){
      slide.scrollLeft = 0;
    }  }
  return(
    <div className="wrapper">
        <div className="app" ref = {myRef}>
          <Card data = {data}/>
        </div>
        <Nav clickPrev={clickPrev} clickNext={clickNext}/>
    </div>
  )
}

export default App;
