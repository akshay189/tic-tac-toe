export default function Log({turns}) {

    // let tag = <li></li>;

    // for(const turn of turns) {
    //     let {square, player} = turn;
    //     let {row, col} = square;

    //     tag = tag +  <p> player {player} update at row {row} and col {col}</p>
    // }  

    return (
        <ol id="log"> 
            { turns.map(turn => (
                <li key={`${turn.square.row}${turn.square.col}`}> 
                {turn.player} player updated at row {turn.square.row} column {turn.square.col}
                </li>
            ) 
            
            )}
        </ol>
    );
}