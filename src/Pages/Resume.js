import React from "react"
import ResumeWorkItem from "../MainComponents/ResumeWorkItem"

function Resume() {
    return (
        <div id="Resume">
            <h1>Resume</h1>
            <div className="resume-row">
                <div className="resume-column" id="resume-col1">
                    <h2>Employment</h2>
                    <ResumeWorkItem
                        name="Walmart Labs (Motion Recruitment)"
                        title="Backend Engineer"
                        date="January 2022 - Present"
                        description={[
                            "Developed high traffic APIs (10,000+ TPS) for global payment processing",
                            "Rearchitected orchestration framework to enable high throughput with minimal latency and minimal resource consumption (and to substantially improve code readability and maintainability)",
                            "Cooperated with teams across numerous companies to integrate multiple external payment processors into our platform"
                        ]}
                    />
                    <ResumeWorkItem
                        name="Fannie Mae"
                        title="Full Stack Developer, Cloud Architect"
                        date="February 2021 - July 2021"
                        description={[
                            "Developed functionality for Fannie Mae's automated loan underwriting system",
                            "Migrated applications from on-premises servers to cloud infrastructure (AWS)",
                            "Integrated monitoring/logging systems for auditing and incident resolution",
                            "Rearchitected cloud infrastructure for various applications to adhere to evolving business standards and requirements"
                        ]}
                    />
                    <ResumeWorkItem
                        name="Perspecta (Frank Recruitment Group)"
                        title="Full Stack Developer"
                        date="August 2020 - December 2020"
                        description={[
                            "Software Developer for The Department of Homeland Security's Citizenship and Immigration Services",
                            "Developed and maintained APIs for automation of immigration application processes",
                            "Overhauled CI/CD process using Jenkins and OpenShift Container Platform",
                            "Contract ended early due to COVID-19 rebudgeting"
                        ]}
                    />
                    <ResumeWorkItem
                        name="Capital One"
                        title="iOS Developer, Web Developer"
                        date="February 2017 - September 2019"
                        description={[
                            "Swift and Obj-C Developer for CreditWise iOS",
                            "Secondary role as Angular developer for CW Web",
                            "Led the team on establishing accessibility and content localization standards throughout the application",
                            "Cooperated with Product Owners and UX Designers to create solutions that match product expectations without compromising on proper development practices",
                            "Improved the team's unit testing and acceptance testing practices, substantially reducing the incidence of bugs that would otherwise have been missed until QA testing or production deployment",
                            "Improved CI/CD automation using Jenkins and Chef",
                        ]}
                    />
                    <ResumeWorkItem
                        name="Capital One"
                        title="API Developer, Cloud Architect"
                        date="February 2016 - February 2017"
                        description={[
                            "Developed Spring Boot APIs",
                            "Developed an Orchestration API to integrate our APIs with an upstream decision engine",
                            "Replaced on-premises batch processes (6 month intervals) with real-time processes hosted on AWS architecture",
                            "Designed and implemented deployment automation strategies to optimize scalability and resiliency while minimizing operational costs",
                            "Created acceptance testing utility for product owners to automatically generate tests from Excel data, eliminating involvement of developers in testing"
                        ]}
                    />
                </div>
                <div className="resume-column" id="resume-col2">
                    <h2> Education </h2>
                    <h3> University of Virginia </h3>
                    <div className="date">2012 - 2015</div>
                    <div className="resumeDesc">
                        B.A. Computer Science <br />
                        B.A. Biology <br />
                    </div> <br />
                    <h2>Certifications</h2>
                    <h3>AWS (Associate)</h3>
                    <ul>
                        <li>Developer</li>
                        <li>Solutions Architect</li>
                    </ul>
                    <h2>Skills</h2>
                    <h3>iOS</h3>
                    <ul>
                        <li>Swift App Dev</li>
                        <li>Obj-C App Dev</li>
                        <li>Reactive<ul>
                            <li>RxSwift</li>
                        </ul></li>
                        <li>UI Testing<ul>
                            <li>EarlGrey</li>
                        </ul></li>
                    </ul>
                    <h3>Full Stack</h3>
                    <ul>
                        <li>Spring API Dev<ul>
                            <li>MVC</li>
                            <li>WebFlux</li>
                        </ul></li>
                        <li>CI/CD Automation <ul>
                            <li>Chef</li>
                            <li>Jenkins</li>
                            <li>OpenShift</li>
                            <li>Kubernetes</li>
                        </ul></li>
                        <li>Testing<ul>
                            <li>Acceptance<ul>
                                <li>Gherkin</li>
                            </ul></li>
                            <li>Unit<ul>
                                <li>JUnit</li>
                            </ul></li>
                            <li>Performance<ul>
                                <li>JMeter</li>
                            </ul></li>
                        </ul></li>
                        <li>Database<ul>
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                            <li>Google Spanner</li>
                            <li>DynamoDB</li>
                        </ul></li>
                        <li>Scripting<ul>
                            <li>Python</li>
                            <li>Bash</li>
                        </ul></li>
                        <li>Monitoring<ul>
                            <li>Splunk</li>
                            <li>Prometheus</li>
                            <li>CloudWatch</li>
                        </ul></li>
                    </ul>
                    <h3>Web App</h3>
                    <ul>
                        <li>React</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume