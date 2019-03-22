import React from 'react';
import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="playlists/1">
        <img
          src="http://designontherocks.blog.br/wp-content/uploads/2010/07/typoster2.jpg"
          alt="algum"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe em quanto voce programa ouvindo as melhores musicas do rock mundial</p>
      </Playlist>
      <Playlist to="playlists/1">
        <img
          src="http://designontherocks.blog.br/wp-content/uploads/2010/07/typoster2.jpg"
          alt="algum"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe em quanto voce programa ouvindo as melhores musicas do rock mundial</p>
      </Playlist>
      <Playlist to="playlists/1">
        <img
          src="http://designontherocks.blog.br/wp-content/uploads/2010/07/typoster2.jpg"
          alt="algum"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe em quanto voce programa ouvindo as melhores musicas do rock mundial</p>
      </Playlist>
      <Playlist to="playlists/1">
        <img
          src="http://designontherocks.blog.br/wp-content/uploads/2010/07/typoster2.jpg"
          alt="algum"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe em quanto voce programa ouvindo as melhores musicas do rock mundial</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
