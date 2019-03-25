import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Container } from './styles';
import { Creators as ErrorActions } from '../../store/ducks/error';
import CloseIcon from '../../assets/images/close.svg';

const ErrorBox = React.memo(
  ({ error: { message, visible }, hideError }) => visible && (
  <Container>
    <p>{message}</p>
    <button type="button" onClick={hideError}>
      <img src={CloseIcon} alt="Fechar" />
    </button>
  </Container>
  ),
);

ErrorBox.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
    visible: PropTypes.bool,
  }).isRequired,
  hideError: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToPros = dispatch => bindActionCreators(ErrorActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToPros,
)(ErrorBox);
