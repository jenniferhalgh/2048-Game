import React, { useContext } from "react";
import '../styles/tile.css'
//import { GameContext } from "../components/Game";
import { motion } from "framer-motion";

function Tile({row, column, value, merged}) {
  //  const {cells} = useContext(GameContext)
  //  const currentVal = cells[row][column]
  var show;
  var color;
  var size;
  


  if(value===0){
    color = {
        backgroundColor: "#5A5A5A"
    }
    show = {
        display: "none"
    }
  }
  if(value===2){
    color = {
        backgroundColor: "#ffe6f5",
    }
  } else if(value===4){
    color = {
        backgroundColor: "#ffcceb"
    }
  } else if(value===8){
    color = {
        backgroundColor: "#ffb3e1"
    }
  } else if(value===16){
    color = {
        backgroundColor: "#ff99d7"
    }
  } else if(value===32){
    color = {
        backgroundColor: "#ff80cd"
    }
  } else if(value===64){
    color = {
        backgroundColor: "#fe67c2"
    }
  } else if(value===128){
    color = {
        backgroundColor: "#fe4db8"
    }
  } else if(value===256){
    color = {
        backgroundColor: "#fe34ae"
    }
  } else if(value===512){
    color = {
        backgroundColor: "#fe1aa4"
    }
  } else if(value===1024){
    color = {
        backgroundColor: "#fc039a",
        fontSize: "200% !important"
    }
    show = {
        marginTop: "-45%"
    }
  } else if(value===2048){
    color = {
        backgroundColor: "#d10280",
        fontSize: "220%"
    }
    show = {
        marginTop: "55%"
    }
  }

  if(merged===1){
    color = {
      backgroundColor: color.backgroundColor,
      animationName: "mergedAnim",
      animationDuration: "300ms"
    }
  } else if (merged===0) {
    color = {
      backgroundColor: color.backgroundColor,
      animationName: "",
      animationDuration: ""
    }
  } else if (merged===2){
    color = {
      backgroundColor: color.backgroundColor,
      animationName: "newTileAnim",
      animationDuration: "300ms"
    }
  }

  if(value!=0){
    color = {
    backgroundColor: color.backgroundColor,
    animationName: color.animationName,
    animationDuration: color.animationDuration,
    boxShadow: "0px 0px 20px 0px " + color.backgroundColor
  }
  }

  if(merged===4){
    
  }
  
  return (
      <motion.div className="tile" style={color}>
          <p style={show}>{value}</p>
      </motion.div>
  )
}
export default Tile