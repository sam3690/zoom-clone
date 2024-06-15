'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation'



const MeetingTypeList = () => {
    const router = useRouter()
const [meetingSate, setMeetingSate] = useState<'isScheduleMeeting' | 'isJoinMeeting' | 'isInstantMeeting' | undefined>()

  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
        <HomeCard 
            img='/icons/add-meeting.svg'
            title='New Meeting'
            description='Start and Instant Meeting'
            handleClick={() => setMeetingSate('isInstantMeeting')}
            className='bg-orange-1'
        />
        <HomeCard
            img='/icons/schedule.svg'
            title='Schedule Meeting'
            description='Plan your Meeting'
            handleClick={() => setMeetingSate('isScheduleMeeting')}
            className='bg-blue-1'

        />
        <HomeCard 
            img='/icons/recordings.svg'
            title='View Recordings'
            description='Check out your recordings'
            handleClick={() => setMeetingSate('isJoinMeeting')}
            className='bg-purple-1'

        />
        <HomeCard 
            img='/icons/join-meeting.svg'
            title='Join Meeting'
            description='Join via invitation link'
            handleClick={() => router.push('/recordings')}
            className='bg-yellow-1'
        />
    </section>
  )
}

export default MeetingTypeList