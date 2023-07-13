//import { Component } from "react";
import React from "react";
import CalculatorTitle from "./CalculatorTitle";
import OutputScreen from "./OutputScreen";
import Button from "./Button";



class Calculator extends React.Component
{

    constructor()
    {
        super();
        this.state = {
            question: '',
            answer: ''
        }
        this.handelClick = this.handelClick.bind(this);
    }

    handelClick = (event) =>  {
        const value = event.target.value;
        console.log(value);
        switch(value) 
        {
            case '=': {
                if(this.state.question!=='')
                {
                    var ans='';
                        try
                        {
                            ans = eval(this.state.question);
                        }
                        catch(err)
                        {
                            this.setState({
                                answer: "Math Error"
                            });
                        }
                        if(ans === undefined)
                            this.setState({
                                answer: "Math Error"
                            });
                        else
                            this.setState({
                                answer: ans,
                            });
                        break;
                }
            }
            case 'Clear': {
                this.setState({
                    question: '',
                    answer: ''
                });
                break;
            }
            case 'Delete': {
                var str = this.state.question;
                str = str.substr(0,str.length-1);
                this.setState({
                    question: str
                });
                break;
            }
            default: {
                console.log("default");
                this.setState({
                    question: this.state.question += value
                })
                console.log(this.state.question);
                break;
            }
        }
    }


    render()
    {
        return <div className="frame">
            <p align="Center"><h1>Calculator Project 1</h1></p>
            <CalculatorTitle value="My Calculator" />
            <div class="mainCalc">
                <OutputScreen question={this.state.question} answer={this.state.answer} />
                <div className="button-row-1">
                    <Button label={"Clear"} handelClick={this.handelClick}  />
                    <Button label={"Delete"} handelClick={this.handelClick}  />
                    <Button label={"."} handelClick={this.handelClick}  />
                    <Button label={"/"} handelClick={this.handelClick}  />
                </div>
                <div className="button-row-2">
                    <Button label={"7"} handelClick={this.handelClick} />
                    <Button label={"8"} handelClick={this.handelClick}  />
                    <Button label={"9"} handelClick={this.handelClick} />
                    <Button label={"*"} handelClick={this.handelClick} />
                </div>
                <div className="button-row-3">
                    <Button label={"4"} handelClick={this.handelClick} />
                    <Button label={"5"} handelClick={this.handelClick} />
                    <Button label={"6"} handelClick={this.handelClick} />
                    <Button label={"-"} handelClick={this.handelClick}  />
                </div>
                <div className="button-row-4">
                    <Button label={"1"} handelClick={this.handelClick} />
                    <Button label={"2"} handelClick={this.handelClick} />
                    <Button label={"3"} handelClick={this.handelClick} />
                    <Button label={"+"} handelClick={this.handelClick} />
                </div>
                <div className="button-row-5">
                    <Button label={"0"} handelClick={this.handelClick} />
                    <Button label={"="} handelClick={this.handelClick} />
                </div>
            </div>
        </div>
    }

}

export default Calculator;
