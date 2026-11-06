import React, { Suspense } from 'react'
import './App.css'
import CallbackHook from './CallbackHook'
import MemoHookQuestion from './MemoHookQuestion'
import MemoOfReact from './MemoOfReact'
const LazyLoadComponent = React.lazy(() => import('./Lazyloading'))

function App() {

  return (
    <>
      <p>React practicel tutorial snippet</p>
      {/* <MemoHookQuestion/> */}
      {/* <MemoOfReact/> */}
      {/* <CallbackHook/> */}
      <Suspense fallback={<>
        <p>Loading something...............</p>
      </>}>
        <LazyLoadComponent />
      </Suspense>

    </>
  )
}

export default App
