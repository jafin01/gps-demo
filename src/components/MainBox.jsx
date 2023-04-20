import React from 'react'
import Form from './Form'

import MeasureDistanceForm from './MeasureDistanceForm'
import SelectMapLayer from './SelectMapLayer'

const MainBox = ({selectedOption, setSelectedOption }) => {

 
  return (
    <div className='px-2 py-6'>
      <Form></Form>
      {/* <GeoForm></GeoForm> */}
      <MeasureDistanceForm></MeasureDistanceForm>
        <SelectMapLayer></SelectMapLayer>
    
    </div>
  )
}

export default MainBox