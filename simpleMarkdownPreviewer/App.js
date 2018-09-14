import React from 'react';

import Preview from "./component/preview"
import Editor from "./component/editor"

const textAreaStyles = {
  width: 235,
  margin: 5,
  height: 100,
};

const defaultText = `
A simple markdown previewer
=======================================
Jaysus i learnt alot from this FCC challenge
---------------------------------------
We need to put in a link her to the [GFM_Spec](https://github.github.com/gfm/#precedence) which i needed to go through to understand what the GFM markdown is.

What about a little in line code example\`<div id="inlineCode"></div>\`

Ok, so below this will be a little random block code example 
 \`\`\`
import React from "react"

class Colorful extends React.Component {
  render() {
    return (
      <div style= {styles}>Style Me!</div>
    );
  }
}; 
\`\`\`

We'll put in a list of some films
1. Shawshank Redemption 
2. Gaurdians of the Galaxy
3. The Godfather.

A little quote
>\"Be strong and code on\"

and a freecodecamp image

![image of freecodecamp](https://previews.dropbox.com/p/thumb/AAKvD1ar3xBNWlx4ysZeShzQlD09CAPKM11Qg34GFGnCz1etBqD2lDkXUvz-eF3tTnLefg5ChY7iHoUNxbf6Un8mLmnfuiJ7rwJEpP-z0_CHY0qUWaJuMxnoLi3W8X1Qbn0YNK6vMPdvPurmWuFVMrT6AlE2tQtowSudWxFjp72slNEHUqagiSlOvhPiOvGpDL7xgH0ZqBevu7ORo7aVSsTeujf1g3t-pOxShKYkMo9NzQ/p.jpeg?size=1600x1200&size_mode=3)
 
**by Justin Kelly** 

*Life is short, smile while you still have teeth!!:)*
`;


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      markText: defaultText,
    }
    this.handleChange = this.handleChange.bind(this);
    
  }
  
  handleChange(e){
    this.setState({
      markText: e.target.value
    });
  }

  render(){
    return(
      // only one parent tag is allowed in the return method
      // all other tags have to be on a lower level
      <div>
        <Editor text = {this.state.markText} handleChange= {this.handleChange}/>
        <Preview text = {this.state.markText} />
      </div>
    );
  }
};

export default App;
