
import './App.css'
import { useEffect, useState } from 'react'
import { LevelProps } from './types/types';
import generateRandomHexColors from './functions/generateRandomHexColors';
import getColorNames from './functions/getColorNames';
import shuffleArray from './functions/shuffleArray';
import isColorHexMatch from './functions/isColorHexMatch';
import SetChoiceCount from './components/elements/SetChoiceCount';
import SetColorTypes from './components/elements/SetColorTypes';
import DisplayUserScore from './components/elements/DisplayUserScore';


function App() {

  const [level, setLevel] = useState<LevelProps>({
    difficulty  : 3,
    count       : 2,
    selectColor : undefined,
    streak      : 0,
    best        : 0,
  });

  const [colorHexes, setColorHexes]  = useState(generateRandomHexColors({ count: level.count }))
  const [colorNames, setColorNames]  = useState<string[]>()
  const [shuffledColorHexes, setShuffledColorHexes] = useState([])


  const reshuffleLevel = (() => {
    setColorHexes(generateRandomHexColors({ count: level.count }))
  })

  const checkAnswer = ((hex: string)=>{
    if (level.selectColor && level.difficulty){
      const answerIsCorrect = isColorHexMatch({ color: level.selectColor, hex, difficulty: level.difficulty })
      
      if (answerIsCorrect) { 
        setLevel(prev => ({ ...prev, 
          best: (prev.streak >= prev.best) ? prev.streak + 1 : prev.best,
          streak: prev.streak + 1,
        })); 
        reshuffleLevel();

      } else {
        setLevel(prev => ({ ...prev, streak: 0 })); 
      }
    }
  });
  
  // Generate List of Colors & Set Answer Select
  useEffect(() => {
    if (colorHexes){ 
      // 1. Get names of generated colors (string[])
      const colorNamesArr = getColorNames({ colorHexes: colorHexes, difficulty: level.difficulty })

      // 2. Set ColorNames to colorNamesArr
      setColorNames(colorNamesArr) 

      // 3. Set Level to random color name in colorNamesArr
      setLevel(prev => ({ ...prev, selectColor: colorNamesArr[Math.floor(Math.random() * (colorNamesArr.length))] }));

      // 4. Shuffle Array
      setShuffledColorHexes(shuffleArray(colorHexes))
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorHexes])


  useEffect(() => {
    if (level.difficulty && level.count){ reshuffleLevel(); }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level.difficulty, level.count])


  return (<>
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyItems:'center', gap:'32px' }}>
      <div>
        <h2 style={{ margin: 0 }}>Select the <span style={{ fontStyle: 'italic' }}>closest</span> color to</h2>
        <h1 style={{ margin: 0, textAlign:'center' }}>{(level?.selectColor) ?(level.selectColor) :'...'}</h1>
      </div>


      {/* Color Selection */}
      <div style={{ display:'flex', flexDirection:'row', flexWrap:'wrap', gap:'12px', alignContent:'center', justifyContent:'center' }}>
        {(shuffledColorHexes && colorNames) && (<>
          {colorNames.map((color, i) => {
            const hexColor = shuffledColorHexes[i];
            return (
              <button 
                key={i}
                style={{ border: `4px solid ${hexColor}`, borderRadius:'8px', minWidth:'250px' }}
                onClick={() => { checkAnswer(hexColor) }}
              >
                <h1 style={{ color: hexColor, padding:0, margin:'12px', fontSize:'clamp(1rem, 8vw, 7rem' }}>{color}</h1>
              </button>
            )
          })}
        </>)}
      </div>


      {/* Settings */}
      <div style={{ display:'grid', gap:'20px' }}>
        <DisplayUserScore level={level} />
        <SetColorTypes    level={level} setLevel={setLevel} />
        <SetChoiceCount   level={level} setLevel={setLevel} />
      </div>
    </div>
  </>)
}

export default App
