import "./home.css";

function home() {
  return (
    <div>
      <div className="home-img">
        <img
          src="img/bg.png"
          alt="Cinque Terre"
          width="2225"
          height="1060"
          style={{ left:-510,top: -40, position: "absolute" }}
        />
      </div>
      <div>
      
      </div>
      {/*<div classname="logo">
      <img src="img/Logo.png" alt="Cinque Terre"
          width="920"
          height="591"
          style={{ left: 20, top: 80, position: "absolute" }}/>
  </div>*/}




      <h4 className="hh14"></h4>

      <h4 className="hh19"></h4>

      <button className="hh15"><i class="fab fa-facebook"></i></button>

      <button className="hh16"><i class="fab fa-instagram"></i></button>

      <button className="hh17"><i class="fab fa-twitter-square"></i></button>

      <button className="hh18"><i class="fab fa-youtube"></i></button>
    </div>
  );
}

export default home;