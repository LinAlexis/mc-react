import './App.css';
import React from 'react';
import Box  from '@material-ui/core/Box';


// import BellPepper from './icons/bell-pepper.svg';
// import Burito from './icons/burrito.svg';
// import Birthday from './icons/birthday-cake.svg';
// import Burger from './icons/burger.svg';
// import Cheese from './icons/cheese-burger.svg';
// import ChickenLeg from './icons/chicken-leg.svg';
// import FrenchFries from './icons/french-fries.svg';
// import HotDog from './icons/hot-dog.svg';

function ProductRow({menu, img}){
  const urlImg = './icons/'

  return <td>
    <table className="Product">
        <tr><img src={urlImg + img} alt=""></img></tr>
        <tr>{menu.name}</tr>
        <tr>{menu.price}€</tr>
    </table>
  </td>
}

function MenuRow({menu, img}){
  const urlImg = './icons/'

  return <td>
    <table className="Menu">
        <tr><img src={urlImg + img} alt=""></img></tr>
        <tr>{menu.name}</tr>
        {/* <tr>{menu.price}€</tr> */}
    </table>
  </td>
}

function Menu({menu}) {
  const rows = []

  menu.forEach(product =>{
    if(product.cat === "menu"){
      rows.push(<MenuRow key={product.name} menu={product} img={product.icon}/>)
    }
  })

  return <table className="TableMenu">
    <tbody className="TabMenu">{rows}</tbody>
  </table>
}

function Product({menu}) {
  const rows = []

  menu.forEach(product =>{
    if(product.cat === "product"){
      rows.push(<ProductRow key={product.name} menu={product} img={product.icon}/>)
    }
    
  })

  return <table className="TableProduct">
    <tbody className="TableProduct">{rows}</tbody>
  </table>
}

class App extends React.Component {

  render() {
    const {menu} = this.props

    return(
      <div className="App-container">
        <Box width="75%">
          <Box className="Title"fontWeight="fontWeightBold" fontSize={50} m={0}>
            Hey,
            <Box fontWeight="fontSize" m={0} >
              what's up?
            </Box>
          </Box>

          <div className="Menu-list">
            <Menu menu={menu}/>
          </div>

          <Box className="Title"fontWeight="fontWeightBold" fontSize={50} m={1}>
            Popular
          </Box>

          <div className="Product-list">
            <Product menu={menu}/>
          </div>
        </Box>
        
        <Box width="25%">
          <Box className="Title" fontWeight="fontWeightBold" fontSize={25} m={1}>
            My order
          </Box>
          
        </Box>
      </div>
    )
  }
}

export default App;
