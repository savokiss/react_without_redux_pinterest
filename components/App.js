import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.jsx';
import ImgsContainer from './ImgsContainer.jsx';
import '../styles/style.sass'

class App extends React.Component{
   render(){
       return (
         <div>
          <SearchBar />
          <ImgsContainer imgs={this.props.data} />
         </div>
       )
   }
}
var data = [
            {
                "url":"././imgs/zhenzhiwaitao1.png",
                "tag": "zhenzhiwaitao",
                "account": "admin",
                "like": "20",
                "pin": "10",
                "word": "test"
            },
            {
                "url":"././imgs/zhenzhiwaitao2.png",
                "tag": "zhenzhiwaitao",
                "account": "admin",
                "like": "20",
                "pin": "10",
                "word": "test"
            },
            {
                "url":"././imgs/zhenzhiwaitao3.png",
                "tag": "zhenzhiwaitao",
                "account": "admin",
                "like": "20",
                "pin": "10",
                "word": "test"
            },
            {
                "url":"././imgs/zhenzhiwaitao4.png",
                "tag": "zhenzhiwaitao",
                "account": "admin",
                "like": "20",
                "pin": "10",
                "word": "test"
            },
            {
                "url":"././imgs/zhenzhiwaitao5.png",
                "tag": "zhenzhiwaitao",
                "account": "admin",
                "like": "20",
                "pin": "10",
                "word": "test"
            },
            {
                "url":"././imgs/zhenzhiwaitao6.png",
                "tag": "zhenzhiwaitao",
                "account": "admin",
                "like": "20",
                "pin": "10",
                "word": "test"
            },
            {
                "url":"././imgs/zhenzhiwaitao7.png",
                "tag": "zhenzhiwaitao",
                "account": "admin",
                "like": "20",
                "pin": "10",
                "word": "test"
            },
            {
                "url":"././imgs/zhenzhiwaitao8.png",
                "tag": "zhenzhiwaitao",
                "account": "admin",
                "like": "20",
                "pin": "10",
                "word": "test"
            },
            {
                "url":"././imgs/zhenzhiwaitao9.png",
                "tag": "zhenzhiwaitao",
                "account": "admin",
                "like": "20",
                "pin": "10",
                "word": "test"
            },
            {
                "url":"././imgs/zhenzhiwaitao10.png",
                "tag": "zhenzhiwaitao",
                "account": "admin",
                "like": "20",
                "pin": "10",
                "word": "test"
            }
        ]
ReactDOM.render(<App data={data} />, document.getElementById('root'));
