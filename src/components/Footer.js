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
                        return(<p style={{textAlign:"right"}}>
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