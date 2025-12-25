import React from 'react'
import GsPaper from './GsPaper'
import GsAnswerWriting from './GsAnswerWriting'
import WritingTips from './WritingTips'

const SubmitAnswer = () => {
    return (
        <div className='md:px-10 px-6'>
            <GsPaper />
            <GsAnswerWriting/>
            <WritingTips/>
        </div>
    )
}

export default SubmitAnswer
