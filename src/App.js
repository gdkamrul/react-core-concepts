import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Rajjak','Moushomi','Alamgir','Shabana','Jasim','sakib','Bapparaj']
  const products =[
    {name:'Photoshop',price :'$25.99'},
    {name:'Illustrator',price :'$30.99'},
    {name:'PDF Reader',price :'$3.99'},
    {name:'Acrobet Reader',price :'$30.99'},
    {price :'$35.99'}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <p>I m React Developer</p>
        <Counter></Counter>
        <Users></Users>
          <ul>
            {
              nayoks.map(nayok => <li>{nayok} </li>)
            }
            <br/>
            {
              products.map(products=> <li>{products.name} </li>)
            }
            {
              products.map(products=> <li>{products.price}</li>)
            }
          </ul>
          {
            products.map(pd=> <Product products={pd}></Product>)
          }
              
     
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0)
  const handleIncrease = () => setCount(count + 1);
  
  return(
    <div>
      <h1>Count : {count}  </h1>
      <button onMouseMove= {()=> setCount (count-1)}> Decrease</button>
      <button onMouseMove={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [users , setUsers] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}
function Product (props){
  const productStyle={
    border:'1px solid gray',
    borderRadious:'5px',
    backgroundColor:'lightgray',
    height: '200px',
    width: '300px',
    float:'left',
    margin : '10px',
    color:'black'

  }
  const { name , price } = props.products;
  return (
    <div style = {productStyle}>
      <h2> {name}</h2>
      <h1>{price}</h1>
      <button>Buy Now</button>
      <br/>
    </div>
  )
}
function Person (props){
  return (
    <div style = {{border: '2px solid yellow',width : ' 400px'}}>
      <h3>My Name is : {props.nayok} </h3>
      <p>My Heroin is :{props.job} </p>
    </div>
  )
}

export default App;
