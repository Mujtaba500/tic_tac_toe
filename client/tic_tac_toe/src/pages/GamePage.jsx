import '../App.css'

const GamePage = () => {

    return (
        <>
        <div>
    <div id="header">
        <h1>Tic-Tac-Toe</h1>
    </div>
    <div id="main">
        <h2 id="heading">Player X's turn</h2>
        <div id="field">
            <div class="cell" id="row1-cell0"></div>
            <div class="cell" id="row1-cell1"></div>
            <div class="cell" id="row1-cell2"></div>
            <div class="cell" id="row2-cell0"></div>
            <div class="cell" id="row2-cell1"></div>
            <div class="cell" id="row2-cell2"></div>
            <div class="cell" id="row3-cell0"></div>
            <div class="cell" id="row3-cell1"></div>
            <div class="cell" id="row3-cell2"></div>
        </div>
        <button id="restart-btn">Restart</button>
    </div>
    </div>
    
    <div id="footer">
        <p>Copyright © 2023 mujtaba</p>
    </div>
        </>
    )

}

export default GamePage