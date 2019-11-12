import React, {Component} from 'react';
import {NavItems} from './components/NavItems/NavItems'
import {MenuButton} from './components/MenuButton/MenuButton'


const items = [
  {
    text: 'Pridaj doklad',
  },
  {
    text: 'Doklady',
  },
  {
    text: 'Export',
  },
    {
    text: 'Info',
  },
]
interface Props {
  title: string,
  isMenuEnabled: boolean
}
interface State {
  isOpen: boolean
}


const initialState: State = {
  isOpen: false,
}

export class Header extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = initialState
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    const newState = Object.assign(this.state)
    newState.isOpen = !newState.isOpen
    this.setState(newState)
  }

  render() {
  return <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-3">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <span class="font-semibold text-l tracking-tight">{this.props.title}</span>
  </div>
  <MenuButton onClick={this.toggleMenu}/>
   {
     this.state.isOpen &&<NavItems items={items}/>
   }
</nav>
}
  
}


