import styled from 'styled-components';

export const Container = styled.div`
  /* margin: 2%; */
  padding: 2%;
  width: 100%;

  div {
    background: transparent;
  }

  table {
    /* border-spacing: 20px; */
    border-collapse: separate;
    font-weight: 300;
    border-spacing: 0 8px;
    border-radius: 30px !important;
  }

  th {
    font-weight: 700 !important;
    background: transparent !important;
    ::before {
      background: transparent !important;
    }
  }
  th:last-child {
    float: right;
  }
  td:last-child {
    a {
      float: right;
    }
  }

  tbody {
    tr {
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.28);
    }
    td {
      background: #ffffff;
    }
    td:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    td:last-child {
      border-bottom-right-radius: 3px;
      border-top-right-radius: 3px;
      a {
        float: right;
      }
    }
  }

  ul {
    display: flex;
    justify-content: center;

    button,
    li {
      background: none !important;
      border: none !important;
      color: #30b4e5 !important;
      svg {
        width: 15px;
        height: auto;
      }
    }
  }
`;
