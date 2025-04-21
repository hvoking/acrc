// App imports
import { Main } from 'components';
import { MainProvider } from 'context';
import './styles.scss';

export const App = () => {
  return (
    <MainProvider>
      <div className="App">
        <Main/>
      </div>
    </MainProvider>
  );
}
