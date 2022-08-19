
import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  background:  ${({ theme }) => theme.background}
`
export const BoxUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const UserImg = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    object-fit: cover;
`
export const BoxMenu = styled.div`
    height: 50vh;
    overflow-y: scroll;
`
export const BoxConfig = styled.div``

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 0px 0px 10px 20px;
`
export const Icon = styled.div`
  color: black;
`
export const Text = styled.span`
  color: black;
  font-size: 14px;
`
export const HR = styled.div`
  margin: 10px 0px;
  width: 20vw;
  border-bottom: 0.1px solid gainsboro; 
`
export const Title = styled.h3`
  text-transform: uppercase;
  font-size: 15px;
  padding: 0px 0px 5px 20px;
`