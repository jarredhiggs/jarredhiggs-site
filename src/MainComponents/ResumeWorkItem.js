import React from "react"

function ResumeWorkItem(props) {
    const descItems = Array.from(props.description).map((item) =>
        <div><li>{item}</li></div>
    )
    return (
        <div className="ResumeWorkItem">
        <h3 className="resumeCompany">{props.name}</h3>
        <h3 className="resumeTitle">{props.title}</h3>
        <div className="resumeDate">{props.date}</div>
        <div className="resumeDesc">{descItems}</div>
        </div>
    )
}

export default ResumeWorkItem