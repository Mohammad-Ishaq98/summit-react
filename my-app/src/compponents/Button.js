import React from 'react';

class Button extends React.Component {

    shouldComponentUpdate(nextProps) {
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextProps;
        if (currentChange === nextChange && nextLocale === currentLocale) {
            return false;
        }
        return true;
    }

    render(){
        const {change, locale, show} = this.props ;
        return(
           <div className="">
             {/* <button type="buttton" onClick={() =>{this.handleClick('en-US')}}>Click Me</button>

            
             onClick={() => change(locale) } comes from clock.js file's Button tag's function handleclick */}
            <button type="buttton" onClick={() => change(locale)}>
                {locale === 'bn-BD' ? 'change clock' : ' ঘড়ি পরিবর্তন করুন '}
            </button> 
            {/* <p>{show && 'Hello!!' }</p> */}
           </div>
        )
    }
}

export default Button