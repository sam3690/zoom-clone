'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation'
import MeetingModal from './MeetingModal'
import { useUser } from '@clerk/nextjs'
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk'
import { useToast } from "@/components/ui/use-toast"



const MeetingTypeList = () => {

const router = useRouter()
const [meetingSate, setMeetingSate] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()
const { user } = useUser()
const client = useStreamVideoClient()
const [values, setValues] = useState({
    dateTime: new Date(),
    description: '',
    link: '',    
})
const [callDetails, setCallDetails] = useState<Call>()
const { toast } = useToast()


const createMeeting = async () => {
    if(!client || !user) return;

    try {
        if(!values.dateTime){
            toast({ title: "Please select Date and Time", })
            return
        }

        const id = crypto.randomUUID()
        const call = client.call('default', id)

        if(!call) throw new Error('Failed to create call')

        const startAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString()
        const description = values.description || 'Instant Meeting'

        await call.getOrCreate({
            data: {
                starts_at: startAt,
                custom: {
                    description,
                }
            }
        })

        setCallDetails(call)

        if(!values.description){
            router.push(`/meeting/${call.id}`)
        }
        
        toast({ title: "Meeing created successfully", })
        
    } catch (error) {
        console.log(error);
        toast({ title: "Failed to create meeting", })
    }
}

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
            handleClick={() => setMeetingSate('isJoiningMeeting')}
            className='bg-purple-1'
            
            />
        <HomeCard 
            img='/icons/join-meeting.svg'
            title='Join Meeting'
            description='Join via invitation link'
            handleClick={() => setMeetingSate('isJoiningMeeting')}
            className='bg-yellow-1'
        />

        {!callDetails ? (
            <MeetingModal
                isOpen={meetingSate === 'isScheduleMeeting'}
                onClose={() => setMeetingSate(undefined)}
                title='Schedule a Meeting'
                handleClick={createMeeting}
            />
        ) : (
            <MeetingModal
                isOpen={meetingSate === 'isScheduleMeeting'}
                onClose={() => setMeetingSate(undefined)}
                title='Meetinng Scheduled'
                className="text-center"
                buttonText='Start Meeting'
                handleClick={() => {
                    // navigator.clipboard.writeText(meetingLink)
                    // toast({ title: "Meeting link copied to clipboard", })
                }}
            />
        )}
        <MeetingModal
            isOpen={meetingSate === 'isInstantMeeting'}
            onClose={() => setMeetingSate(undefined)}
            title='Start a New Meeting'
            className="text-center"
            buttonText='Start Meeting'
            handleClick={createMeeting}
        />
    </section>
  )
}

export default MeetingTypeList