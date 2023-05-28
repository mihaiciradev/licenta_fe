import AvatarSvg from '../../assets/avatar';
import './EmployerPage.scss';

function EmployerPage(props) {

    const { name, role, department, tasks, projects, availability, email, phone, linkedin, teams } = props.employee

    return (
        <div className='employerPage'>
            <div id="data">
                <div id="employeeCard">
                    <h2>{name}</h2>
                    <p>{role}</p>
                </div>

                <button>Delete user</button>

                <div className='label'>
                    <span>Department:</span>
                    <span>{department}</span>
                </div>

                <div className='label'>
                    <span>Tasks:</span>
                    {tasks.length > 0 &&
                        tasks.map(t => <span>{t}</span>)
                    }
                    {tasks.length === 0 && <i>None</i>}

                </div>

                <div className='label'>
                    <span>Projects:</span>
                    {projects.length > 0 &&
                        projects.map(p => <span>{p}</span>)
                    }
                    {projects.length === 0 && <i>None</i>}
                </div>

                <div className='label'>
                    <span>Availability:</span>
                    <span>{availability}</span>

                    <button>change</button>
                </div>
            </div>

            <div id="contact">
                <AvatarSvg />
                <div>
                    <h2>Contact information</h2>
                    {
                        email &&
                        <span>Email: {email}</span>
                    }
                    {
                        phone &&
                        <span>Phone: {phone}</span>
                    }
                    {
                        linkedin &&
                        <span>LinkedIn: {linkedin}</span>
                    }
                    {
                        teams &&
                        <span>Microsoft Teams: {teams}</span>
                    }

                </div>
            </div>
        </div>
    );
}

export default EmployerPage;
