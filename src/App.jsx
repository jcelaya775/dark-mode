import { useState } from 'react'
import './App.css'
import { AnimatePresence, motion } from 'framer-motion'
import Switch from './components/Switch'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggle = () => {
    console.log(`dark mode: ${darkMode}`)
    setDarkMode((darkMode) => !darkMode)
  }

  return (
    <AnimatePresence>
      <div className={`App ${darkMode ? 'dark' : ''}`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='min-h-screen bg-[#eee] dark:bg-[#333]'
        >
          <motion.div className='container p-10'>
            <motion.h1 className='p-4 text-[#333] dark:text-[#eee]'>
              {darkMode ? 'Dark' : 'Light'} Mode
            </motion.h1>
            <Switch toggle={toggle} />
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default App
