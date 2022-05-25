import "./aprofile.css";
import Header from "./components/Header";

function profile() {
  return (
   
    <div>

       <Header/>
       <div className="home-img">

        <img

          src="./img/.jpg"

          alt="Cinque Terre"

          width="500"
          

          height="300"

          style={{ left:-510,top: -40, position: "absolute" }}

        />

      </div>


       

     

      <button className="hh15" >
      <a 
              href="/grade-list"
                style={{ textDecoration: "none", color: "Black" }}
                >
                {" "}
            <i class="fas fa-book"></i>&nbsp;GRADE
              </a>
      </button>

      <button className="hh16">
      <a 
              href="/mark-list"
                style={{ textDecoration: "none", color: "Black" }}
                >
                {" "}
            <i class="fas fa-book"></i>&nbsp;MARKS
              </a>
      </button>

      <button className="hh17">
      <a 
              href="/student-list"
                style={{ textDecoration: "none", color: "Black" }}
                >
                {" "}
            <i class="fas fa-book"></i>&nbsp;STUDENT
              </a>
      </button>

      <button className="hh18">
      <a 
              href="/time-list"
                style={{ textDecoration: "none", color: "Black" }}
                >
                {" "}
            <i class="fas fa-book"></i>&nbsp;TIME TABLE
              </a>
       </button>
</div>

  );
}

export default profile;