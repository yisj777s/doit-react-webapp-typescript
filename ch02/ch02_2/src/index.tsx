import ReactDOM from 'react-dom/client'

const children = [
  <li>
    <a href="http://www.google.com" target="_blank">
      <p>go to Google</p>
    </a>
  </li>,
  <li>
    <a href="http://www.facebook.com" target="_blank">
      <p>go to Facebook</p>
    </a>
  </li>,
  <li>
    <a href="http://www.twitter.com" target="_blank">
      <p>go to Twitter</p>
    </a>
  </li>
]

const rootVirtualDOM = <ul>{children}</ul>

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(rootVirtualDOM)
