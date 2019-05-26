import React, { Component } from 'react';
class Action extends React.Component{
    constructor(props){
        super(props)
    }
    renderAction(){
        const attach=this.props.dummy
        for(let i=0;i<attach.length;i++)
        {
         if(attach[i].hasOwnProperty('attachments'))
         {
             for(let j=0;j<attach[i].attachments.length;j++)
             { if(attach[i].attachments[j].hasOwnProperty('actions'))
               {
                 for(let k=0;k<attach[i].attachments[j].actions.length;k++)
                 {
                    const data=attach[i].attachments[j].actions.map((action)=>{
                        return(<div>
                            <input type={action.type} value={action.text}></input>
                        </div>)
                    })

                     return (<div><div style={{float:"right"}}>{data}</div><br/><br/></div>)
                 }
             }
         }   
        }
    }}
    render(){
        return(<div>{this.renderAction()}</div>)
    }
}

export default Action;