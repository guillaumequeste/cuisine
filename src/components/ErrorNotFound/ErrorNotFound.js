import React, { Component } from 'react'
import './ErrorNotFound.css'
import Header from '../Header'
import Footer from '../Footer'

class ErrorNotFound extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="bodyError">
                    <div className="error">
                        <h1 className="msgError">Il n'y a rien ici...</h1>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ErrorNotFound