import { Github, Dribbble, Props, Linkedin, Wechat, Taobao, Bilibili } from '@icons-pack/react-simple-icons'
import { FC } from 'react'
import Sspai from '../assets/sspai.svg'
import Zhihu from '../assets/zhihu.svg'
import Xiaohongshu from '../assets/xiaohs.svg'
// import bilibili from '../assets/bilibili.svg'

export type LinkType = {
    url: string,
    icon: FC<Props> | string,
    color: string,
    fill: string,
    border: string,
    text: string,
    shadow: string,
    id?: string,
    name?: string,
}


export const links : readonly [LinkType, LinkType, LinkType, LinkType, LinkType] = [
    {
        url: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzU5NTkwMDAzOA==',
        icon: Wechat,
        color: 'from-bg-[#24292f] to-bg-[#040d21]',
        fill: "fill-[#181717]",
        border: "border-[#181717]",
        text:"text-[#181717]",
        shadow: "shadow-true-gray-400",
        id: "Wechat",
        name: "公众号"
    },
    {
        url: 'https://www.xiaohongshu.com/user/profile/62a4b19e000000002102932e?xhsshare=CopyLink&appuid=62a4b19e000000002102932e&apptime=1697272392',
        icon: Xiaohongshu,
        color: 'from-bg-[#d7161c] to-bg-[#fc281a]',
        fill: "fill-[#da282a]",
        border: "border-[#da282a]",
        shadow: "shadow-red-300",
        text:"text-[#da282a]",
        name: "小红书"
    },
    {
        // # banned
        url: 'https://www.zhihu.com/people/allen2022',
        icon: Zhihu,
        color: 'from-true-gray-400 to-true-gray-300 dark:(from-true-gray-600 to-true-gray-500)',
        fill: "fill-[#0084FF]",
        border: "border-[#0084FF]",
        shadow: "shadow-blue-300",
        text:"text-[#0084FF]",
        id: "optional",
        name: "知乎"
    },
    // {
    //     url: '#',
    //     icon: Taobao,
    //     fill: "fill-[#EA4C89]",
    //     border: "border-[#EA4C89]",
    //     shadow: "shadow-pink-300",
    //     text:"text-[#EA4C89]",
    //     color: 'from-bg-[#ea4c89] to-bg-[#ff589f]',
    //     name: 'taobao'
    // },
    {
        url: 'https://space.bilibili.com/516566501',
        icon: Bilibili,
        fill: "fill-[#0A66C2]",
        border: "border-[#0A66C2]",
        shadow: "shadow-blue-300",
        text:"text-[#0A66C2]",
        color: 'from-bg-[#0b66c2] to-bg-[#008bff]',
        name: 'bilibili'
    }
]
