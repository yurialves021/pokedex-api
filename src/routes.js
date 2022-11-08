import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import App from '../src/App';
import PokemonDetails from './components/PokemonDetails';

export default function AppRouter(){
    return (
        <Router>
            <Routes>
                <Route index element={<App />}/>
                <Route path='pokemon/:id' element={<PokemonDetails />}/>
            </Routes>
        </Router>
    );
}