import React from 'react'

import './styles.css'

export default function Dashbord() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    Header
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    Sidebar
                </div>
                <div className="col-8">
                    Conteudo
               </div>
            </div>
            <div className="row">
                <div className="col-12">
                    Footer
               </div>
            </div>
        </div>
    )
}