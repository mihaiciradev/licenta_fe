import './BrowsePage.scss';
import EmployerPage from './EmployerPage';

const employee = {
    name: "Ionel ionescu", //mandatory
    role: "Solution architect", //mandatory
    department: "Human resources",//mandatory
    tasks: ["CS-23", "CS-153", "CS-53134"], //mandatory, can be empty
    projects: ['caca'], //mandatory, can be empty
    availability: "on-site",//mandatory
    email: "mihai@ma-ta.com", //optional
    linkedin: "mihai@ma-ta.com", //optional
    phone: "+40 7noidoi", //optional
    teams: "mihai@ma-ta.com" //optional
}

function BrowsePage() {
    return (
        <div className="browsePageContainer">

            <header>
                <button>text</button>
                <button>text</button>
                <button>text</button>
            </header>

            <div className='objects'>
                <div id="objectTypesList">
                    <h3>Types</h3>
                    <button>Tasks</button>
                    <button>Employees</button>
                </div>


                <div id="objectsList">
                    <h3>Employees</h3>
                    <input placeholder='search by name' />
                    <div id="actual-list">
                        <button>Andrei Matei Jianu Kosovo</button>
                        <button>Matei</button>
                        <button>Andrei</button>
                        <button>Matei</button>
                        <button>Andrei</button>
                        <button>Matei</button>
                        <button>Andrei</button>
                        <button>Matei</button>
                        <button>Andrei</button>
                        <button>Matei</button>
                        <button>Andrei</button>
                        <button>Matei</button>
                        <button>Andrei</button>
                        <button>Matei</button>
                        <button>Mihnea</button>
                    </div>


                    {/* <div id="pagination">
                        <button> &lt; &lt; </button>
                        <button> &lt; </button>
                        <span>15</span>
                        <button> &gt; </button>
                        <button> &gt; &gt; </button>
                    </div> */}
                </div>

                <div id="objectPage">
                    <EmployerPage employee={employee} />
                </div>

            </div>



        </div>
    );
}

export default BrowsePage;
