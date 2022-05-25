
import "./home.css";
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
              href="/student-quiz"
                style={{ textDecoration: "none", color: "Black" }}
                >
                {" "}
            <i class="fas fa-book"></i>&nbsp;QUIZ
              </a>
      </button>

      <button className="hh16">
      <a 
              href="/marksPDF"
                style={{ textDecoration: "none", color: "Black" }}
                >
                {" "}
            <i class="fas fa-book"></i>&nbsp;MARKS
              </a>
      </button>

      <button className="hh17">
      </button>

      <button className="hh18">
</button>
</div>

  );
}

export default profile;