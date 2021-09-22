
import {Component} from 'react'
import { ThemeContext } from './ThemeContext'
export class MyComponent extends Component{
    render(){
        console.log(this.context)
        return <div></div>
    }
}
MyComponent.contextType = ThemeContext