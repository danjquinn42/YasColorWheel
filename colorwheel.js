document.addEventListener("DOMContentLoaded", () => {
  const wheelTags = document.getElementsByTagName("colorwheel");
  for (i = 0; i < wheelTags.length; ++i) {
    const image = wheelTags[i].getAttribute("src");
    const defaultColor = wheelTags[i].getAttribute("defaultColor");
    const scale = wheelTags[i].style.width;
    const markerList = wheelTags[i].innerHTML;
    const wheel = new ColorWheel(image, scale, defaultColor)
    wheelTags[i].innerHTML = wheel.render();
  };
  // debugger
});

// TODO getCurrentColor()
//  returns {HEX: "#193843",
// HSL: "251,50,50",
// RGB: "143,143,413",
// }
// TODO setColor(colorFormat, num or string [, num, num])
// TODO slider for lightness
// TODO set defaults if user does not pass in width or default color

class ColorWheel {
  constructor(image, scale, defaultColor) {
    this.image = image;
    this.scale = scale;
    this.color = this.parseColor(defaultColor);
  }

  parseColor(color){
    const colorValues =  color.match(/(\d)\w+/g).map((number) => {
      return parseInt(number);
    });
    return { hue: colorValues[0],
      saturation: colorValues[1],
      lightness: colorValues[2],
    };
  }

  formatColorValues(color) {
    return `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`;
  }
  //   toDegrees(angle) {
  //     return angle * (180 / Math.PI);
  //   }
  //
  //   distanceFromOrigin(x, y) {
  //     return Math.sqrt(x*x + y*y);
  //   }

  //   hueToX(hue, saturation) {
  //     saturation = saturation / 100;
  //     hue = hue * Math.PI / 180;
  //     return ((Math.cos(hue) * saturation) + 1 ) / 2 * 100;
  //   }
  //   hueToY(hue, saturation) {
  //     saturation = saturation / 100;
  //     hue = hue * Math.PI / 180;
  //     return ((Math.sin(hue) * saturation) + 1 ) / 2 * -100 + 100;
  //   }
  //   XYtoHueAndSaturation(x, y) {
  //     const hypotenuse =  this.distanceFromOrigin(x, y);
  //     const angle = this.toDegrees(Math.acos( x / hypotenuse));
  //     const saturation = Math.min( hypotenuse * 100, 100 );
  //     const hue = ( 0 > y ) ? angle : -(angle - 180) + 180;
  //     return { hue: hue, saturation: saturation };
  //   }

  marker(){
    return(`
      <div style="
          width: ${this.markerScale()};
          padding-top: ${this.markerScale()};
          background: ${this.formatColorValues(this.color)};
          border: 2px solid black;
          position: absolute;
          ${this.unselectableCircle()}"
        draggable="false";>
      </div>
      `);
  }

  markerScale(){
    const scaleType = this.scale.slice(-1)
    if (scaleType === "x") {
      return `${parseInt(this.scale.slice(0, -2))/12}px`;
    } else if (scaleType === "%"){
      return '6%';
    }
    throw "Width of Wheel must be defined in pixels or percentage"
  }

  unselectableCircle(){
    return `border-radius: 50%;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;`
  }

  render(){
    return (`
      <div
        style="
          position: relative;
          border-radius: 50%;
          width: ${this.scale};
          padding-top ${this.scale};">
        <img
          src="${this.image}"
          style="
            position: absolute;
            width: 100%;
            height: auto;
            ${this.unselectableCircle()}"
          draggable="false">
        </img>
        ${this.marker()}
      </div>
    `);
  }
}

// import { isEmpty } from 'lodash';
//
//
//
//   hueToX(hue, saturation) {
//     saturation = saturation / 100;
//     hue = hue * Math.PI / 180;
//     return ((Math.cos(hue) * saturation) + 1 ) / 2 * 100;
//   }
//
//   hueToY(hue, saturation) {
//     saturation = saturation / 100;
//     hue = hue * Math.PI / 180;
//     return ((Math.sin(hue) * saturation) + 1 ) / 2 * -100 + 100;
//   }
//
//   XYtoHueAndSaturation(x, y) {
//     const hypotenuse =  this.distanceFromOrigin(x, y);
//     const angle = this.toDegrees(Math.acos( x / hypotenuse));
//     const saturation = Math.min( hypotenuse * 100, 100 );
//     const hue = ( 0 > y ) ? angle : -(angle - 180) + 180;
//     return { hue: hue, saturation: saturation };
//   }
//
//   toDegrees(angle) {
//     return angle * (180 / Math.PI);
//   }
//
//   distanceFromOrigin(x, y) {
//     return Math.sqrt(x*x + y*y);
//   }
//
//
//   getCoordinates(color, event) {
//       const diameter = event.target.offsetParent.offsetParent.clientWidth;
//       let markerLeft = event.target.offsetParent.offsetLeft;
//       let markerTop = event.target.offsetParent.offsetTop;
//       const originOffset = -0.5;
//       const scaleFactor = 2;
//       markerLeft = (( markerLeft / diameter ) + originOffset) * scaleFactor;
//       markerTop = (( markerTop / diameter ) + originOffset) * scaleFactor;
//       return [markerLeft, markerTop];
//   }
//
//
//   updateMousePosition(event){
//     const radius = event.target.parentElement.clientHeight / 2;
//     const originX = event.target.parentElement.offsetLeft + radius;
//     const originY = event.target.parentElement.offsetTop + radius;
//     let mouseLeft = (event.pageX - originX) / radius;
//     let mouseTop = (event.pageY - originY) / radius;
//     this.setState({mouseCoordinates: [mouseLeft, mouseTop]});
//   }
//
//   tracking(color, value) {
//     return (event) => {
//       event.stopPropagation();
//       event.preventDefault();
//       color.tracking = value;
//       if (value) {
//         this.selectedClass(color);
//       }
//     };
//   }
//
//
//   followMouse(color, colorString){
//     return (event) => {
//       event.preventDefault();
//       this.updateMousePosition(event);
//       if ( this.state.hueLock ) {
//         this.updateAllHuesFromWheel(color);
//       } else {
//         this.updateHueFromWheel(`${colorString}hue`, `${colorString}saturation`);
//       }
//     };
//   }
//
//   dragImage() {
//     return (event) =>{
//       const image = document.createElement("img");
//       image.setAttribute('style','position: absolute; display: block; top: 0; left: 0; width: 1px; height: 1px;' );
//       document.body.appendChild(image);
//       event.dataTransfer.setDragImage(image, 0, 0);
//     };
//   }
//
//   updateHueFromWheel(hue, saturation){
//     let x = this.state.mouseCoordinates[0];
//     let y = this.state.mouseCoordinates[1];
//     let newHue = this.XYtoHueAndSaturation(x, y).hue;
//     let newSaturation = this.XYtoHueAndSaturation(x, y).saturation;
//     newHue = Math.round(newHue);
//     newSaturation = Math.round(newSaturation);
//     this.setState({ [hue]: newHue , [saturation]: newSaturation});
//   }
//
//   updateAllHuesFromWheel(color) {
//     let x = this.state.mouseCoordinates[0];
//     let y = this.state.mouseCoordinates[1];
//     const newHue = this.XYtoHueAndSaturation(x, y).hue;
//     let hueChange = newHue - color.hue;
//     const hue0 = Math.round(this.state.color0hue + hueChange) % 360;
//     const hue1 = Math.round(this.state.color1hue + hueChange) % 360;
//     const hue2 = Math.round(this.state.color2hue + hueChange) % 360;
//     const hue3 = Math.round(this.state.color3hue + hueChange) % 360;
//     const hue4 = Math.round(this.state.color4hue + hueChange) % 360;
//
//     this.setState({
//       color0hue: hue0,
//       color1hue: hue1,
//       color2hue: hue2,
//       color3hue: hue3,
//       color4hue: hue4,
//     });
//   }
//
//
//   marker(color, colorString) {
//       return (
//         <div
//           className={`marker ${this.selectedClass(color)} ${this.isDragging}`}
//           draggable="true"
//           onMouseDown={ this.selectColor(color.ord) }
//           onDragStart={this.dragImage().bind(this)}
//           onDrag={this.followMouse(color, colorString).bind(this)}
//           style={{left: `${this.hueToX(color.hue, color.saturation)}%`,
//             top: `${this.hueToY(color.hue, color.saturation)}%`}}>
//           <div style={ this.HSLBackground(color) }>  </div>
//         </div>
//       );
//   }
//
//   themeBoxes() {
//       const oneBox = (color) => {
//         return (
//           <li
//             className={this.selectedClass(color)}
//             draggable="false"
//             aria-haspopup="true"
//             data-index={0}
//             onMouseDown={this.selectColor(color.ord)}
//             style={{
//               background:
//               `hsl(${color.hue},
//                 ${color.saturation}%,
//                 ${color.lightness}%)` }} >
//           </li>
//         );
//       };
//
//       return (
//         <ul className="themeBox">
//           {oneBox(this.color0())}
//           {oneBox(this.color1())}
//           {oneBox(this.color2())}
//           {oneBox(this.color3())}
//           {oneBox(this.color4())}
//         </ul>
//       );
//   }
//
//   saturationGradient(color){
//     if (this.isSelected(color)){
//     return{
//         backgroundImage: `linear-gradient(
//           to right,
//           hsl(${color.hue}, 0%, ${color.lightness}%),
//           hsl(${color.hue}, 25%, ${color.lightness}%),
//           hsl(${color.hue}, 50%, ${color.lightness}%),
//           hsl(${color.hue}, 75%, ${color.lightness}%),
//           hsl(${color.hue}, 100%, ${color.lightness}%))`
//       };
//     }
//   }
//
//   lightnessGradient(color){
//     if (this.isSelected(color)){
//       return{
//         backgroundImage: `linear-gradient(
//           to right,
//           hsl(${color.hue}, ${color.saturation}%, 0%),
//           hsl(${color.hue}, ${color.saturation}%, 5%),
//           hsl(${color.hue}, ${color.saturation}%, 10%),
//           hsl(${color.hue}, ${color.saturation}%, 15%),
//           hsl(${color.hue}, ${color.saturation}%, 20%),
//           hsl(${color.hue}, ${color.saturation}%, 30%),
//           hsl(${color.hue}, ${color.saturation}%, 40%),
//           hsl(${color.hue}, ${color.saturation}%, 60%),
//           hsl(${color.hue}, ${color.saturation}%, 80%),
//           hsl(${color.hue}, ${color.saturation}%, 100%))`
//       };
//     }
//   }
//
//   firstOrLast(i){
//     if (i === 0) {
//       return "first-slider";
//     } else if (i === 4) {
//       return "last-slider";
//     }
//   }
//
//   selectColor(colorId) {
//     return (event) => { this.setState({ selected: colorId }); };
//   }
//
//   isSelected(color) {
//     return (color.ord === this.state.selected);
//   }
//
//   selectedClass(color) {
//     if (this.isSelected(color)) {
//       return "selected";
//     } else {
//       return "not-selected";
//     }
//   }
//
//
//   updateHue(hue){
//     return (event) => {
//       this.setState({ [hue]: event.target.value });
//     };
//   }
//
//   updateSaturation(saturation){
//     return (event) => {
//       this.setState({ [saturation]: event.target.value });
//     };
//
//   }
//
//   updateLightness(lightness){
//     return (event) => {
//       this.setState({ [lightness]: event.target.value });
//     };
//   }
//
//
//   sliders(color, colorString, pos){
//     return(
//       <li className={`slider hsl ${this.selectedClass(color)}`} data-mode="hsl">
//         <input
//           type="range"
//           className={`hue ${this.firstOrLast(pos)}  ${this.selectedClass(color)}`}
//           onChange={this.updateHue(`${colorString}hue`)}
//           onMouseDown={this.selectColor(color.ord)}
//           id="hue"
//           min="0"
//           max="360"
//           value={color.hue}>
//         </input>
//         <input
//           type="range"
//           className={`saturation ${this.firstOrLast(pos)}  ${this.selectedClass(color)}`}
//           onChange={this.updateSaturation(`${colorString}saturation`)}
//           onMouseDown={this.selectColor(color.ord)}
//           style={this.saturationGradient(color)}
//           id="saturation"
//           min="0"
//           max="100"
//           value={color.saturation}></input>
//         <input
//           type="range"
//           className={`lightness ${this.firstOrLast(pos)}  ${this.selectedClass(color)}`}
//           onChange={this.updateLightness(`${colorString}lightness`)}
//           onMouseDown={this.selectColor(color.ord)}
//           style={this.lightnessGradient(color)}
//           id="lightness"
//           min="0"
//           max="100"
//           value={color.lightness}></input>
//       </li>
//     );
//   }
//
//   sliderList() {
//       return (
//         <ol id="slider-list" className="group">
//           {this.sliders(this.color0(), 'color0', 0)}
//           {this.sliders(this.color1(), 'color1', 1)}
//           {this.sliders(this.color2(), 'color2', 2)}
//           {this.sliders(this.color3(), 'color3', 3)}
//           {this.sliders(this.color4(), 'color4', 4)}
//         </ol>
//       );
//   }
//
//   valuesBoxes() {
//     return (
//       <ol id='values-boxes' className='group'>
//         <li className='values-box'>{this.values(this.color0())}</li>
//         <li className='values-box'>{this.values(this.color1())}</li>
//         <li className='values-box'>{this.values(this.color2())}</li>
//         <li className='values-box'>{this.values(this.color3())}</li>
//         <li className='values-box'>{this.values(this.color4())}</li>
//       </ol>
//     );
//   }
//
//   values(color) {
//     return(
//           <div className={`value-item ${this.selectedClass(color)}`}
//             onMouseDown={this.selectColor(color.ord)}>
//             <h5 className="value-type">HSL</h5>
//             <ol className="color-format group">
//               <li>
//                 {color.hue}
//               </li>
//               <li>
//                 {color.saturation}
//               </li>
//               <li>
//                 {color.lightness}
//               </li>
//             </ol>
//           </div>
//     );
//   }
//
//   updateTheme(){
//     return () => {
//       this.setState(
//         { theme: {
//           color_swatches: [
//             this.color0(),
//             this.color1(),
//             this.color2(),
//             this.color3(),
//             this.color4()]
//         }}
//       );
//     };
//   }
//
//
//   saveButton(){
//     if (this.props.user){
//       return(
//         <form onSubmit={this.handleSubmit}>
//           <input type="submit" className="save-button" value="Create Theme"></input>
//         </form>
//       );
//     } else {
//       return(
//         <form onClick={this.updateTheme() }>
//           <input type="submit"
//
//             onClick={this.props.showSignIn}
//             className="save-button"
//             value="Log In to Create Theme"></input>
//         </form>
//       );
//     }
//   }
//
//   toggleHueLock() {
//     return () => {
//       return this.state.hueLock ?
//       this.setState({ hueLock: false }) :
//       this.setState({ hueLock: true });
//     };
//   }
//
//
//   hueLockButton() {
//     if ( this.state.hueLock ){
//       return (
//         <button
//           className="hue-lock color-rule"
//           onClick={this.toggleHueLock().bind(this)}>
//           Unlock Color Relationship
//         </button>
//       );
//     } else {
//       return (
//         <button
//           className="hue-lock color-rule"
//           onClick={this.toggleHueLock().bind(this)}>
//           &nbsp;Lock Color Relationship&nbsp;
//         </button>
//       );
//     }
//
//   }
//
//
//   render() {
//     let { theme, user, loading } = this.props;
//
//     if (loading || !theme.color_swatches) {
//       return <h1>loading</h1>;
//     }
//
//     return(
//       <section id="content">
//
//         <div className="editor"
//           draggable="false">
//           {this.saveButton()}
//           <div className="harmonyrule">
//             { this.hueLockButton() }
//           </div>
//
//           <div id="colorwheel"
//               draggable="false">
//
//             <img alt="HSL Color Wheel"
//               onMouseMove={(event) => {this.updateMousePosition(event);}}
//               id="hsl-wheel"
//               src={window.wheel}
//               draggable="false" />
//
//             {this.marker(this.color0(), "color0")}
//             {this.marker(this.color1(), "color1")}
//             {this.marker(this.color2(), "color2")}
//             {this.marker(this.color3(), "color3")}
//             {this.marker(this.color4(), "color4")}
//
//           </div>
//         </div>
//
//         <div className="theme">
//
//           { this.themeBoxes() }
//
//         </div>
//
//           { this.sliderList() }
//
//           { this.valuesBoxes() }
//       </section>
//     );
//   }
// }
//
// export default Create;
