import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAction } from 'reducers/labyrinth'
import styled from 'styled-components/macro'

const Directions = () => {
  const actions = useSelector((store) => store.labyrinth.actions)
  const [isActive, setActive] = useState(false)

  const dispatch = useDispatch()

  const toggleDisplay = () => {
    setActive(!isActive);
  }

  return (
    <Direction>
      <DirectionBtn1 className={isActive ? null : 'instructions-btn'} type="button" onClick={toggleDisplay}>Directions</DirectionBtn1>
      {isActive && actions.map((action) => {
        return (
          <div>
            <DirectionText className="instructions">
              {action.description}
            </DirectionText>
            <DirectionBtn2 type="button" key={action.direction} onClick={() => dispatch(getAction(action.type, action.direction))}> Go {action.direction}</DirectionBtn2>
          </div>
        )
      })}
    </Direction>
  )
}

export default Directions;

const Direction = styled.div`
  flex-direction: column;
`

const DirectionBtn1 = styled.button`
  color: #ba8f95;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  height: 34px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid #ba8f95;
  font-size: 1.2rem; 
`

const DirectionText = styled.div`
  flex-direction: column;

  &.instructions {
    display: block;
  }
`

const DirectionBtn2 = styled.button`
  color: #97db4f;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  height: 34px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid #97db4f;
  font-size: 1.2rem; 
`
