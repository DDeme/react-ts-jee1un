import React from 'react'
import { Layout } from '../../components/layout/Layout'


import { Button } from './components/Button/Button'

export const Welcome = () => {
  return <Layout>
        
        <div class="realtive p-3">

         


        <div class="absolute inset-x-0 bottom-0 pl-3 pr-3"> 
          <Button>Začni skenovať</Button>
          <Button>Zobraz naskenované</Button>
          <Button>Exportuj do .csv / .excel</Button>
      
        </div>
        </div>

  </Layout>
}