import React from "react"

import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import '/public/css/style.css';

import $ from 'jquery';
//import modalVideo from '/public/js/jquery-modal-video.min.js';
import modalVideo from '/public/js/modal-video.js';


class VideoModal extends React.Component {
  componentDidMount() {
//$(this.videoButton).modalVideo({ channel: 'vimeo' });
  }

  render() {
    return (
      <button
        ref={node => (this.videoButton = node)}
        className="js-video-button"
      >
        {/* Play Video */}
      </button>
    );
  }
}

export default VideoModal;

export function Banner({carName, bannerImage}) { 
  return (
    <banner>
    <div id="banner">
      <div className="title">{carName}</div>
      <div className="subtitle">Functions &amp; Features Guide</div>
      <div className="intro">Getting Started</div>
      <img src={bannerImage} className="play-btn" />
      <VideoModal videoId="916056547" />
    </div>
  </banner>
  )
}

