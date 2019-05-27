import React, { Component } from 'react';
class Footer extends React.Component{
    constructor(props){
        super(props)
    }
    renderFooter(){
        const attach=this.props.dummy;
        for(let i=0;i<attach.length;i++)
        {
            if(attach[i].hasOwnProperty('attachments'))
            {
                for(let j=0;j<attach[i].attachments.length;j++)
                {
                    if(attach[i].attachments[j].hasOwnProperty('footer'))
                    {
                        const foot=attach[i].attachments[j].footer
                        const foot_url=attach[i].attachments[j].footer_url
                        const foot_icon=attach[i].attachments[j].footer_icon
                        return(<p style={{textAlign:"right"}}>
                        <img src={foot_icon}></img>
                            <a href={foot_url}>{foot}</a>
                            </p>
                            
                       )
                        
                    }
                    
                }
            }
        }
    }
    render(){
        return(<div>{this.renderFooter()}</div>)
    }
}
export default Footer