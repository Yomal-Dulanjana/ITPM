import "./home.css";

function home() {
  return (
    <div>
      <div className="home-img">
        <img
          src="./img/home1.jpg"
          alt="Cinque Terre"
          width="2142"
          height="1010"
          style={{ left: -420, top: 0, position: "absolute" }}
        />
      </div>
      {/*<div classname="logo">
      <img src="img/Logo.png" alt="Cinque Terre"
          width="920"
          height="591"
          style={{ left: 20, top: 80, position: "absolute" }}/>
  </div>*/}

      

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

      {/*<button className="hh15">
        
      </button>

      <button className="hh16">
        
      </button>

      <button className="hh17">
      </button>

      <button className="hh18">
</button>*/}
    </div>
  );
}

export default home;
