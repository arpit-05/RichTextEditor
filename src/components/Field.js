import React from 'react'
class Field extends React.Component{
    constructor(props){
        super(props)
        // this.renderValue=this.renderValue.bind(this)
    }
   
    renderField(){
        
        const attach=this.props.dummy
        for(let i=0;i<attach.length;i++){
            if(attach[i].hasOwnProperty('attachments'))
            {
                if(attach[i].attachments[i].hasOwnProperty('fields_title'))
                {
                    const field=attach[i].attachments[i].fields_title
                    return (<div>{field}</div>)
                }
                for(let j=0;j<attach[i].attachments.length;j++)
                {
                    if(attach[i].attachments[j].hasOwnProperty('fields_title'))
                    {
                        const fielded=attach[i].attachments[j].fields_title
                        return(<div>{fielded }</div>)
                    }
                }
            }
        }
        

    }
    // renderFields(){
    //     const attach=this.props.dummy
    //     for(let i=0;i<attach.length;i++)
    //     {
    //         if(attach[i].hasOwnProperty('attachments'))
    //     {
    //         for(let j=0;j<attach[i].attachments[i].fields.length;j++)
    //         {
                
    //                 if(attach[i].attachments[i].hasOwnProperty('fields'))
    //                 {
    //                     function renderValue()
    //                     {
                           
    //                         const value=attach[0].attachments[0].fields.map((val)=>{
    //                             return(<div>
    //                              <div>{val.value}</div>
    //                                 </div>)
    //                         })
                           
    //                         return (<div>{JSON.stringify(value)}</div>)
                            
                       
                           
    //                     }
    //                     const fields=attach[i].attachments[i].fields.map((field)=>{
    //                         return(<div>
    //                          {/* {console.log("values",renderValue())} */}
    //                          <div onClick={()=>renderValue()}>{field.title}</div>
    //                             </div>)
    //                     })
    //                     return (<div>{fields}</div>)
    //                     }
                       
    //                 }
    //             }
    //         }
           
    //     }
    renderFields(){
        
        const attach=this.props.dummy ;
        for(let i=0;i<attach.length;i++)
        {
            if(attach[i].hasOwnProperty('attachments'))
            {
                for(let j=0;j<attach[i].attachments.length;j++)
                { 
                    if(attach[i].attachments[j].hasOwnProperty('fields'))
                    {
                       
                        for(let k=0;k<attach[i].attachments[j].fields.length;k++)
                        {
                            
                            //  function renderValue()
                            //  {
                           
                            //  const data=attach[i].attachments[j].fields.map((val)=>{
                            //      return(<div>
                            //    <div>{val.value}</div>
                            //          </div>)
                            //   })
                           
                            //  return (<div>{data}</div>)
                           
                            //  }
                            const field=attach[i].attachments[j].fields.map((field)=>{

                                
                                return(<div>
                                {field.title}
                                {/* {field.short ? 'yes':'no'} */}
                                {/* @media  screeonlyn and (device-width: 600px) and (orientation: landscape)  */}
                               {/* { field.short ?<div style={{orientation: `${attach[i].attachments[j].fields_orientation}`}}>{field.value}</div>:<div style={{orientation:attach[i].attachments[j].fields_orientation}}>{field.value}</div>} */}
                               
                               { field.short ? ' : ' + field.value + ' ' : <br /> }
                               
                                </div>)
                            })
                            return (<div>{field}</div>)
                        }
                       
                    }
                }
            }
        }
    }
    render(){
        return(<div className="fields">
             {/* {this.renderValue()} */}
            {this.renderField()}
            {this.renderFields()}
           
        </div>)
    }
}
export default Field