import { Routes, Route} from 'react-router-dom'
import LoginPage from './LoginPage'
import FrontPage from './FrontPage'
import InfoPage from './InfoPage'
import Navbar from '../NavBar'
import InfoDetailPage from './InfoDetailPage'
import Footer from '../Footer'
import AdminPage from './AdminPage'
//
const MasterPage = ({ user, handleLogin, handleLogout, username, password, setUsername, setPassword, infos, setInfos, handleDelete }) => {
    return (
        <div><Navbar user={user} handleLogout={handleLogout} />
            <Routes>
                
                <Route path="/" element={<FrontPage />} />
                <Route path="/articles/:id" element={<InfoDetailPage infos={infos} />} />
                <Route path="/articles" element={<InfoPage user={user} infos={infos}/>} />
                <Route path="/adminpage" element={<AdminPage user={user} infos={infos} handleDelete={handleDelete} setInfos={setInfos} />} />
                <Route 
                    path="/login" 
                    element={
                        <LoginPage 
                            handleLogin={handleLogin}
                            username={username}
                            password={password}
                            setUsername={setUsername}
                            setPassword={setPassword}
                        />
                    } 
                />
            </Routes>
            <Footer />
        </div>
    )
}

export default MasterPage