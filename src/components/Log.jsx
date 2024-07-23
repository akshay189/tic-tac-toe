export default function Log({turns}) {

    let tag = "";

    for(const turn of turns) {
        let {square, player} = turn;
        let {row, col} = square;

        tag = <p> player {player} update at row {row} and col {col}</p>
    }   

    return (
        <ol id="log"> 
            {tag}
        </ol>
    );
}