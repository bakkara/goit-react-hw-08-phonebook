import styled from 'styled-components';

export const List = styled.ul`
    /* margin-left: 20px; */
     display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
     grid-gap: ${({ theme }) => theme.spacing(5)};
`
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
