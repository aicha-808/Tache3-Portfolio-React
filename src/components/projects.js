import { Col, Container, Row, Nav, NavItem, NavLink, TabContainer, Tab} from "react-bootstrap";
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import { ProjectCard } from "./projectCard";

export const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Developpment",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Developpment",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Developpment",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Developpment",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Developpment",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Developpment",
            imgUrl: projImg3,
        },
    ]
    return(
        <section className="project p-5" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <TabContainer id="projects-tabs" defaultActiveKey="first"> 
                            <Nav variant="pills" className="nav-pills mb-5 jutify-content-center align-items-center" id="pills-tab">
                                <NavItem>
                                    <NavLink eventKey="first">Tab One</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey="second">Tab Two</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey="third">Tab three</NavLink>
                                </NavItem>
                            </Nav>
                       
                            <Tab.Content >
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </TabContainer>
                    </Col>
                </Row>
            </Container>
        </section>
    )
} 