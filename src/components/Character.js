function Character (props) {

    let {name, text, picture} = props;

return (<div>
     <h2>{name}</h2>
     <p>{text}</p>
 <img src={picture} alt=""/>
    </div>
)

}




export default Character;