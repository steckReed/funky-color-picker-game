import { LevelProps } from '../../types/types';

interface Props{
  level: LevelProps
  setLevel: (value: React.SetStateAction<LevelProps>) => void
}

const SetChoiceCount = ({ level, setLevel }:Props) => {
  
  const setChoiceCount = (() => {
    function easy()     { setLevel(prev => ({ ...prev, count: 2 })); }
    function medium()   { setLevel(prev => ({ ...prev, count: 3 })); }
    function advanced() { setLevel(prev => ({ ...prev, count: 6 })); }
    function hard()     { setLevel(prev => ({ ...prev, count: 9 })); }

    return {easy, medium, advanced, hard}
  })();

  return(<>
    <div>
      <p style={{ marginBottom: '0.5rem' }}>Number of Choices</p>
      
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', alignContent:'center' }}>
        <button disabled={level.count === 2} onClick={setChoiceCount.easy}>2</button>
        <button disabled={level.count === 3} onClick={setChoiceCount.medium}>3</button>
        <button disabled={level.count === 6} onClick={setChoiceCount.advanced}>6</button>
        <button disabled={level.count === 9} onClick={setChoiceCount.hard}>9</button>
      </div>
    </div>
  </>)
}

export default SetChoiceCount;
