const HEAD = (
    <div 
        style={{
            width:'25px',
            height:'25px',
            borderRadius:'50%',
            border:'5px solid black',
            position:'absolute',
            top:'25px',
            right:'-15px'
        }}/>
)
const BODY = (
    <div 
        style={{
            width:'5px',
            height:'50px',
            position:'absolute',
            background:'black',
            top:"55px",
            right:0
        }}/>
)
const RIGHT_ARM = (
    <div 
        style={{
            width:'50px',
            height:'5px',
            position:'absolute',
            background:'black',
            top:"70px",
            right:'-50px',
            rotate:'-30deg',
            transformOrigin:'left bottom'
        }}/>
)
const LEFT_ARM = (
    <div 
        style={{
            width:'50px',
            height:'5px',
            position:'absolute',
            background:'black',
            top:"70px",
            right:"5px",
            rotate:'30deg',
            transformOrigin:'right bottom'
        }}/>
)
const RIGHT_LEG = (
    <div 
        style={{
            width:'50px',
            height:'5px',
            position:'absolute',
            background:'black',
            top:"100px",
            right:'-45px',
            rotate:'60deg',
            transformOrigin:'left bottom'
        }}/>
)
const LEFT_LEG = (
    <div 
        style={{
            width:'50px',
            height:'5px',
            position:'absolute',
            background:'black',
            top:"100px",
            right: 0,
            rotate:'-60deg',
            transformOrigin:'right bottom'
        }}/>
)
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrawing({numberOfGuesses} : HangmanDrawingProps){
    return (
        <div
            style= {{
                position:'relative'
            }}       
        >
           {BODY_PARTS.slice(0,numberOfGuesses)}
            <div style={{height:'25px', width:'5px', background:'black', marginLeft:'20px', top:0, right:0, position:'absolute'}} />
            <div style={{height:'5px', width:'100px', background:'black', marginLeft:'70px' }} />
            <div style={{height:'200px', width:'5px', background:'black', marginLeft:'70px' }} />
            <div style={{height:'5px', width:'150px', background:'black' }} />
        </div>
    )
}