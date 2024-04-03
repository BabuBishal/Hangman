import { useCallback, useEffect, useState } from 'react'
import words from './words_list.json'
import { HangmanDrawing } from './HangmanDrawing'
import {HangmanWord} from './HangmanWord'
import {Keyboard} from './Keyboard'

function getWord(){
  return words[Math.floor(Math.random()*words.length)]
}

function App() {

  const [wordToGuess, setWordToGuess] = useState(getWord)

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

    const isLoser = incorrectLetters.length >=6
    const isWinner = wordToGuess.split('')
    .every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetters.includes(letter) || isLoser || isWinner) return

  setGuessedLetters(currentLetters => [...currentLetters, letter])
  },[guessedLetters, isLoser, isWinner]
  )
    useEffect(()=>{
      const handler = (e:KeyboardEvent) => {
        const key = e.key;
        if(!key.match(/^[a-z]$/)) return

        e.preventDefault()
        addGuessedLetter(key)
      }
      
      document.addEventListener('keypress', handler)

      return()=> {
        document.removeEventListener('keypress', handler)
      }
    },[guessedLetters])


    useEffect(()=>{
      const handler = (e:KeyboardEvent) => {
        const key = e.key;
        if(key !== "Enter") return

        e.preventDefault();
        setGuessedLetters([])
        setWordToGuess(getWord())
      }
      
      document.addEventListener('keypress', handler)

      return()=> {
        document.removeEventListener('keypress', handler)
      }
    },[])

  return (
    <div
      style={{
        maxWidth:'500px',
        display:'flex',
        flexDirection:'column',
        gap:'2rem',
        margin:'0 auto',
        alignItems:'center'
      }}
    >
      <div> <h1>Hangman</h1></div>
       
      <div
        style={{
          fontSize:'1.5rem',
          textAlign:'center'
        }}
      >
        {isWinner && "You have won.🍾🍾🎇🎇  Press Enter to try again."}
        {isLoser && "You have lost.😭😭  Press Enter to try again."}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord  reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf:'stretch'}}>
      <Keyboard 
        disabled={isLoser || isWinner}
        activeLetters={guessedLetters.filter(letter => 
        wordToGuess.includes(letter)
        )}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
        />
      </div>
      
    </div>
  
  )
}



export default App
