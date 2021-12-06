import styled, { keyframes } from 'styled-components';

const DropDown = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  border: 1px solid var(--lightGrey);
`;

const DropDownItem = styled.div`
  border-bottom: 1px solid var(--lightGrey);
  background: ${(props) => (props.highlighted ? '#f7f7f7' : 'white')};
  padding: 1rem;
  transition: all 0.2s;
  ${(props) => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  border-left: 10px solid
    ${(props) => (props.highlighted ? props.theme.lightgrey : 'white')};
  img {
    margin-right: 10px;
  }
`;

const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }
  to {
    box-shadow: 0 0 1px 1px yellow;
  }
`;

const SearchStyles = styled.div`
  position: relative;
  input {
    width: 100%;
    padding: 2rem;
    border: 0;
    font-size: 2rem;
    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`;

const SearchInput = styled.header`
    flex: 2;
    form {
        display: inline;
        input {
            padding: .5rem;
            height: 4rem;
            width: 100%;
            border-radius: 3px;
            border: solid 1px #3535344e;
            margin-right: 2rem;
        }
        input:focus {
            outline: none;
        }

        button {
            width: 5%;
        }
    } 

    .search-box{
      width: fit-content;
      height: fit-content;
      position: relative;
      /* padding: 3rem; */
    }
    #input-search{
      height: 50px;
      width: 50px;
      border-style: none;
      padding: 1rem;
      font-size: 1.8rem;
      letter-spacing: 2px;
      outline: none;
      border-radius: 100px;
      transition: all .5s ease-in-out;
      background-color: #F77F00;
      padding-right: 40px;
      color:#222;
    }
    #input-search::placeholder{
      color:#222;
      font-size: 18px;
      letter-spacing: 2px;
      font-weight: 100;
    }
    .btn-search{
      width: 50px;
      height: 50px;
      border-style: none;
      font-size: 20px;
      font-weight: bold;
      outline: none;
      cursor: pointer;
      border-radius: 50%;
      position: absolute;
      right: 0px;
      color:#ffffff ;
      background-color:transparent;
      pointer-events: painted;  
    }
    .btn-search:focus ~ #input-search{
      width: 300px;
      border-radius: 0px;
      background-color: transparent;
      border-bottom:1px solid rgba(255,255,255,.5);
      transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
    }
    #input-search:focus{
      width: 300px;
      border-radius: 0px;
      background-color: transparent;
      border-bottom:1px solid rgba(255,255,255,.5);
      transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
      margin-right: 3rem;
    }

`;

export { DropDown, DropDownItem, SearchStyles, SearchInput };
