import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { FiDownload } from 'react-icons/fi';
import { saveAsPng, saveAsJpeg } from 'save-html-as-image';
import './App.css'
import Options from './components/Options'
import icon from '../src/assets/icon.png'



function App() {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const [image, setImage] = useState('https://images.unsplash.com/photo-1657926053558-888db78e68ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')
  const [options, setOptions] = useState([
    {
      name: 'Brightness',
      property: 'brightness',
      value: 100,
      range: {
        min: 0,
        max: 200
      },
      unit: "%"

    },
    {
      name: 'Saturation',
      property: 'saturate',
      value: 100,
      range: {
        min: 0,
        max: 100
      },
      unit: "%"

    },
    {
      name: 'Blur',
      property: 'blur',
      value: 0,
      range: {
        min: 0,
        max: 20
      },
      unit: "px"

    },
    {
      name: 'Grey scale',
      property: 'grayscale',
      value: 0,
      range: {
        min: 0,
        max: 200
      },
      unit: "%"

    },
    {
      name: 'Contrasat',
      property: 'contrast',
      value: 100,
      range: {
        min: 0,
        max: 200
      },
      unit: "%"

    },
    {
      name: 'Hue-rotate',
      property: 'hue-rotate',
      value: 0,
      range: {
        min: 0,
        max: 365,
      },
      unit: 'deg'

    },
    {
      name: 'Sepia',
      property: 'sepia',
      value: 0,
      range: {
        min: 0,
        max: 100,
      },
      unit: '%'

    },

  ])

  const clickedOption = (index) => {

    setSelectedOptionIndex(index)

  }
 
  
 const downloadImg=(event)=>{
  const node = document.getElementById('updatedImage');
  saveAsPng(node);
  
  console.log("hello world");
  // console.log("hello")
  }
  const changeImage = (event) => {

    setImage(URL.createObjectURL(event.target.files[0]))
    // console.log(URL.createObjectURL(event.target.files[0]));

  }
  const changeProperty = (event) => {
    // setOptions(previousOptions=>{
    // return  previousOptions.map((option,index)=>{
    //   if(index==selectedOptionIndex){
    //     return {...option,value:eventtarget.value}
    //   }else{
    //     return option
    //   }
    //   })
    // })

    const getOption = options.map((item, index) => {
      if (index == selectedOptionIndex) {
        return { ...item, value: event.target.value }
      } else {
        return item;
      }

    })
    setOptions(getOption)

  }
  const myStyle = () => {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    })

    return { filter: filters.join(' ') }
  }


  return (
    <div className="App">
      <div className='navbar'>
        <img src={icon}></img>
        <p> ANKAN</p>
       
      </div>
      <div className='titleWord'>
        <p>Furnish your<span>Moments</span></p>
      </div>
      <div className='image'>
        <img style={myStyle()} id='updatedImage' src={image}></img>
      
        <div className='slider'>
          <div className='fileInput'>
            <span>Upload Image</span>
            <input width="48" onChange={changeImage} accept='.jpg,.png' type='file'></input>
          </div>

          <input type="range" className='slideChange' onChange={changeProperty} value={options[selectedOptionIndex].value} min={options[selectedOptionIndex].range.min} max={options[selectedOptionIndex].range.max}></input>
          <button className='download' onClick={downloadImg}>  <FiDownload className='downloadImg'/>  </button>
        </div>

      </div>
      <div className='optionPannel'>
        {options.map((item, index) => {
          return (<Options id={index}
            key={item.name}
            name={item.name}
            handleClicked={() => clickedOption(index)}
            active={index === selectedOptionIndex}


          />)

        })}
       
      </div>

    </div>
  )

}



export default App
