import React from 'react'

function Card(props) {
    return(
        <div className="card">
            <div className="card-left">
                <div className="ein">
                    <span>
                        EIN: {props.ein}
                    </span>
                </div>
                <div className="avatar">
                    <img src={props.picture} alt={props.firstName}/>
                </div>
                <div className="catch-phrase">
                    <span>"{props.catchPhrase}"</span>
                </div>
                <div className="department">
                    <span>{props.department}</span>
                </div>
            </div>
            <div className="card-right">
                <div className="top-part">
                    <div className="name">
                        <span>{props.firstName} </span>
                        <span>{props.lastName}</span>
                    </div>
                    <div className="job-title">
                        <span>{props.jobTitle}</span>
                    </div>
                </div>
                <div className="bottom-part">
                    <div className="contact-info">
                        <div className="phone">
                            <span className="label">Phone: </span>
                            <a href={'tel:' + props.phone}>{props.phone}</a>
                        </div>
                        <div className="email">
                            <span className="label">Email: </span>
                            <a href={'mailto:' + props.email}>{props.email}</a>
                        </div>
                        <div className="email">
                            <span className="label">IP: </span>
                            <a href={props.ip}>{props.ip}</a>
                        </div>
                    </div>
                </div>
               
            </div>
            
        </div>
    )
}

export default Card;