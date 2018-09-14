import React from "react"


const Editor = function(props) {
        return(
            <div id="editor">
                <textarea 
                onChange={props.handleChange} 
                value={props.text}
                />
            </div>
        ); 
    }

export default Editor 