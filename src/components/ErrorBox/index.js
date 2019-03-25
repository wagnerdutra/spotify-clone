import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from './styles';
import { Creators as ErrorActions } from '../../store/ducks/error';
import CloseIcon from '../../assets/images/close.svg';

const ErrorBox = ({ error: { message, visible }, hideError }) => visible && (
<Container>
  <p>{message}</p>
  <button type="button" onClick={hideError}>
    <img src={CloseIcon} alt="Fechar" />
  </button>
</Container>
);

const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToPros = dispatch => bindActionCreators(ErrorActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToPros,
)(ErrorBox);