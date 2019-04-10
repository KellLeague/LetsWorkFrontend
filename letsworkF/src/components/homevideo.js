import React from 'react';


class VideoHero extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            videoURL: ''
        }
    }

    render () {
        const { videoURL } = this.state
        return (
            <div style={{
                width: '1420px',
                height: '500px',
                overflow: 'hidden',
              }}>
                <video
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                  loop autoPlay
                  src="/assets/puzzle.mp4"
                />
              </div>
        )
    }
};

export default VideoHero;