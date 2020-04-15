import React from 'react';

import 'static/bootstrap-grid.css';

import H1 from 'components/H1';
import Article from './Article';

export default function NotFound() {
  return (
    <Article>
      <H1>
        <span>Página não encontrada.</span>
      </H1>
    </Article>
  );
}
