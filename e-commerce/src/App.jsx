import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header.jsx'
import RouterConfig from './config/RouterConfig.jsx'
import Loading from './components/Loading.jsx'

function App() {

  return (
    <div>
      <PageContainer>
        <Header/>
        <RouterConfig/>
        <Loading/>
      </PageContainer>
    </div>    
  )
}

export default App
