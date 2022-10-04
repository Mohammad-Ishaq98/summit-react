import React from "react";
import Button from "./Button";
class Clock extends React.Component{
    // constructor (props){
    //     super(props);
    //     this.state = {
    //         date : new Date (),
    //         locale: "bn-BD"
    //     }
    // }

    state = { date : new Date (), locale : 'bn-BD' }

    //componentDidMount fires after DOM runs in to browser(after everything loaded)
    componentDidMount(){
       this.clockTimer = setInterval( () => this.tick () , 1000)
    }

    componentWillUnount (){
       clearInterval(this.clockTimer)
    }

    handleClick = (locale) => {
        this.setState({
            locale,
        })
    }

    tick (){
        this.setState({
            date : new Date(),
        })
    }

    render(){
        const {date, locale} = this.state;
        //const {locale} = this.props;

        
        return(
          <div className="">
             <h1>
                <span className="text">
                    {
                        date.toLocaleTimeString(locale)
                    }
                </span>
             </h1> 
           {
                locale === 'bn-BD' ?  (

                    <Button change ={this.handleClick} locale='en-US' show={false}/>
                )
                :
                  (

                    <Button change ={this.handleClick} locale='bn-BD' show/>
                )
           }


           {/* change ={this.handleClick} is a reference to  handleClick function*/}
           {/* <Button change ={this.handleClick} locale='en-US'></Button> */}
           {/* <Button change ={() => this.handleClick('en-US')}></Button>   this is not recomended for sending loacle to button.js*/}
           {/* <button type="buttton" onClick={() =>{this.handleClick('en-US')}}>Click Me</button> */}
           

          </div>
        )
    }
}

export default Clock;