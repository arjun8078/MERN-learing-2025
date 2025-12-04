export function Header(props){
    return(
        <>
        <header style={{
            backgroundColor: '#282c34', 
      padding: '20px', 
      color: 'white',
      textAlign: 'center'
        }}>
             <h1>{props.title}</h1>
      {props.subtitle && <p>{props.subtitle}</p>}
        </header>

        </>
    )
}