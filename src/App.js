import { setLocationsAsync } from "./store/reducers/attractionsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ModalCmp from "./cmps/ModalCmp";
import HomePage from "./pages/HomePage";
import Iceland from "./pages/Iceland";
import America from "./pages/America";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./cmps/Navbar/Navbar";
import firebase from './firebase/firebase';

function App() {
  const dispatch = useDispatch();
  const locations = firebase.firestore().collection("test")

  useEffect(() => {
    if (locations) {
      locations.get().then(async (querySnapshot) => {
        const locations = []
        await querySnapshot.forEach(async (doc) => {
          locations.push(doc.data())
        })
        await dispatch(setLocationsAsync(locations))
      })
    }
  }, [dispatch, locations]);

  return (
    <Router>
      <Navbar />
      <main className="app-container">
        {/* <ModalCmp /> */}
        <Switch>
          <Route path="/iceland" component={Iceland} />
          <Route path="/america" component={America} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
