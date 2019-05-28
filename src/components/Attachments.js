import React from "react"
import AddPhoto from "@material-ui/icons/AddPhotoAlternate";

class Attachments extends React.Component{
    constructor(props){
        super(props);
    }
    renderAttachments(){
        const attach=this.props.dummy;
        console.log("attach",attach[0].attachments[0].author_name)
        for(let i=0;i<=this.props.dummy.length;i++)
        {
            
                if(this.props.dummy[i].hasOwnProperty('attachments'))
                {
                    if(attach[i].attachments[i].hasOwnProperty('author_name'))
                    {
                        //const att=attach[i].attachments[i].author_name
                        const att=attach[i].attachments.map((attach)=>{
                            return(<div className="Attachment">
                                <div className="author">
                                <img src={attach.author_icon} alt={attach.author_name}/> <a href={attach.author_link}>{attach.author_name}</a>
                               
                                </div>
                               <div className="title_text">
                               <img src={attach.title_icon} ></img><a href={attach.title_link}>{attach.title}</a>
                                   </div> 
                                   
                                   <div  className="text_body">
                                   <AddPhoto className="img_body"/>
                                    <p>{attach.text}</p>
                                   <img src={attach.image_url} ></img>
                                   </div>
                            </div>)})
                        
                   return(<div>{att}</div>)
                    }
                  
               // return console.log("hello",attach[0].attachments[0].author_name)
                }
            
            
        }
       
    }
    render(){
        
        return(
            <div>
                
            {this.renderAttachments()}
            
            </div>
        )
    }
}
export default Attachments;