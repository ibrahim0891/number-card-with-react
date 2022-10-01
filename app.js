function MakeSquare(props) {
    return <div class='scale  flex-auto flex items-center justify-center w-full aspect-[1/1] border boder'> {props.number}</div>
}
var i = 1
function makeArry(){
    var square = []
    for (i; i <= 40; i++) {
        square.push(<MakeSquare number={i}/>)
    }
    console.log(square)
    return square
}
function CreateSquare(){
    return (
        <div class='w-[100vw] p-7 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-7'>
            {makeArry() }
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CreateSquare/>)
