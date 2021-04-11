import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`

export const LabelWrapper = styled.label`
  display: flex;
  flex-direction: column;
`

export const Label = styled.span`
  display: block;
  margin-left: 15px;
  margin-bottom: 2px;
  color: var(--gray);
  font-size: 16px;
  font-weight: 600;
`

export const StyledInput = styled.input`
  position: relative;
  display: block;
  max-height: 70px;
  padding: 15px;
  margin: 2px 0;
  color: var(--gray);
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 15px;
  background-color: var(--gray3);
  border: 1px solid transparent;
  transition: border 0.2s;
  outline: none;

  &:focus {
    border: 1px solid var(--orange) !important;
  }

  &::-webkit-input-placeholder {
    color: var(--placeholder);
    font-weight: 500;
  }
`
