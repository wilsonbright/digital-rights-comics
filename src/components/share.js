import React from 'react'

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share'

const ShareButtons = ({url}) => {

    return(
        <div>
          <FacebookShareButton url={url}  >
                <FacebookIcon  size={30} round={true}/>
         </FacebookShareButton>

          <TwitterShareButton url={url}>
                <TwitterIcon  size={30} round={true} />
          </TwitterShareButton>

          <LinkedinShareButton url={url}>
            <LinkedinIcon  size={30} round={true}/>
          </LinkedinShareButton>

          <RedditShareButton url={url} >
            <RedditIcon  size={30} round={true} />
          </RedditShareButton>
        </div>
      )

}
export default ShareButtons