import React from 'react';

import { Container, Search, User } from './styles';

const Header = React.memo(() => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img
        src="https://scontent.fcgh7-1.fna.fbcdn.net/v/t1.0-9/41781116_1896542527103940_5863029683624345600_n.jpg?_nc_cat=101&_nc_ht=scontent.fcgh7-1.fna&oh=1b09cfe1c09f24ca6133dc1e880f5b92&oe=5D4C5700"
        alt="Avatar"
      />
      Wagner Dutra
    </User>
  </Container>
));

export default Header;
