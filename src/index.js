import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay' ;
import Spinner from './Spinner' ;
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
//const App = ()=>{
  //  return (<h1>hi there</h1>);
//};
class App extends React.Component {
      state={lat:null , errorMessage:''};
componentDidMount() {
    // ye technically better place hai constructor se issliye ya rakha 
    window.navigator.geolocation.getCurrentPosition(
        (position) =>this.setState({lat : position.coords.latitude}) ,
        (err)=>this.setState({errorMessage:err.message})
                                                    );
                    }
render() {    
        if(this.state.errorMessage&&!this.state.lat)
        {
            return  <div> error : {this.state.errorMessage}</div> ;
        }
        if(!this.state.errorMessage&&this.state.lat)
        {
            return <SeasonDisplay  lat={this.state.lat}/> ;
        }  
        if(!this.state.errorMessage&&!this.state.lat)
        {
            return <Spinner message="please accept location request
            
            "/> ;
        }
   
   
   
    }

}
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
