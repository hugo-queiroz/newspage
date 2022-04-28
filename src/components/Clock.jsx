import styled from "styled-components";
import tokens from "../assets/tokens/tokens.json";

const Clock = () => {
  setInterval(displayTime, 1000);
  function displayTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM"; 
    if ( hour > 12 ) {
      hour -= 12;
      am_pm = "PM";
    }    
    if ( hour == 0 ) {
      hour = 12;
      am_pm = "AM";
    }
    hour = hour < 10 ? "0" + hour : hour;  
    min = min < 10 ? "0" + min : min;    
    sec = sec < 10 ? "0" + sec : sec;
    let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;   
    document.querySelector("#clock").innerHTML = currentTime;
  }

  // style
  const Clock = styled.div`
    color: ${tokens.brand.color.primary[2].value};
    font-size: ${tokens.font.size.md.value};
    font-weight: ${tokens.font.weight.regular.value};
    @media(max-width: 1056px) {
      margin: ${tokens.spacing.size.md.value} 0 0 ${tokens.spacing.size.xl.value};
    }
  `;
  return (
    <Clock>
      <div id="clock"></div>
    </Clock>
  );
};

export default Clock;
