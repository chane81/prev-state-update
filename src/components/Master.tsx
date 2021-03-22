import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/** props */
interface IProps {
  className?: string;
}

/** style */
const HomeWrapper = styled('div')`
  header {
    display: flex;
    justify-content: space-evenly;
    height: 2rem;
    border-bottom: 1px solid gray;
    margin-bottom: 1rem;
  }
`;

const Master: FC<IProps> = (props) => {
  return (
    <HomeWrapper>
      <header>
        <Link to='/BadStateUpdate'>BadStateUpdate</Link>
        <Link to='/BestStateUpdate'>BestStateUpdate</Link>
      </header>
      <main>{props.children}</main>
    </HomeWrapper>
  );
};

export default Master;
