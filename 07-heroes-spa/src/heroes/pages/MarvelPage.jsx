import React from 'react'
import { HeroList } from '../components'

export const MarvelPage = () => {
  return (
    <>
      <h1 aria-label='marvel'>Marvel</h1>
      <hr />
      <HeroList publisher='Marvel Comics' />
    </>
  )
}
