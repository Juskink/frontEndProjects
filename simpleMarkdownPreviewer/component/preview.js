import React from "react"

var marked = require('marked');

marked.setOptions({
    sanitize: false,
    headerIds: false,
  });

const Preview = function(props) {
        let parsedEditor = marked(props.text);
        return(
            <div id="preview" dangerouslySetInnerHTML={{__html : marked(props.text)}}/>
        ); 
    }

export default Preview 