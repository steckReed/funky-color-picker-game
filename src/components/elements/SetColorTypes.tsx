import { LevelProps } from '../../types/types';

interface Props{
  level: LevelProps,
  setLevel: (value: React.SetStateAction<LevelProps>) => void
}

const SetColorTypes = ({ level, setLevel }: Props) =>{

  const setColorTypes = (() => {
    function basic()  { setLevel(prev => ({ ...prev, difficulty: 1 })); }
    function html()   { setLevel(prev => ({ ...prev, difficulty: 2 })); }
    function ntc()    { setLevel(prev => ({ ...prev, difficulty: 3 })); }

    return { basic, html, ntc }
  })();

  return(<>
    <div>
      <p style={{ marginBottom: '0.5rem' }}>Color Types</p>
      
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', alignContent: 'center' }}>
        <button disabled={level.difficulty === 1} onClick={setColorTypes.basic}>Basic</button>
        <button disabled={level.difficulty === 2} onClick={setColorTypes.html}>HTML</button>
        <button disabled={level.difficulty === 3} onClick={setColorTypes.ntc}>NTC</button>
      </div>
    </div>
  
  </>)
}

export default SetColorTypes;
