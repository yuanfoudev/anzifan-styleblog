import Head from "next/head"
import { Giscus } from '@giscus/react';
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { Tab } from '@headlessui/react'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const GiscusComponent = dynamic(
    () => {
        return import('../components/comments/GiscusComponent')
    },
    { ssr: false }
)

const TwikooComponent = dynamic(
    () => {
        return import('../components/comments/TwikooComponent')
    },
    { ssr: false }
)

const Comment = () => {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const comments = [        
        {
            name: 'Twikoo (国内访问，无需登录)',
            component: <TwikooComponent />
        },
        {
            name: 'Giscus',
            component: <GiscusComponent theme={resolvedTheme === 'dark' ? 'dark' : 'light'} />
        },
    ]

 return (  <div className="pb-4 md:pb-8"/>  )

export default Comment
