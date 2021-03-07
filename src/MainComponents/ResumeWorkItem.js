import React from "react"

function ResumeWorkItem(props) {
    const descItems = Array.from(props.description).map((item) =>
        <div><li>{item}</li></div>
    )
    return (
        <div className="ResumeWorkItem">
        <h3>{props.name}</h3>
        <h3>{props.title}</h3>
        <div className="date">{props.date}</div>
        <div className="resumeDesc">{descItems}</div>
        </div>
    )
}

export default ResumeWorkItem