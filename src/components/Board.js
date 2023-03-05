
import React from "react";
import Tile from "./Tile";
import '../styles/board.css'

function Board(tiles, merged) {
    console.log(tiles["merged"]);
    var tile1 = <Tile row={0} column={0} merged={tiles["merged"][0][0]} value={tiles["tiles"][0][0]} />
    var tile2 = <Tile row={0} column={1} merged={tiles["merged"][0][1]} value={tiles["tiles"][0][1]}/>;
    var tile3 = <Tile row={0} column={2} merged={tiles["merged"][0][2]} value={tiles["tiles"][0][2]}/>;
    var tile4 = <Tile row={0} column={3} merged={tiles["merged"][0][3]} value={tiles["tiles"][0][3]}/>;
    var tile5 = <Tile row={1} column={0} merged={tiles["merged"][1][0]} value={tiles["tiles"][1][0]}/>;
    var tile6 = <Tile row={1} column={1} merged={tiles["merged"][1][1]} value={tiles["tiles"][1][1]}/>;
    var tile7 = <Tile row={1} column={2} merged={tiles["merged"][1][2]} value={tiles["tiles"][1][2]}/>;
    var tile8 = <Tile row={1} column={3} merged={tiles["merged"][1][3]} value={tiles["tiles"][1][3]}/>;
    var tile9 = <Tile row={2} column={0} merged={tiles["merged"][2][0]} value={tiles["tiles"][2][0]}/>;
    var tile10 = <Tile row={2} column={1} merged={tiles["merged"][2][1]} value={tiles["tiles"][2][1]}/>;
    var tile11 = <Tile row={2} column={2} merged={tiles["merged"][2][2]} value={tiles["tiles"][2][2]}/>;
    var tile12 = <Tile row={2} column={3} merged={tiles["merged"][2][3]} value={tiles["tiles"][2][3]}/>;
    var tile13 = <Tile row={3} column={0} merged={tiles["merged"][3][0]} value={tiles["tiles"][3][0]}/>;
    var tile14 = <Tile row={3} column={1} merged={tiles["merged"][3][1]} value={tiles["tiles"][3][1]}/>;
    var tile15 = <Tile row={3} column={2} merged={tiles["merged"][3][2]} value={tiles["tiles"][3][2]}/>;
    var tile16 = <Tile row={3} column={3} merged={tiles["merged"][3][3]} value={tiles["tiles"][3][3]}/>;

            return (
                <div className="board">
                    {tile1}
                    {tile2}
                    {tile3}
                    {tile4}
                    {tile5}
                    {tile6}
                    {tile7}
                    {tile8}
                    {tile9}
                    {tile10}
                    {tile11}
                    {tile12}
                    {tile13}
                    {tile14}
                    {tile15}
                    {tile16}
                    
               </div>
            )
}

export default Board