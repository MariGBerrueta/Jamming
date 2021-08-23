import React from 'react';
import './Track.css';

export class Track extends React.Component {
    constructor (props) {
        super(props);

        this.state = {play: false}

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.manageAudio = this.manageAudio.bind(this);
    }

    renderAction () {
       if (this.props.isRemoval ) {
        return <button className="Track-action" onClick={this.removeTrack}> - </button>;
       } else {
        return <button className="Track-action" onClick={this.addTrack}> + </button>;
       } 

    }

    addTrack () {
        this.props.onAdd(this.props.track)
    }

    removeTrack () {
        this.props.onRemove(this.props.track)
    }

    manageAudio () {
        let audio = this.props.audio;

        if (audio.paused) {
            audio.play(); 
            this.setState({play: true})
        } else {
            audio.pause();
            this.setState({play: false})
        }
    }

    audioControls () {
        if (this.state.play === false) {
            return <i class="fas fa-play-circle"></i>
        } else {
            return <i class="fa fa-pause-circle" aria-hidden="true"></i>
        }
    }

    render () {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3> {this.props.track.name} </h3>
                    <p> {this.props.track.artist} | {this.props.track.album} </p>
                    <div className="play">
                        <span onClick={this.manageAudio}>{this.audioControls()}</span>
                        <p >Preview of Song</p>
                    </div>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}