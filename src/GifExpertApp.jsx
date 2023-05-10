import { AddCategory } from "./AddCategory"
import { useState } from "react"

export const GifExpertApp = ( ) => {
  
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = () => {
    setCategories([ 'Valorant', ...categories ]);
  }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory setCategories={ setCategories }/>

      <ol>
        {
          categories.map( category => {
            return <li key={ category }>{ category }</li>
          })
        }
      </ol>
    </>
  )
}
