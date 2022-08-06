import { Route, Routes, Navigate } from 'react-router-dom';
import { AppRouter } from '../app/routes/AppRouter';
import { Login } from '../auth/pages';

export function Router() {
    return(
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route index path="/*" element={<AppRouter/> } />
        </Routes>
    )
}
