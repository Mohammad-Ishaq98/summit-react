import React from 'react';

export default class Form extends React.Component {

    state = {
      title : 'javaScript',
      text : 'Type here',
      library : 'React',
      isAwesome : 'checked'
    }

    handleChange = (e) =>{
        if(e.target.type === 'text') {
          this.setState({
            title : e.target.value
            //this.setState always takes updated values
          })
        }

        else if (e.target.type === 'textarea') {
          this.setState({
            text : e.target.value
            //this.setState always takes updated values
          })
        }
        else if (e.target.type === 'select-one') {
          this.setState({
            library : e.target.value
            //this.setState always takes updated values
          })
        }
        else if (e.target.type === 'checkbox') {
          this.setState({
            isAwesome : e.target.checked
            //this.setState always takes updated values
          })
        }
        else {
          console.log(e.target.type)
        }
    }

    submitHandler = (e) => {
      const {title, text, library, isAwesome} = this.state
      e.preventDefault();
      console.log(title, text , library, isAwesome)
    }

    render() {
      const {title, text, library, isAwesome} = this.state
    return (
      <div className="">
        <form action="" onSubmit={this.submitHandler}>
          <input type="text"  value={title}  onChange={this.handleChange}/> 
          <br /><br />

          <textarea type="textarea" name="text" value={text} onChange={this.handleChange}>      
          </textarea>
          
          <br /><br />
          <select name="" value={library} onChange={this.handleChange}>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Angular">Angular</option>
          </select>


          <br /><br />

          <input type="checkbox" checked={isAwesome} onChange={this.handleChange}/>

          <br /><br />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}