// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = 'small lightblue box'
const mediumBox = 'medium pink box'
const largeBox = 'large orange box'

// Extra Credit 1
// const Box = props => {
//   return (
//     <div
//       className={props.className}
//       style={{fontStyle: 'italic', ...props.style}}
//     >
//       {props.children}
//     </div>
//   )
// }

// function App() {
//   return (
//     <div className="box">
//       <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
//         {smallBox}
//       </Box>
//       <Box className="box--medium" style={{backgroundColor: 'pink'}}>
//         {mediumBox}
//       </Box>
//       <Box className="box--large" style={{backgroundColor: 'orange'}}>
//         {largeBox}
//       </Box>
//     </div>
//   )
// }

// extra credit 2
const Box = props => {
  const boxSize = () => {
    switch (props.size) {
      case 'small':
        return 'box box--small'
      case 'medium':
        return 'box box--medium'
      case 'large':
        return 'box box--large'
      default:
        return 'box box--small'
    }
  }

  return (
    <div className={boxSize()} style={{fontStyle: 'italic', ...props.style}}>
      {props.children}
    </div>
  )
}

function App() {
  return (
    <div className="box">
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        {smallBox}
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        {mediumBox}
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        {largeBox}
      </Box>
    </div>
  )
}

// function App() {
//   return (
//     <div className="box">
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }

export default App
