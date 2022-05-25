import "./home.css";
import Header from "./components/Header";

function home() {
  return (
   
    <div>

       <Header/>
       <div className="home-img">

        <img

          src="./img/About1.jpg"

          alt="Cinque Terre"

          width="2057"

          height="989"

          style={{ left:-510,top: -40, position: "absolute" }}

        />

      </div>


       

      <h4 className="hh14">
        Vision
      </h4>
      <h4 className="hh13">
      Creating a creative , balance personified person rich with good intentions ,
      
       positive thoughts and theoretical knowledge who is able to build a better tomorrow.
      </h4>

      <h4 className="hh19">
        Mission
      </h4>
      <h4 className="hh20">
      Hand overing a person to the society who can live successfully in the global 
      village whether it is local or international.
      </h4>

      <button className="hh15" >
        <a 
              href="/sprofile"
                style={{ textDecoration: "none", color: "Black" }}
                >
                {" "}
            <i class="fas fa-book"></i>&nbsp;STUDENT
              </a>
        
      </button>

      {/*<button className="hh16">
        
      </button>

      <button className="hh17">
      </button>

      <button className="hh18">
</button>*/}
</div>

  );
}

export default home;