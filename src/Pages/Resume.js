import React from "react"
import ResumeWorkItem from "../MainComponents/ResumeWorkItem"

function Resume() {
    return (
        <div id="Resume">
            <h1 style={{ "text-align": "center", "margin-bottom": "15px" }}>Resume</h1>
            <div className="resume-row">
                <div className="resume-column">
                    <h2>Professional Experience</h2>
                    <ResumeWorkItem
                        name={"Fannie Mae"}
                        title="Full Stack Developer, Cloud Architect"
                        date="February 2021 - July 2021"
                        description={[
                            "Migrated application systems to AWS architecture",
                            "Automated integration and deployment",
                            "Implemented real-time monitoring of high-traffic applications"
                        ]}
                    />
                    <ResumeWorkItem
                        name="Perspecta (Frank Recruitment Group)"
                        title="Full Stack Developer"
                        date="August 2020 - December 2020"
                        description={[
                            "Developed and maintained Spring API microsystems",
                            "Overhauled CI/CD process via Jenkins, OpenShift Container Platform"
                        ]}
                    />
                    <ResumeWorkItem
                        name="Capital One"
                        title="iOS Developer, Web Developer"
                        date="February 2017 - September 2019"
                        description={[
                            "Swift and Obj-C Developer for CreditWise iOS",
                            "Secondary role as Angular developer for CW Web",
                            "Improved CI/CD automation through Jenkins and Chef",
                            "Enhanced the team's unit testing and acceptance testing practices, substantially reducing the occurrence of bugs in both QA and in Production",
                            "Led the team on establishing accessibility and content localization requirements across the application"
                        ]}
                    />
                    <ResumeWorkItem
                        name="Capital One"
                        title="API Developer, Cloud Architect"
                        date="February 2016 - February 2017"
                        description={[
                            "Developed high-traffic microservices using Spring",
                            "Replaced on-premesis batch processes with real-time processes hosted on AWS architecture",
                            "Designed and implemented Postgres schema",
                            "Designed and implemented deployment automation strategies to optimize scalability and resiliency against operational costs",
                            "Created acceptance testing utility for product owners to automatically generate tests from Excel data",
                            "Cooperated with teams across the enterprise to define appropriate API specifications and service level agreements",
                            "Worked with product owners to define and implement monitoring and logging requrements that properly meet business requirements"
                        ]}
                    />
                </div>
                <div className="resume-column">
                    <h2> Education </h2>
                    <h3> University of Virginia </h3>
                    <div className="date">2012 - 2015</div>
                    <div className="resumeDesc">
                        B.A. Computer Science <br />
                        B.A. Biology <br />
                    </div> <br />
                    <h2>Skills</h2>
                    <h3>iOS</h3>
                    <ul>
                        <li>Swift</li>
                        <li>Objective-C</li>
                        <li>RxSwift</li>
                        <li>UI Automation Testing</li>
                    </ul>
                    <h3>Full Stack Development</h3>
                    <ul>
                        <li>Spring</li>
                        <li>CI/CD Automation (Chef, Jenkins, Openshift)</li>
                        <li>Build Automation (Maven, Gradle)</li>
                        <li>Cucumber/Karate</li>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                        <li>Chef</li>
                        <li>Python</li>
                        <li>Application Monitoring (Splunk, CloudWatch, CloudTrail)</li>
                    </ul>
                    <h3>Web App Development</h3>
                    <ul>
                        <li>React</li>
                    </ul>
                    <h3>AWS</h3>
                    <ul>
                        <li>Associate Solutions Architect Certification</li>
                        <li>Associate Developer Certification</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume