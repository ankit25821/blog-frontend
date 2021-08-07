import React, { Component } from 'react'
import './Loading.css'

export class Loading extends React.Component {
    render() {
        return (
            <div className="loader-container">
              <div>
				<div className="outer-loader">
					<div className="loader">
					</div>
				</div>
				<div className="loading-text">Loading<span></span></div>
			  </div>
			</div>
        )
    }
}

export default Loading