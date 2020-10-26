import React from 'react'

import {
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share'

const ShareButtons = ({title, url}) => {

    return(
        <div>
          &nbsp;&nbsp;
          <TwitterShareButton title={title} url={url}>
                <TwitterIcon  size={30} round={true} />
          </TwitterShareButton>
          &nbsp;
          <RedditShareButton title={title} url={url} >
            <RedditIcon  size={30} round={true} />
          </RedditShareButton>
        </div>
      )

}
export default ShareButtons