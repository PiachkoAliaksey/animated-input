export const renderContent = () => {
    return (
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class='field-custom-input'>
     <div class='field-bubbles-value-range'>
         <span class='field-show-value-range'></span>
         <span class='field-show-value-range second-span'></span>
         <span class='field-show-value-range third-span'></span>
         <span class='field-show-value-range fourth-span'></span>
     </div>
      <input class='animated-input' type='range' min='0' max='100' value="0" steps="10"  />
    </div>
  `
    )
  }