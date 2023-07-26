import {Game} from './screens/Game/Game';

// react router hooks

import {useNavigate} from 'react-router';

export default function App() {
  return (
    <div style={{ height: 1000 }}>
      <Game />
    </div>
  );
}