import './projects.scss';
import ProjectList from "../../components/project-list/ProjectList";
function Projects() {
    return (
        <>
            <section className="page-header">
                <div className="container-lg">
                    <h1>Projects</h1>
                    <p><span>Expert insights on web design, branding, and</span>
                        <span>digital strategy to help your business stand out.</span></p>
                    <p className="ph-small-text">From design principles to technical optimizations—everything you need for digital success.</p>
                </div>
            </section>
            <section className="projects">
                <ProjectList />
            </section>
        </>
    );
}

export default Projects;
