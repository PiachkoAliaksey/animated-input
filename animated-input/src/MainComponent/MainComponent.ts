export const mainComponent = () => {
    const slideValue = document.querySelector(".field-show-value-range") as HTMLSpanElement;
    const slideValueSecond = document.querySelector(".second-span") as HTMLSpanElement;
    const slideValueThird = document.querySelector(".third-span") as HTMLSpanElement;
    const slideValueFourth = document.querySelector(".fourth-span") as HTMLSpanElement;
    
    const inputRangeSlider = document.querySelector(".animated-input") as HTMLInputElement;
    const fieldBubblesValueRange = document.querySelector(".field-bubbles-value-range") as HTMLDivElement;
    let style = document.createElement("style") as HTMLElement;
    let styleColor = document.createElement("style") as HTMLElement;
    let styleThumbAfter = document.createElement("style") as HTMLElement;
    document.head.appendChild(style);
    document.head.appendChild(styleColor);
    document.head.appendChild(styleThumbAfter);
    let currentColor = '';
    let flag = false;
  
    inputRangeSlider?.addEventListener('input', () => {
      let value = inputRangeSlider.value;
      fieldBubblesValueRange!.style.left = (+value + 1) + "%";
      const percentage = (+value - +inputRangeSlider.min) / (+inputRangeSlider.max - +inputRangeSlider.min) * 100;
      
      slideValue.classList.add("show-value");
      slideValue.style.animationIterationCount = 'infinite';
      slideValue.textContent = inputRangeSlider.value
      setTimeout(() => {
        slideValueSecond.textContent = inputRangeSlider.value
        slideValueSecond.classList.add("show-value");
        slideValueSecond.style.animationIterationCount = 'infinite';
      }, 100)
      setTimeout(() => {
        slideValueThird.textContent = inputRangeSlider.value
        slideValueThird.classList.add("show-value");
        slideValueThird.style.animationIterationCount = 'infinite';
      }, 200)
  
  
      inputRangeSlider.addEventListener('mousedown', async () => {
        flag = true;
  
        
        [slideValue,slideValueSecond,slideValueThird].forEach(item=>{
          item.classList.remove("show-value-static");
          item.textContent = '';
        })
        slideValueFourth.classList.remove("show-range-value");
        slideValueFourth.textContent = '';
  
        slideValue.classList.add("show-value-static");
        slideValue.style.animationIterationCount = '3';
        setTimeout(() => {
          slideValueSecond.classList.add("show-value-static");
          slideValueSecond.style.animationIterationCount = '3';
        }, 100)
        setTimeout(() => {
          slideValueThird.classList.add("show-value-static");
          slideValueThird.style.animationIterationCount = '3';
        }, 200)
      })
  
      inputRangeSlider.addEventListener('mousemove', async () => {
        if (flag) {
  
          [slideValue,slideValueSecond,slideValueThird].forEach(item=>{
            item.classList.remove("show-value-static");
          })
  
          slideValue.classList.add("show-value");
          slideValue.style.animationIterationCount = 'infinite';
          slideValue.textContent = inputRangeSlider.value
          setTimeout(() => {
            slideValueSecond.textContent = inputRangeSlider.value
            slideValueSecond.classList.add("show-value");
            slideValueSecond.style.animationIterationCount = 'infinite';
          }, 100)
          setTimeout(() => {
            slideValueThird.textContent = inputRangeSlider.value
            slideValueThird.classList.add("show-value");
            slideValueThird.style.animationIterationCount = 'infinite';
          }, 200)
        }
      })
  
      inputRangeSlider.addEventListener('mouseup', async () => {
        flag = false;
  
        slideValue.textContent = '';
  
        slideValue.classList.remove("show-value");
        slideValueSecond.classList.remove("show-value");
        slideValueThird.classList.remove("show-value");
  
        slideValue.classList.add("show-value-static");
        slideValue.style.animationIterationCount = '3';
        slideValueFourth.classList.add("show-range-value");
        slideValueFourth.textContent = inputRangeSlider.value === inputRangeSlider.max ? ('max') : (inputRangeSlider.value === inputRangeSlider.min ? ('min') : (inputRangeSlider.value));
        slideValueFourth.style.animationIterationCount = '1';
        setTimeout(() => {
          slideValueSecond.textContent = '';
          slideValueSecond.classList.add("show-value-static");
          slideValueSecond.style.animationIterationCount = '3';
        }, 100)
        setTimeout(() => {
          slideValueThird.textContent = '';
          slideValueThird.classList.add("show-value-static");
          slideValueThird.style.animationIterationCount = '3';
        }, 200)
        setTimeout(() => {
          style.innerHTML= `.animated-input::-webkit-slider-thumb {transform: scale(2);}`
          // styleThumbAfter.innerHTML= `.animated-input::-webkit-slider-thumb:after {content: ${inputRangeSlider.value}, transform: scale(2);}`
        setTimeout(()=> style.innerHTML= `.animated-input::-webkit-slider-thumb {transform: scale(1);}`,2000)
        }, 3250)
      })
  
      if (value === inputRangeSlider.max) {
        currentColor = 'white';
        [slideValue,slideValueSecond,slideValueThird,slideValueFourth].forEach(item=>{
          item.style.background='white';
          item.style.color='black';
        })
        inputRangeSlider.style.background = `linear-gradient(90deg, white ${percentage}%, transparent ${percentage}%)`;
        styleColor.innerHTML= '.animated-input::-webkit-slider-thumb {background-color: white;}';
        
      } else if (value === inputRangeSlider.min || value === '1') {
        currentColor = 'blueviolet';
        [slideValue,slideValueSecond,slideValueThird,slideValueFourth].forEach(item=>{
          item.style.background='blueviolet';
          item.style.color='white';
        })
        inputRangeSlider.style.background = `linear-gradient(90deg, #8A2BE2 ${percentage}%, transparent ${percentage}%)`;
        styleColor.innerHTML= '.animated-input::-webkit-slider-thumb {background-color: blueviolet;}';
      } else {
        currentColor === 'blueviolet' ? (inputRangeSlider.style.background = `linear-gradient(90deg, #8A2BE2 ${percentage}%, transparent ${percentage}%)`) : (inputRangeSlider.style.background = `linear-gradient(90deg, white ${percentage}%, transparent ${percentage}%)`);
        currentColor === 'blueviolet'? (styleColor.innerHTML= '.animated-input::-webkit-slider-thumb {background-color: blueviolet;}'):(styleColor.innerHTML= '.animated-input::-webkit-slider-thumb {background-color: white;}')
      }
  
    });
  }