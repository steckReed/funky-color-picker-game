import { LevelProps } from '../../types/types';

interface Props {
 level: LevelProps;
}

const DisplayUserScore = ({ level }: Props) => {
  return(<>

    <div>
      <h2 style={{ margin: 0 }}>🔥 {level.streak}</h2>
      <p style={{ margin: 0 }}>Best: {level.best}</p>
    </div>
  </>)
}

export default DisplayUserScore;
