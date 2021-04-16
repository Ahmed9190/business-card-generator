import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
const HomePage = lazy(() => import('./pages/home/home'))
const AccountPage = lazy(() => import('./pages/account/account-page'))
const HandleCard = lazy(() => import('./pages/handle-card/handle-card'))
const CardsPage = lazy(() => import('./pages/cards-page/cards-page'))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route exact path="/" component={HomePage} />
              <Route path="/account/" component={AccountPage} />
              <Route path="/card/:action" component={HandleCard} />
              <Route exact path="/CardsPage" component={CardsPage} />
            </Suspense>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
