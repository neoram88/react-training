import React, { Component } from 'react';
import { Accordion, AccordionItem,Select,SelectItem,Button } from 'carbon-components-react';
import 'carbon-components/scss/globals/scss/styles.scss';

class Example extends Component {
	constructor(props) {
	  super(props);
	  this.state = {};
    }
    sayHello(){
        alert('Hi Venkat')
    }
    render() {
        return (
            <div>
                <Button 
                className="some-class"
                iconDescription="Button icon"
                onClick={this.sayHello}>Hello Carbon!
                </Button>
                <Accordion>
                <AccordionItem title="Section 1 title" onClick={this.onClick} onHeadingClick={this.onHeadingClick}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </AccordionItem>
                <AccordionItem title="Section 2 title" onClick={this.onClick} onHeadingClick={this.onHeadingClick}>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                </AccordionItem>
                <AccordionItem title="Section 3 title" onClick={this.onClick} onHeadingClick={this.onHeadingClick}>
                <Select onChange={this.onChange} id="select-1" defaultValue="placeholder-item">
                <SelectItem disabled hidden value="placeholder-item" text="Choose an option"
                />
                <SelectItem value="option-1" text="Option 1" />
                <SelectItem value="option-2" text="Option 2" />
                <SelectItem value="option-3" text="Option 3" />
                </Select>
                </AccordionItem>
                <AccordionItem title={<h4 />} onClick={this.onClick} onHeadingClick={this.onHeadingClick}>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                </AccordionItem>
                </Accordion>
            </div>
        );
    }
}

export default Example;
