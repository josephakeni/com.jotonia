import React, { Component } from 'react'
import {FaDesktop,FaLightbulb,FaSearch,FaBookReader} from 'react-icons/fa'
import Title from './Title'



export default class About extends Component {
    state={
        descriptions:[
            {
                icon:<FaDesktop />,
                title:"application development",
                info:"Our clients are our number one priority which makes us go the extra mile to deliver software services compared to none. Using cutting edge technologies to contribute to our client's success by researching new software concept to according to your specification and business needs."
            },
            {
                icon:<FaLightbulb />,
                title:"business intelligence",
                info:"As the world is moving forward in terms of technology, we match up to the task and speed. With our strong knowledge and exploration of business intelligence,artificial intelligence and machine learning. We use various forms of texhnology to collect, extract and present data important for business decision."
            },
            {
                icon:<FaSearch />,
                title:"market research",
                info:"Staying ahead of competitor is a key component for business success in the increasely competitive business world to remain and stay relevant to meet the market needs. We have a dedicated team of people with a passion and expertise for market research to provide our clients with data and information of their target market or customers."
            },
            {
                icon:<FaBookReader />,
                title:"training",
                info:"Learning is a continuous process that can help individual or company staff to improve on existing knowledge or acquire new knowledge. As technology is advancing, we offer various training on software development process such as the Agile, VModel and waterfall methodologies. At Jotonia, we provide Software Testing, Business analysis, Data Analysis and Database Management Training."
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="ON TIME AND ON BUGDET" />
                <div className="services-center">
                    {this.state.descriptions.map((item,index) => {
                        return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
