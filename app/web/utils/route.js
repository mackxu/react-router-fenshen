import Loadable from 'react-loadable'

function Loading(props) {
  if (props.error) {
    location.reload()
    return
  }
  if (props.pastDelay) {
    return <div>加载中...</div>
  }
  return null
}

export const loadComponent = (loader) => {
  return Loadable({
    loader,
    loading: Loading,
    delay: 300,
  })
}
