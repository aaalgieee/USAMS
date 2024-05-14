import Navbar from "./ui/navbar";
import gab from './img/gab.png';
import fred from './img/fred.png';


function About() {
    return (
        <div>
        <Navbar />

        <br/>
        <br/> 
        <h1 className="ml-11 text-5xl font-bold">Our Team</h1>
        <h3  className="ml-11 text-gray-500">
        The University Student Attendance Monitoring System (USAMS) was implemented at the University of the Immaculate Conception. This innovative system has significantly transformed the way we manage and <br/> track student attendance, bringing about notable improvements in efficiency and accuracy.
        The system's user-friendly interface and seamless integration into our existing infrastructure  have made it a valuable asset  <br/>for both faculty and administrative staff. The real-time attendance tracking feature ensures 
        that we can promptly address any concerns related to student attendance and engagement.  <br/>This has not only streamlined administrative processes but has also enhanced the overall learning experience for our students.
        </h3>

       <img
        className="max-w-xs sm:max-w-xs rounded-lg ml-10 sm:ml-20 md:ml-32 lg:ml-40 xl:ml-48 mt-16" 
        src={gab} alt="Team Member"/>

        <img
        className="max-w-xs sm:max-w-xs rounded-lg ml-10 sm:ml-20 md:ml-32 lg:ml-40 xl:ml-48 mt-16" 
        src={fred} alt="Team Member"/>

      

     <div>
     <h3 className="ml-14 text-1xl font-bold">Al Gabriel Orig</h3>
        <h1 style={{ marginTop: "15px", marginLeft: "290px" }}className="max-w-xs">Programmer Backend</h1>

       
     </div>
       </div>


 
      
        
    );
}

export default About;