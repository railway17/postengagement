import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CaptureToolsPage from './pages/capture-tools';
import PostEngagement from './components/postengagement';
import PostEngagementEdit from './components/postengagement/edit';
import ComingSoon from './pages/capture-tools/coming-soon';
import Header from './components/header';
import SideMenu from './components/navigation/side-menu';
import DrawerToggle from './components/navigation/drawer-toggle';
import './App.css';

function App() {
    return (
        <div className='min-h-screen bg-base-200'>
            <Router>
                <Header />
                <div aria-expanded="false" className="drawer lg:drawer-open">
                    <DrawerToggle />
                    <SideMenu />
                    <div className="drawer-content">
                        <div className="pt-16">
                            <Routes>
                            <Route path="/" element={<Navigate to="/capture-tools" />} />
                            <Route path="/capture-tools/" element={<Navigate to="/capture-tools/post-engagement" />} />
                            <Route path="capture-tools/*" Component={CaptureToolsPage}>
                                <Route path="post-engagement" Component={PostEngagement} />
                                <Route path="post-engagement/:engagementId/edit" Component={PostEngagementEdit} />
                                <Route path="*" Component={ComingSoon} />
                            </Route>
                            <Route path="*" Component={ComingSoon} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
