import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
export const InputCustom = styled.input`
      width: 187px;
      height: 32px;
      background: #2D4071;
      border-radius: 4px;
      border: none;
      margin-top: 10px;
      padding 10px;
      color: #8C939F;
`
export const Container = styled.div`
    position: relative;
`
export const Glass = styled(SearchIcon)`
  position: absolute;
  right: 25px;
  top: 18px;
`