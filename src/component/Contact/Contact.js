import React, { Component, useState } from 'react';
import {Navbar} from "../Navbar/Navbar";
import './Contact.css'

const Url = "https://ankit25821.pythonanywhere.com/"
// const Url = "http://127.0.0.1:8000/"

export class Contact extends React.Component {
	 constructor(props) {
	 	super(props);
	 	this.state = {
	 		name:'',
	 		email:'',
	 		subject:'',
	 		message:'',
	 		nameError:'',
	 		emailError:'',
	 		subjectError:'',
	 		messageError:'',
	 		loading:false,
	 		success:false,
	 	};

	 	this.handleNameChange = this.handleNameChange.bind(this);
	 	this.handleEmailChange = this.handleEmailChange.bind(this);
	 	this.handleSubjectChange = this.handleSubjectChange.bind(this);
	 	this.handleMessageChange = this.handleMessageChange.bind(this);
	 	this.SubmitForm = this.SubmitForm.bind(this);
	 }

	 handleNameChange(event) {
	 	const target = event.target;
	 	const value = target.type === 'checkbox' ? target.checked : target.value;
	 	const name = target.name;
	 	this.setState({
	 		name: value,
	 	});
	 }

	 handleEmailChange(event) {
	 	const target = event.target;
	 	const value = target.type === 'checkbox' ? target.checked : target.value;
	 	const email = target.email;
	 	this.setState({
	 		email: value,
	 	});
	 }

	 handleSubjectChange(event) {
	 	const target = event.target;
	 	const value = target.type === 'checkbox' ? target.checked : target.value;
	 	const subject = target.subject;
	 	this.setState({
	 		subject: value,
	 	});
	 }

	 handleMessageChange(event) {
	 	const target = event.target;
	 	const value = target.type === 'checkbox' ? target.checked : target.value;
	 	const message = target.message;
	 	this.setState({
	 		message: value,
	 	});
	 }

	 SubmitForm(event){
	 	event.preventDefault();
	 	this.setState({
	 		name:'',
	 		email:'',
	 		subject:'',
	 		message:'',
	 		nameError:'',
	 		emailError:'',
	 		subjectError:'',
	 		messageError:'',
	 		loading:true,
	 		success:false,
	 	})
	 	fetch(`${Url}contact/`,{
	 		method : "POST",
	 		headers: {
	 			'Content-Type':'application/json',
	 		},
	 		body:JSON.stringify({
	 			name: this.state.name,
	 			email:this.state.email,
	 			subject:this.state.subject,
	 			message:this.state.message,
	 		})
	 	})
	 	.then((response) => {
	 		let data = response.json()
	 		data.then(items => {
	 			if(items.id){
	 				this.setState({
	 				name:'',
	 				email:'',
	 				subject:'',
			 		message:'',
			 		nameError: '',
			 		emailError: '',
			 		subjectError: '',
			 		messageError: '',
			 		loading:false,
			 		success:true,
	 			})

	 			}else{
	 				this.setState({
	 				name:'',
	 				email:'',
	 				subject:'',
			 		message:'',
			 		nameError: items.name,
			 		emailError: items.email,
			 		subjectError: items.subject,
			 		messageError: items.message,
			 		loading:false,
			 		success:false,
	 			})
	 			}
	 		})
	 	})
	 	.catch(err => console.log(err))
	 };

	render(){
		const Loading = this.state.loading
		const NameError = this.state.nameError
		const EmailError = this.state.emailError
		const SubjectError = this.state.subjectError
		const MessageError = this.state.messageError
		const Success = this.state.success
		return(
			<>
			<Navbar/>
			{Success ? <p className="success">Form Submitted Successfully.</p>:''}
			<form className="contact-form">
			<h1 style={{textAlign:'center'}}>Contact</h1><br/>
			
			{ NameError ?
			
			<div>
				<input 
				type="text"
				value={this.state.name}
				onChange={this.handleNameChange}
				placeholder="Enter Your Name."
				required
				className="input"
				style={{ borderBottom:'2px solid #f00' }}
				/><br/>
			<small style={{ color:'#f00' }}>{NameError}</small>
			</div>
			:
			<div className="field">
				<input 
				type="text"
				value={this.state.name}
				onChange={this.handleNameChange}
				placeholder="Enter Your Name."
				className="input"
				required
				/>
			</div>
			}


			<div className="field">
			{ EmailError ?
				<div>
				<input 
				type="email"
				className="input"
				value={this.state.email}
				onChange={this.handleEmailChange}
				placeholder="Enter Your Email Address."
				required
				style={{ borderBottom:'2px solid #f00' }}
				/><br/>
				<small style={{ color:'#f00' }}>{EmailError}</small>
				</div>
				:
				<input 
				type="email"
				value={this.state.email}
				className="input"
				onChange={this.handleEmailChange}
				placeholder="Enter Your Email Address."
				required
				/>
			}
			</div>

			<div className="field">
			{ SubjectError ? 
				<div>
				<input 
				type="text"
				className="input"
				value={this.state.subject}
				onChange={this.handleSubjectChange}
				placeholder="Enter Your Subject."
				style={{ borderBottom:'2px solid #f00' }}
				required
				/><br/>
				<small style={{ color:'#f00' }}>{EmailError}</small>
				</div>
			:
				<input 
				type="text"
				className="input"
				value={this.state.subject}
				onChange={this.handleSubjectChange}
				placeholder="Enter Your Subject."
				required
				/>
		    }
		    </div>

			<div className="field">
			{ MessageError ?
				<div>
				<textarea
				value={this.state.message}
				onChange={this.handleMessageChange}
				placeholder="Enter Your Message."
				required
				className="textarea"
				style={{ borderBottom:'2px solid #f00' }}
				></textarea>
				<br/>
				<small style={{ color:'#f00' }}>{EmailError}</small>
				</div>
			:
			<textarea
			value={this.state.message}
			onChange={this.handleMessageChange}
			placeholder="Enter Your Message."
			required
			className="textarea"
			></textarea>
			}
			</div>
			{ Loading ? <p style={{ color:'#000' }}>Loading ..</p>:
			<button className="contact-submit" onClick={this.SubmitForm}>Submit</button>
		    }
			</form>
			</>
			)
	}
}
