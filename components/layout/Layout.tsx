import React from 'react'
import { Header } from '../header/Header'

import  './Layout.scss'

const makeTitle = (title = ``, routeTitle = ``): string => {
  
  const delimiter = routeTitle !== '' ? ` | ` : ``
  return `${title}${delimiter}${routeTitle}`
}

export const Layout = ({routeTitle, children}) => {
  const title = makeTitle(`ScanBill`, routeTitle)
  return <div class={"bg-layout"}> 
     <Header title={title} />
      {children}
  </div>
}