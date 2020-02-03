import React from 'react'

const Filter = ({handleSearchChange}, {newSearch}) => {
  return (
    <form onSubmit={handleSearchChange}>
      filter with
      <input
        value={newSearch}
        onChange={handleSearchChange}
      />          
    </form>   
  )
}

export default Filter
