import React from 'react';
import {Navbar} from "../Navbar/Navbar";
import {Link} from "react-router-dom";
import "./Categories.css";
import Loading from '../Loading/Loading'

const Url = "https://ankit25821.pythonanywhere.com/"
// const Url = "http://127.0.0.1:8000/"


export class CategoryDetailPost extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      categories:"",
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  formatDate(dateString){
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Date(dateString).toLocaleDateString(undefined, options)
  }

   componentDidMount() {
   	fetch(`${Url}category-wise-post/${this.props.match.params.id}`)
    .then(response => response.json())
    .then(data => {

      this.setState(() => {
        return {
          data,
          categories:data[0].categories[0],
          loaded: true
        };
      });

    })
   }

  render(){
    const loading = this.state.loaded
    if (loading){
        let footer = document.getElementById('footer');
        footer.style.display = 'block';
      }
    const categories = this.state.categories
    return(
      ( loading ? 
      <>
      <Navbar/>
      <h1 className="category-title">Post from {categories}</h1>
      <div className="cards">
      {this.state.data.map(data => {
        return (
          <div className="card" key={data.id}>
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
      </>: <Loading/>)
      );
  }
}
