import React from 'react';
import Slider from 'rc-slider';
import Sound from 'react-sound';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import {
  Container, Current, Volume, Progress, Controls, Time, ProgressSlider,
} from './styles';

import { Creators as PlayerActions } from '../../store/ducks/player';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = ({
  player,
  play,
  pause,
  next,
  prev,
  playing,
  position,
  duration,
  handlePosition,
  setPosition,
  positionShown,
  progress,
  setVolume,
}) => (
  <Container>
    {!!player.currentSound && (
      <Sound
        url={player.currentSound.file}
        playStatus={player.status}
        onFinishedPlaying={next}
        onPlaying={playing}
        position={player.position}
        volume={player.volume}
      />
    )}
    <Current>
      {!!player.currentSound && (
        <>
          <img src={player.currentSound.thumbnail} alt={player.currentSound.title} />

          <div>
            <span>{player.currentSound.title}</span>
            <small>{player.currentSound.author}</small>
          </div>
        </>
      )}
    </Current>

    <Progress>
      <Controls>
        <button type="button">
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button type="button" onClick={prev}>
          <img src={BackwardIcon} alt="Backward" />
        </button>
        {!!player.currentSound && player.status === Sound.status.PLAYING ? (
          <button type="button" onClick={pause}>
            <img src={PauseIcon} alt="Pause" />
          </button>
        ) : (
          <button type="button" onClick={play}>
            <img src={PlayIcon} alt="Play" />
          </button>
        )}
        <button type="button" onClick={next}>
          <img src={ForwardIcon} alt="Forward" />
        </button>
        <button type="button">
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>

      <Time>
        <span>{positionShown || position}</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ED760' }}
            handleStyle={{ border: '5px' }}
            max={1000}
            onChange={value => handlePosition(value / 1000)}
            onAfterChange={value => setPosition(value / 1000)}
            value={progress}
          />
        </ProgressSlider>
        <span>{duration}</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#FFF' }}
        handleStyle={{ display: 'none' }}
        value={player.volume}
        onChange={setVolume}
      />
    </Volume>
  </Container>
);

Player.propTypes = {
  player: PropTypes.shape({
    currentSound: PropTypes.shape({
      file: PropTypes.string,
      thumbnail: PropTypes.string,
      author: PropTypes.string,
      title: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  playing: PropTypes.func.isRequired,
  position: PropTypes.string,
  duration: PropTypes.string,
  handlePosition: PropTypes.func.isRequired,
  setPosition: PropTypes.func.isRequired,
  positionShown: PropTypes.string,
  progress: PropTypes.number.isRequired,
  setVolume: PropTypes.func.isRequired,
};

Player.defaultProps = {
  position: null,
  duration: null,
  positionShown: null,
};

function msToTime(ms) {
  if (!ms) return null;

  let seconds = parseInt((ms / 1000) % 60, 10);
  const minutes = parseInt((ms / (1000 * 60)) % 60, 10);

  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${seconds}`;
}

const mapStateToProps = state => ({
  player: state.player,
  position: msToTime(state.player.position),
  duration: msToTime(state.player.duration),
  positionShown: msToTime(state.player.positionShown),
  progress:
    parseInt(
      (state.player.positionShown || state.player.position) * (1000 / state.player.duration),
      10,
    ) || 0,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);
