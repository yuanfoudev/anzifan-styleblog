import { FC } from "react"
import { Post } from "../lib/types"
import NotionCallout from "./notionBlocks/NotionCallout"
import moment from "moment";
import Sspai from '../assets/sspai.svg'

function generateText(texts: any[]) {
    return texts.map((text: any) => {
        return {
            "type": "text",
            "text": {
                "content": text.content,
                "link": text.link || null
            },
            "annotations": {
                "bold": text.bold || false,
                "italic": text.italic || false,
                "strikethrough": text.strikethrough || false,
                "underline": text.underline || false,
                "code": text.code || false,
                "color": text.color || "default"
            }
        }
    })
}

function generateCalloutValue(emoji: any, color: string, texts: any[]) {
    return {
        "icon": {
            "type": "emoji",
            "emoji": emoji
        },
        "color": color,
        "text": generateText(texts)
    }
}

const FrontMessage: FC<{ post: Post }> = ({ post }) => {
    const updateDate = moment(post.updateDate)
    const createDate = moment(post.date)
    const isOldBlog = createDate.isBefore(moment([2022, 5, 7]))
    const updateDaysPassed = isOldBlog ? moment().diff(createDate, "days") : moment().diff(updateDate, "days")



    const tipMessage = generateCalloutValue("ℹ️", "blue_background", [{content: post.tip}]);

    return (
        <>
             {isOldBlog ?
                 <NotionCallout value={oldBlogMessage} /> : null                
             }
             { updateDaysPassed > 365 ?
                 <NotionCallout value={outDatedMessage} /> : null
            }
            {
                post.sspai !== "" ?  
                <NotionCallout value={sspaiMessage} /> 
                : null
            }
            {
                post.tip !== "" ?
                <NotionCallout value={tipMessage} /> : null
            }
        </>
    )
}

export default FrontMessage
