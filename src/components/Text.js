import React from 'react'

class Text extends React.Component{
constructor(props){
    super(props);
    console.log("dum",this.props.dummy)

}
tile()
{
    console.log("tex",this.props.dummy[0].text)
    for(let i=0;i<this.props.dummy.length;i++){
        if(this.props.dummy[i].hasOwnProperty('text'))
        {
            const title=this.props.dummy.map((title)=>{
                return(<div>{title.text}</div>)})
                return(<div>{title}</div>)
               
        }
    }
   
     
    
     }
render(){
    
    
        
    
    return(<div>{this.tile()}</div>)
}
}
export default Text
