import {Component} from 'react'

export default class App extends Component {
  render() {
    const isLoading = true
    const children = isLoading ? (
      <p>loading...</p>
    ) : (
      <ul>
        <li>
          <a href="http://www.google.com">
            <p>go to Google</p>
          </a>
        </li>
      </ul>
    )
    return <div>{children}</div>
  }
}
