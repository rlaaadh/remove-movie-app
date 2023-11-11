import { Component } from "../core/dahye";

export default class TheHeader extends Component{
  constructor(){
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'Search',
            href: '#/',
          },
          {
            name: 'Movie',
            href: '#/movie?id=tt4520988',
          },
          {
            name: 'About',
            href: '#/about',
          }
        ]
      }
    })
    window.addEventListener('popstate', () => {
      this.render()
    })
  }
  render(){
    this.el.innerHTML = /* html */ `
      <a href="#/" class="logo">
        <span>OBDbAPI</span>.COM
      </a>
      <nav>
        <ul>
          ${this.state.menus.map(menu => {
            const href  = menu.href.split('?')[0]
            const hash = location.hash.split('?')[0]
            const isActive = href === hash
            return /* html */ `
              <li>
                <a 
                  class="${isActive ? 'active' : ''}"
                  href="${menu.href}">
                  ${menu.name}
                </a>
              </li>
            `
          }).join('')}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="https://avatars.githubusercontent.com/u/149958294?u=b5f471e4b595dee5b36fa9378f3c387f5b6e248c&v=4" alt="User">
      </a>
    `
  }
}