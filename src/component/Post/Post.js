import React, { Component } from 'react';
import './Post.css';
import {Navbar} from "../Navbar/Navbar";
import {Link} from "react-router-dom";
import Loading from '../Loading/Loading'

const Url = "https://ankit25821.pythonanywhere.com/"
// const Url = "http://127.0.0.1:8000/"

export class Post extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      data: [],
      // dataerror:false,
      loaded: false,
    };
  }

  componentDidMount() {
    fetch(`${Url}posts/`)
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { dataerror: true };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }



    render(){
      const loading = this.state.loaded
      if (loading){
        let footer = document.getElementById('footer');
        footer.style.display = 'block';
      }
      const dataerror = this.state.dataerror

    return(
        (loading ?
      <div style={{ height:'100%' }}>
      <Navbar/>
        <div className="cards">

            {this.state.data.map(data => {
            return (
              <div className="card" key={data.id}>
                {/*<img src="https://source.unsplash.com/200x200/?nature,water" className="card-img" />*/}
                <h2 className="card-title">{data.title}</h2>
                <p className="post-author"><span className="far fa-user">&nbsp;&nbsp;{data.owner}</span></p><br/>
                <p className="card-body" dangerouslySetInnerHTML={{__html: data.body }}/>
                <Link to={{ pathname:`/posts/${data.id}` }} className="view-post-btn">
                  View More
                </Link>
              </div>
            )
          })}

          

        </div>
      </div>
      :
      <Loading/>
      )
            );
    }
}

export class PostDetail extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      categories:[],
      data: [],
      loaded_data2: false,
      placeholder: "Loading"
    };
  }

  formatDate(dateString){
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Date(dateString).toLocaleDateString(undefined, options)
  }

    componentDidMount() {
      Promise.all([
            fetch(`${Url}posts/${this.props.match.params.id}`),
            fetch(`${Url}categories/`)
        ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) => this.setState({
            data:data1,
            categories: data2,
            loaded_data2:true
        }));
  }

  render(){
    const{data,categories}=this.state
    const loading2 = this.state.loaded_data2
    if (loading2){
      let footer = document.getElementById('footer');
      footer.style.display = 'block';
    }
    
    return(
     (loading2 ? 
      <>
      
      <Navbar/>
      <div className="container">

        <div className="box2">
        <h1 className="main-title">{data.title}</h1>
          <p dangerouslySetInnerHTML={ {__html: data.body} }/>
          <div className="owner">
            <span className="far fa-user">&nbsp;{data.owner}</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="far fa-clock">&nbsp;{this.formatDate(data.created_at)}</span>
          </div>

        </div>

        <div className="sidebar">

        <div className="box1">
          <h2>Categories</h2><br/>
          {categories.map(cat=>{
            return(
              <div key={cat.id} className={"categories "+(cat.name == data.categories ? 'present':'')}>
              <Link to={{ pathname:`/categories/${cat.id}` }}>
                {cat.name}
              </Link>
              </div>
              )
          })}
        </div>

        {/*<div className="box3">
          <h2>Latest Post</h2><br/>
          <div className="latest-post">
            Test Post
          </div>
          <div className="ads"></div>
        </div>*/}
        </div>

      </div>
      </>
      : <Loading/>)
      );
  }
}
